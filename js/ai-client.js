/* ============================================================
 * AI 数字分身浏览器客户端（v4.0）
 * ------------------------------------------------------------
 * 负责三件事：
 *   1. 把对话历史 POST 给 Supabase Edge Function；
 *   2. 解析服务端转发的 SSE 流，逐字回调 onDelta；
 *   3. 把网络 / 限流 / 超时错误整理成前端能显示的结构。
 *
 * 不在这里放任何 API Key；DeepSeek Key 只在 Supabase Secrets 里。
 * ============================================================ */
(function () {
  "use strict";

  var VERSION = "4.0.0";

  function makeError(code, message, extra) {
    var err = new Error(message || "AI request failed");
    err.name = "AITwinError";
    err.code = code || "unknown";
    err.__aiTwin = true;
    if (extra) {
      if (extra.status) err.status = extra.status;
      if (extra.retryAfter) err.retryAfter = extra.retryAfter;
    }
    return err;
  }

  function parseHttpError(response, text) {
    var code = "http_" + response.status;
    var message = "模型服务暂时不可用，请稍后再试。";
    var retryAfter = 0;

    try {
      var data = JSON.parse(text);
      if (data && data.error) {
        code = data.error.code || code;
        message = data.error.message || message;
        if (data.error.details && data.error.details.retryAfter) {
          retryAfter = Number(data.error.details.retryAfter) || 0;
        }
      }
    } catch (e) {
      // 网关返回的 HTML 错误页，保持通用提示
    }

    return makeError(code, message, { status: response.status, retryAfter: retryAfter });
  }

  function readSse(response, handlers) {
    var reader = response.body.getReader();
    var decoder = new TextDecoder("utf-8", { fatal: false });
    var buffer = "";

    function processEvent(raw) {
      var lines = raw.split("\n");
      var dataLines = [];

      for (var i = 0; i < lines.length; i++) {
        if (lines[i].indexOf("data:") === 0) {
          dataLines.push(lines[i].slice(5).trim());
        }
      }

      if (!dataLines.length) return; // 注释行 / 心跳
      var data = dataLines.join("\n").trim();
      if (!data) return;

      if (data === "[DONE]") {
        handlers.finish({});
        return;
      }

      var event;
      try {
        event = JSON.parse(data);
      } catch (e) {
        return;
      }

      if (event.error) {
        handlers.fail(
          makeError(
            event.error.code || "stream_error",
            event.error.message || "回答到一半断了，请再问一次。"
          )
        );
        return;
      }

      if (typeof event.delta === "string" && event.delta) {
        handlers.delta(event.delta);
      }

      if (event.done) {
        handlers.finish({
          finishReason: event.finish_reason,
          usage: event.usage,
          truncated: !!event.truncated,
        });
      }
    }

    function pump() {
      return reader.read().then(function (result) {
        if (handlers.isFinished()) {
          try {
            reader.cancel();
          } catch (e) {
            // ignore
          }
          return;
        }

        if (result.done) {
          var tail = buffer.trim();
          if (tail) processEvent(tail);
          if (!handlers.isFinished()) handlers.finish({});
          return;
        }

        buffer += decoder.decode(result.value, { stream: true }).replace(/\r\n/g, "\n");

        var boundary = buffer.indexOf("\n\n");
        while (boundary !== -1) {
          var raw = buffer.slice(0, boundary);
          buffer = buffer.slice(boundary + 2);
          processEvent(raw);
          if (handlers.isFinished()) {
            try {
              reader.cancel();
            } catch (e) {
              // ignore
            }
            return;
          }
          boundary = buffer.indexOf("\n\n");
        }

        return pump();
      });
    }

    return pump();
  }

  function streamChat(options) {
    var opts = options || {};
    var config = window.AI_TWIN_CONFIG || {};
    var messages = Array.isArray(opts.messages) ? opts.messages : [];
    var lang = opts.lang === "en" ? "en" : "zh";
    var onDelta = typeof opts.onDelta === "function" ? opts.onDelta : function () {};
    var onDone = typeof opts.onDone === "function" ? opts.onDone : function () {};
    var onError = typeof opts.onError === "function" ? opts.onError : function () {};

    var finished = false;
    var fullText = "";
    var timedOut = false;
    var abortedByUser = false;
    var controller = null;
    var timeoutId = 0;

    function cleanup() {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = 0;
      }
    }

    function finish(meta) {
      if (finished) return;
      finished = true;
      cleanup();
      if (!fullText.trim()) {
        onError(makeError("empty_reply", "模型这次没有返回内容，请再问一次。"));
        return;
      }
      onDone(fullText, meta || {});
    }

    function fail(error) {
      if (finished) return;
      finished = true;
      cleanup();
      onError(error);
    }

    if (!config.enabled || !config.endpoint) {
      setTimeout(function () {
        fail(makeError("disabled", "数字分身暂时没有开启。"));
      }, 0);
      return { abort: function () {} };
    }

    controller = new AbortController();

    if (opts.signal) {
      if (opts.signal.aborted) {
        abortedByUser = true;
        controller.abort();
      } else {
        opts.signal.addEventListener(
          "abort",
          function () {
            abortedByUser = true;
            controller.abort();
          },
          { once: true },
        );
      }
    }

    timeoutId = setTimeout(function () {
      timedOut = true;
      controller.abort();
    }, Number(config.timeoutMs) || 45000);

    var headers = {
      "Content-Type": "application/json",
      "Accept": "text/event-stream",
    };
    if (config.anonKey) {
      headers.apikey = config.anonKey;
      headers.Authorization = "Bearer " + config.anonKey;
    }

    fetch(config.endpoint, {
      method: "POST",
      mode: "cors",
      credentials: "omit",
      cache: "no-store",
      headers: headers,
      body: JSON.stringify({
        messages: messages,
        lang: lang,
        stream: true,
      }),
      signal: controller.signal,
    })
      .then(function (response) {
        if (!response.ok) {
          return response.text().then(function (text) {
            throw parseHttpError(response, text);
          });
        }

        var type = (response.headers.get("content-type") || "").toLowerCase();

        // 兼容网关不返回 SSE 的情况：一次性 JSON 也接住。
        if (type.indexOf("text/event-stream") === -1) {
          return response.json().then(function (data) {
            if (data && data.error) {
              throw makeError(data.error.code || "server_error", data.error.message || "模型服务出错。");
            }
            var reply = data && typeof data.reply === "string" ? data.reply : "";
            if (!reply.trim()) {
              throw makeError("empty_reply", "模型这次没有返回内容，请再问一次。");
            }
            fullText = reply;
            onDelta(reply);
            finish({ usage: data.usage, model: data.model });
          });
        }

        if (!response.body) {
          throw makeError("stream_error", "浏览器没有拿到回答流，请再问一次。");
        }

        return readSse(response, {
          isFinished: function () {
            return finished;
          },
          delta: function (delta) {
            fullText += delta;
            onDelta(delta);
          },
          finish: finish,
          fail: fail,
        });
      })
      .catch(function (error) {
        if (finished) return;

        if (timedOut) {
          fail(makeError("timeout", "回答超时了，请再问一次。"));
          return;
        }
        if (abortedByUser || (error && error.name === "AbortError")) {
          fail(makeError("aborted", "这次回答已取消。"));
          return;
        }
        if (error && error.__aiTwin) {
          fail(error);
          return;
        }
        fail(makeError("network", "网络不太稳定，没能连上数字分身。"));
      });

    return {
      abort: function () {
        abortedByUser = true;
        controller.abort();
        fail(makeError("aborted", "这次回答已取消。"));
      },
    };
  }

  window.AITwin = {
    version: VERSION,
    streamChat: streamChat,
  };
})();
