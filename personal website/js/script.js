(function () {
  "use strict";

  /* ============================================================
   * 1. 文案字典（中英文）
   *    新增 key：ui.sfxOnShort / ui.sfxOffShort / ui.sfxAria /
   *             hero.badge / hero.deskNote /
   *             interests.note / toast.feedbackOk
   *    （v3.0：ui.sfxOn / ui.sfxOff 这对长文案 key 随木牌样式一起作废，
   *      拨片标签只剩"开 / 关"一个字，改名 sfxOnShort / sfxOffShort）
   * ============================================================ */
  var I18N = {
    zh: {
      brand: "郑先生",
      name: "郑先生",
      role: "学生",
      avatar: "郑",
      avatarShort: "郑",
      "hero.greet": "欢迎来到我的个人主页 👋",
      /* v2.11：hero.badge / hero.badgeOff 两个 key 已无人引用 ——
         首屏那块「暖灯已点亮」徽标整块删掉了，开关换成吊灯的扯线。
         保留这两行只为不动既有词典（新页面不再读它们）。 */
      "hero.badge": "暖灯已点亮",
      "hero.badgeOff": "暖灯已熄灭",
      "hero.deskNote": "泡了杯咖啡，慢慢看。",
      "hero.scrollHint": "向下滚动",
      "nav.about": "关于我",
      "nav.contact": "联系方式",
      "nav.projects": "项目与作品",
      "nav.interests": "我的兴趣",
      "nav.feedback": "意见反馈",
      "theme.aria": "切换配色",
      "theme.dark": "深色",
      "theme.mid": "浅色",
      "contact.email": "邮箱",
      "contact.phone": "电话",
      "projects.tag1": "学习辅助",
      "projects.t1": "vibe coding 制作学习辅助网页",
      "projects.d1": "通过 vibe coding 方式制作的学习辅助网页，帮助更高效地学习。",
      "projects.tag2": "游戏",
      "projects.t2": "侦探解密游戏《奇迹demo》",
      "projects.d2": "一款侦探解密题材的游戏 demo，正在持续打磨中。",
      "projects.tag3": "探索中",
      "projects.t3": "下一步正在探索中！",
      "projects.d3": "更多有趣的想法正在孵化，敬请期待。",
      "interests.i1": "乒乓球",
      "interests.i2": "武术",
      "interests.i3": "散步",
      "interests.i4": "游戏",
      "interests.i5": "音乐",
      "interests.i6": "写剧本",
      "interests.i7": "捣鼓奇怪的东西",
      "interests.note": "爱好不多，但都很上头。",
      "form.name": "姓名",
      "form.namePh": "请输入姓名（可以不填写真实姓名）",
      "form.email": "邮箱",
      "form.emailPh": "请输入邮箱（选填）",
      /* v2.15：反馈表新增两栏（关系 / 设备），都是下拉。
         选项文案也要双语 —— applyLanguage 会连 <option> 一起换掉；
         option 的 value 用固定英文键，切语言只换显示、入库的值永远稳定。 */
      "form.relation": "与主页人的关系",
      "form.device": "反馈针对的设备",
      "form.pick": "请选择",
      "relation.friend": "朋友",
      "relation.family": "家人",
      "relation.classmate": "同学",
      "relation.colleague": "同事",
      "relation.online": "网友",
      "relation.recruiter": "面试官 / HR",
      "relation.other": "其他",
      "device.desktop": "电脑端",
      "device.mobile": "手机端",
      "device.tablet": "平板",
      "form.msg": "意见内容",
      "form.msgPh": "请写下您的意见或建议",
      "form.submit": "提交",
      "form.sending": "提交中...",
      "form.tip": "提交后我们会尽快处理，感谢您的反馈。",
      "toast.feedbackOk": "感谢您的反馈，已提交成功！",
      /* v2.15：提交前的轻量校验提示 + 网络不顺利时的兜底提示 */
      "toast.needName": "请先填写您的姓名",
      "toast.needRelation": "请选择您与主页人的关系",
      "toast.needDevice": "请选择这条反馈针对的设备",
      "toast.needMsg": "请先写下意见内容",
      "toast.needEmail": "邮箱格式好像不太对，请检查一下",
      "toast.feedbackQueued": "网络不太顺利，反馈已暂存，联网后会自动补发",
      // v3.0：音效开关改成和左下角开关同一套拨片控件后，标签只剩一个字
      // （旧文案"音效开 / 音效关"是木牌上的长标签，放不进 108 宽的槽）
      "ui.sfxOnShort": "音效 开",
      "ui.sfxOffShort": "音效 关",
      "ui.sfxAria": "音效开关",
      "ui.lampOn": "吊灯亮了，屋里暖起来。",
      "ui.lampOff": "吊灯灭了，屋里暗了一档。",
      "ui.weatherSun": "窗外放晴了。",
      "ui.weatherRain": "窗外下起雨了。",
      "ui.weatherSnow": "窗外落雪了。",
      "ui.windowAria": "点击切换窗外天气",
      "ui.lampAria": "拉一下扯线开关吊灯",
      // v3.3：窄屏背景平移箭头
      "ui.scenePrev": "背景向左移动",
      "ui.sceneNext": "背景向右移动",
      footer: "© 2026 郑先生 · 个人主页",
      speakGreet: "你好！有什么能帮到您？",
      speakIdle: "陷入了什么思考呀？我能帮忙吗？",
      "hover.email": "有事欢迎与我邮箱联系！",
      "hover.phone": "有事欢迎致电！",
      "hover.proj1": "还在持续优化中！欢迎使用！",
      "hover.proj2": "正在努力改进美术和修bug...（掉头发）",
      "hover.proj3": "敬请期待！",
      "hover.submit": "新人一个，手下留情，不要骂我..."
    },
    en: {
      brand: "Mr. Zheng",
      name: "Mr. Zheng",
      role: "Student",
      avatar: "Zheng",
      avatarShort: "Zheng",
      "hero.greet": "Welcome to my homepage 👋",
      "hero.badge": "The warm lamp is on",
      "hero.badgeOff": "The lamp is off — the room is dark",
      "hero.deskNote": "Made a cup of coffee — take your time.",
      "hero.scrollHint": "Scroll down",
      "nav.about": "About Me",
      "nav.contact": "Contact",
      "nav.projects": "Projects",
      "nav.interests": "Interests",
      "nav.feedback": "Feedback",
      "theme.aria": "Switch palette",
      "theme.dark": "Dark",
      "theme.mid": "Light",
      "contact.email": "Email",
      "contact.phone": "Phone",
      "projects.tag1": "Study Tool",
      "projects.t1": "Study-assist webpage made with vibe coding",
      "projects.d1": "A study-assist webpage built through vibe coding to help learn more efficiently.",
      "projects.tag2": "Game",
      "projects.t2": "Detective puzzle game \"Miracle (demo)\"",
      "projects.d2": "A detective puzzle game demo, still being polished.",
      "projects.tag3": "Exploring",
      "projects.t3": "Next step: exploring!",
      "projects.d3": "More fun ideas are hatching, stay tuned.",
      "interests.i1": "Table Tennis",
      "interests.i2": "Martial Arts",
      "interests.i3": "Walking",
      "interests.i4": "Gaming",
      "interests.i5": "Music",
      "interests.i6": "Screenwriting",
      "interests.i7": "Tinkering with curious things",
      "interests.note": "Not many hobbies, but each one sticks.",
      "form.name": "Name",
      "form.email": "Email",
      "form.namePh": "Enter your name (real name optional)",
      "form.emailPh": "Enter your email (optional)",
      "form.relation": "Your relation to me",
      "form.device": "Device you're reporting",
      "form.pick": "Please select",
      "relation.friend": "Friend",
      "relation.family": "Family",
      "relation.classmate": "Classmate",
      "relation.colleague": "Colleague",
      "relation.online": "Online friend",
      "relation.recruiter": "Interviewer / HR",
      "relation.other": "Other",
      "device.desktop": "Desktop",
      "device.mobile": "Mobile",
      "device.tablet": "Tablet",
      "form.msg": "Message",
      "form.msgPh": "Write your feedback or suggestions",
      "form.submit": "Submit",
      "form.sending": "Sending...",
      "form.tip": "We'll handle it as soon as possible. Thanks for your feedback.",
      "toast.feedbackOk": "Thanks! Your feedback has been submitted.",
      "toast.needName": "Please enter your name first",
      "toast.needRelation": "Please pick your relation to the site owner",
      "toast.needDevice": "Please pick which device this is about",
      "toast.needMsg": "Please write your feedback first",
      "toast.needEmail": "That email address looks off, please check it",
      "toast.feedbackQueued": "Network hiccup - saved locally, will send automatically",
      "ui.sfxOnShort": "Sound On",
      "ui.sfxOffShort": "Sound Off",
      "ui.sfxAria": "Sound switch",
      "ui.lampOn": "Lamp on — the room feels warm.",
      "ui.lampOff": "Lamp off — the room dims a notch.",
      "ui.weatherSun": "It cleared up outside.",
      "ui.weatherRain": "It started raining outside.",
      "ui.weatherSnow": "Snow is falling outside.",
      "ui.windowAria": "Click to change the weather outside",
      "ui.lampAria": "Pull the cord to toggle the pendant lamp",
      // v3.3: narrow-screen background pan arrows
      "ui.scenePrev": "Move the background left",
      "ui.sceneNext": "Move the background right",
      footer: "© 2026 Mr. Zheng · Homepage",
      speakGreet: "Hello! How can I help you?",
      speakIdle: "Lost in thought? Can I help?",
      "hover.email": "Feel free to reach me by email!",
      "hover.phone": "Feel free to call me!",
      "hover.proj1": "Still improving — welcome to try it!",
      "hover.proj2": "Working on the art and fixing bugs... (losing hair)",
      "hover.proj3": "Stay tuned!",
      "hover.submit": "Just a newbie, please be gentle..."
    }
  };

  var currentLang = "zh";

  /* ============================================================
   * 2. 8-bit 音效引擎（Web Audio 程序化合成，零音频文件）
   * ============================================================ */
  var PixelSFX = (function () {
    var ctx = null;
    var master = null;
    var enabled = true;

    function init() {
      if (ctx) return;
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) { enabled = false; return; }
      try {
        ctx = new AC();
        master = ctx.createGain();
        master.gain.value = 0.16;
        master.connect(ctx.destination);
      } catch (err) {
        ctx = null;
        enabled = false;
      }
    }

    // 一个方波音符：freq 频率 / at 延迟(秒) / dur 时长(秒)
    function tone(freq, at, dur, type, vol) {
      var t0 = ctx.currentTime + at;
      var osc = ctx.createOscillator();
      var gain = ctx.createGain();
      osc.type = type || "square";
      osc.frequency.setValueAtTime(freq, t0);
      var v = vol == null ? 0.7 : vol;
      gain.gain.setValueAtTime(0, t0);
      gain.gain.linearRampToValueAtTime(v, t0 + 0.006);
      gain.gain.setValueAtTime(v, t0 + dur * 0.6);
      gain.gain.linearRampToValueAtTime(0, t0 + dur);
      osc.connect(gain);
      gain.connect(master);
      osc.start(t0);
      osc.stop(t0 + dur + 0.02);
    }

    function play(name) {
      if (!enabled) return;
      if (!ctx) {
        // 首次用户手势之前，浏览器不允许出声；悬停音直接跳过
        if (name === "hover") return;
        init();
        if (!ctx) return;
      }
      if (ctx.state === "suspended") { ctx.resume(); }
      switch (name) {
        case "click":
          tone(880, 0, 0.06, "square", 0.6);
          tone(1320, 0.05, 0.06, "square", 0.4);
          break;
        case "toggle":
          tone(660, 0, 0.06, "square", 0.55);
          tone(990, 0.06, 0.08, "square", 0.45);
          break;
        case "pop":
          tone(1180, 0, 0.05, "triangle", 0.5);
          break;
        case "hover":
          tone(1560, 0, 0.025, "square", 0.18);
          break;
        case "submit":
          tone(660, 0, 0.08, "square", 0.55);
          tone(880, 0.09, 0.08, "square", 0.55);
          tone(1320, 0.18, 0.16, "square", 0.5);
          break;
      }
    }

    return {
      play: play,
      unlock: function () { init(); },
      setEnabled: function (v) { enabled = !!v; if (enabled) init(); },
      isEnabled: function () { return enabled; }
    };
  })();

  /* ============================================================
   * 3. 像素粒子引擎（低分辨率画布放大，天然像素颗粒）
   *    v1.2：SCALE 4 → 3（更细腻），新增叶子/雪花两种形状，
   *    并支持"快速连点"叠加粒子数量（彩蛋 3：粒子扩展）
   * ============================================================ */
  var PixelParticles = (function () {
    var canvas = document.getElementById("pxParticles");
    if (!canvas) return { burst: function () {}, spawn: function () {} };

    var pctx = canvas.getContext("2d");
    var SCALE = 3;            // 内部 1 像素 = 屏幕 3 像素
    var MAX = 96;             // 粒子上限（性能保护）
    var particles = [];
    var rafId = null;

    var SHAPES = {
      heart: [
        ".XX.XX.",
        "XXXXXXX",
        "XXXXXXX",
        ".XXXXX.",
        "..XXX..",
        "...X..."
      ],
      star: [
        "...X...",
        "..XXX..",
        "XXXXXXX",
        ".XXXXX.",
        "..X.X..",
        ".X...X."
      ],
      note: [
        "....XX.",
        "....XX.",
        "....X..",
        "...XX..",
        ".XXX...",
        ".XXX..."
      ],
      leaf: [
        "..XX..",
        ".XXXX.",
        "XXXXX.",
        ".XXXX.",
        "..XX..",
        "..X..."
      ],
      sparkle: [
        "...X...",
        "...X...",
        ".X.X.X.",
        "..XXX..",
        "XXXXXXX",
        "..XXX..",
        ".X.X.X.",
        "...X..."
      ],
      dot: [
        "XX.",
        "XX.",
        "XX."
      ]
    };

    var COLORS = ["#F2953F", "#D9644A", "#FFC94B", "#7FA860", "#FFE1A8", "#C89B6A"];
    var KINDS = ["heart", "star", "note", "leaf", "sparkle"];

    // 预计算每种形状的像素点坐标
    var POINTS = {};
    Object.keys(SHAPES).forEach(function (name) {
      var rows = SHAPES[name];
      var pts = [];
      for (var y = 0; y < rows.length; y++) {
        for (var x = 0; x < rows[y].length; x++) {
          if (rows[y][x] === "X") pts.push([x, y]);
        }
      }
      POINTS[name] = pts;
    });

    function resize() {
      canvas.width = Math.max(1, Math.floor(window.innerWidth / SCALE));
      canvas.height = Math.max(1, Math.floor(window.innerHeight / SCALE));
    }

    function pick(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    function spawn(clientX, clientY, kind) {
      if (particles.length >= MAX) particles.splice(0, 6);
      particles.push({
        x: clientX / SCALE,
        y: clientY / SCALE,
        vx: (Math.random() - 0.5) * 1.4,
        vy: -Math.random() * 1.7 - 0.5,
        life: 0,
        max: 42 + Math.random() * 24,
        kind: kind || pick(KINDS),
        color: pick(COLORS)
      });
      start();
    }

    function burst(clientX, clientY, count) {
      var n = count || 8;
      for (var i = 0; i < n; i++) {
        spawn(clientX + (Math.random() - 0.5) * 60,
              clientY + (Math.random() - 0.5) * 40,
              pick(KINDS));
      }
    }

    function step() {
      rafId = null;
      pctx.clearRect(0, 0, canvas.width, canvas.height);

      var alive = [];
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.life++;
        if (p.life >= p.max) continue;
        p.vy += 0.055;             // 重力
        p.x += p.vx;
        p.y += p.vy;
        if (p.y > canvas.height + 8) continue;
        alive.push(p);
      }
      particles = alive;

      for (var j = 0; j < particles.length; j++) {
        var q = particles[j];
        var prog = q.life / q.max;
        // 像素风：透明度离散化，而不是平滑淡出
        pctx.globalAlpha = prog > 0.75 ? 0.35 : (prog > 0.4 ? 0.7 : 1);
        pctx.fillStyle = q.color;
        var pts = POINTS[q.kind];
        var bx = Math.round(q.x);
        var by = Math.round(q.y);
        for (var k = 0; k < pts.length; k++) {
          pctx.fillRect(bx + pts[k][0], by + pts[k][1], 1, 1);
        }
      }
      pctx.globalAlpha = 1;

      if (particles.length) start();
    }

    function start() {
      if (rafId === null) rafId = window.requestAnimationFrame(step);
    }

    resize();
    window.addEventListener("resize", resize);

    return { spawn: spawn, burst: burst };
  })();

  /* ============================================================
   * 4. 像素提示条（替代 1.0 的 window.alert）
   * ============================================================ */
  var toastEl = document.getElementById("pxToast");
  var toastTextEl = document.getElementById("pxToastText");
  var toastTimer = null;

  function showToast(key) {
    if (!toastEl || !toastTextEl) return;
    toastTextEl.textContent = I18N[currentLang][key] || "";
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.classList.remove("show");
    }, 3200);
  }

  /* ============================================================
   * 5. 语言切换
   * ============================================================ */
  var sfxToggleEl = document.getElementById("sfxToggle");

  /* v3.1：音效开关改回"单按钮"（右上角一枚木钮），文案由这一个标签轮流显示
     "音效 开 / 音效 关"。DOM 是唯一真源：CSS 靠 [aria-pressed="false"]
     决定换哪张材质、字亮还是字暗。 */
  function updateSfxLabel() {
    if (!sfxToggleEl) return;
    var on = PixelSFX.isEnabled();
    sfxToggleEl.setAttribute("aria-pressed", on ? "true" : "false");
    var lb = sfxToggleEl.querySelector(".sfx-btn-label");
    if (lb) {
      var key = on ? "ui.sfxOnShort" : "ui.sfxOffShort";
      lb.setAttribute("data-i18n", key);
      var dict = I18N[currentLang] || I18N.zh;
      if (dict && dict[key] !== undefined) lb.textContent = dict[key];
    }
  }

  function applyLanguage(lang) {
    currentLang = lang;
    var dict = I18N[lang];

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-ph");
      if (dict[key] !== undefined) {
        el.setAttribute("placeholder", dict[key]);
      }
    });

    // v1.2：可交互装饰（窗户、台灯）的 aria-label 也跟随语言
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (dict[key] !== undefined) {
        el.setAttribute("aria-label", dict[key]);
      }
    });

    document.documentElement.setAttribute("data-lang", lang);

    document.querySelectorAll(".lang-switch").forEach(function (sw) {
      var isEn = lang === "en";
      sw.classList.toggle("en", isEn);
      sw.setAttribute("aria-checked", isEn ? "true" : "false");
    });
    document.querySelectorAll(".lang-switch .lang-switch-label").forEach(function (lb) {
      lb.classList.toggle("is-active", lb.getAttribute("data-lang-opt") === lang);
    });

    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

    updateSfxLabel();

    if (speechBubble && speechBubble.classList.contains("show")) {
      speechBubble.textContent = dict[speechBubbleKey];
    }
  }

  function toggleLanguage() {
    applyLanguage(currentLang === "zh" ? "en" : "zh");
  }

  /* ============================================================
   * 6. 索引跳转 + 当前板块高亮
   * ============================================================ */
  var navLinks = document.querySelectorAll(".nav-link");
  var sections = Array.prototype.slice.call(
    document.querySelectorAll(".section")
  );

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      var target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        closeSidebar();
      }
    });
  });

  function updateActiveLink() {
    var scrollPos = window.scrollY + 120;
    var currentId = sections[0] ? sections[0].id : "";
    sections.forEach(function (sec) {
      if (sec.offsetTop <= scrollPos) {
        currentId = sec.id;
      }
    });
    navLinks.forEach(function (link) {
      if (link.getAttribute("href") === "#" + currentId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  /* ============================================================
   * 7. 移动端侧边栏
   * ============================================================ */
  var sidebar = document.getElementById("sidebar");
  var sidebarMask = document.getElementById("sidebarMask");
  var menuBtn = document.getElementById("menuBtn");

  function openSidebar() {
    sidebar.classList.add("open");
    sidebarMask.classList.add("show");
  }

  function closeSidebar() {
    sidebar.classList.remove("open");
    sidebarMask.classList.remove("show");
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      if (sidebar.classList.contains("open")) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  }
  sidebarMask.addEventListener("click", closeSidebar);

  /* ============================================================
   * 8. 唯一的头像（像素小人）：可拖动
   *    翻到看不见它时，会慢慢地"跳"到当前可见区域的随机位置
   * ============================================================ */
  var floatAvatarWrap = document.getElementById("floatAvatarWrap");
  var floatAvatar = document.getElementById("floatAvatar");
  var speechBubble = document.getElementById("speechBubble");
  var speechBubbleKey = "speakGreet";
  var heroSlot = document.getElementById("heroAvatarSlot");
  var heroName = document.getElementById("heroName");

  var AVATAR_SIZE = 96;    // 与 CSS 中 .float-avatar 尺寸保持一致（v2.7: 64 -> 96；v2.8 只换 32x32 素材，尺寸不变）
  var BUBBLE_SPACE = 60;
  var EDGE_PAD = 26;
  /* v2.6：跳跃改走路 —— 时长按"距离 / 速度"算，不再是固定 4200ms 跳三段。
     420px/s 比原来明显快，620ms 是最短保底，避免小位移读起来像瞬移。 */
  var WALK_SPEED = 420;
  var WALK_MIN_MS = 620;

  /* v1.2：位移/淡入类改为平滑缓动（原 steps(3) 会读成卡顿） */
  var OPACITY_TRANSITION = "opacity 0.32s cubic-bezier(0.2, 0.8, 0.3, 1)";

  var floatVisible = true;
  var pinned = false;
  var walking = false;
  var scrollTimer = null;

  function setWrapPos(left, top) {
    floatAvatarWrap.getAnimations().forEach(function (a) { a.cancel(); });
    floatAvatar.classList.remove("walking");
    floatAvatarWrap.style.transition = OPACITY_TRANSITION;
    floatAvatarWrap.style.left = left + "px";
    floatAvatarWrap.style.top = top + "px";
  }

  /* v3.0（用户裁定）：小人的"家"从首屏欢迎牌上的那个插槽（#heroAvatarSlot，
     实测是块 0 宽的占位）挪进房间里 —— 用户圈的"窗户左下角台沿那一带"，
     并且是固定初始位置：每次加载都落在这里，不记忆上次位置。

     位置算在"场景坐标"里（窗户左缘往左 114.2 源像素、窗下沿往下 32.7 源像素，
     各自再乘 --px-scale），和窗户、桌子、桌上物品共用同一套房间坐标 ——
     换屏幕尺寸时它永远贴在那扇窗的左下角，
     而不会像写死视口百分比那样在别的分辨率下漂到墙上没有窗的地方。
     这两个常数是按用户确认的落点反解出来的：1920 视口下正好 = 视口 69% / 42%
     （小人盒子中心 x 1303 / y 413）。 */
  /* v3.1：落点改成"窗前（窗台下沿）"—— 横向取窗户盒子的中线（站在窗前正中），
     纵向让小人脚底踩在窗台下沿（盒子中心 = 窗下沿 - 半个小人高）。
     两者都由窗户的 getBoundingClientRect() 现算，不再写死源像素常数，
     换分辨率 / 换房间底图都还准（窗户量到哪，人就站到哪）。
     上面 v3.0 的 114.2 / 32.7 那一版说明已作废，常数和配套的 sceneScale() 一并删掉。 */
  var homeWindowEl = document.getElementById("pxWindow");

  function homePos() {
    var w = homeWindowEl ? homeWindowEl.getBoundingClientRect() : null;
    var cx, cy;
    if (w && w.width > 0) {
      /* v3.1：窗前横向居中 + 脚踩窗台下沿（不乘 --px-scale，窗户量到哪就站到哪） */
      cx = w.left + window.scrollX + w.width / 2;
      cy = w.bottom + window.scrollY - AVATAR_SIZE / 2;
    } else {
      /* 兜底：窗户不在（理论上不会发生）时退回视口百分比 */
      cx = window.scrollX + window.innerWidth * 0.69;
      cy = window.scrollY + window.innerHeight * 0.42;
    }

    /* 夹在可视范围内（和 followPos 同一套边界：右边让开侧边栏，
       上边给对话气泡留出 BUBBLE_SPACE）—— 极窄屏下窗户被挪到右上角，
       不夹的话小人会被带到视口外 */
    var isDesktop = window.innerWidth > 820;
    var sbEl = document.getElementById("sidebar");
    var vpMinLeft = ((isDesktop && sbEl) ? sbEl.offsetWidth + EDGE_PAD : EDGE_PAD);
    var vpMaxLeft = Math.max(vpMinLeft + 1, window.innerWidth - AVATAR_SIZE - EDGE_PAD);
    var vpMinTop = BUBBLE_SPACE + EDGE_PAD;
    var vpMaxTop = Math.max(vpMinTop + 1, window.innerHeight - AVATAR_SIZE - EDGE_PAD);

    return {
      left: Math.round(Math.min(Math.max(cx - AVATAR_SIZE / 2, window.scrollX + vpMinLeft),
        window.scrollX + vpMaxLeft)),
      top: Math.round(Math.min(Math.max(cy - AVATAR_SIZE / 2, window.scrollY + vpMinTop),
        window.scrollY + vpMaxTop))
    };
  }

  function followPos() {
    var isDesktop = window.innerWidth > 820;
    var sb = document.getElementById("sidebar");
    var sidePad = (isDesktop && sb) ? sb.offsetWidth + EDGE_PAD : EDGE_PAD;
    var minLeft = sidePad;
    var maxLeft = Math.max(minLeft + 1, window.innerWidth - AVATAR_SIZE - EDGE_PAD);
    var minTop = BUBBLE_SPACE + EDGE_PAD;
    var maxTop = Math.max(minTop + 1, window.innerHeight - AVATAR_SIZE - EDGE_PAD);
    return {
      left: window.scrollX + minLeft + Math.random() * (maxLeft - minLeft),
      top: window.scrollY + minTop + Math.random() * (maxTop - minTop)
    };
  }

  function followHome() {
    if (pinned) return;
    var p = homePos();
    startWalk(p.left, p.top);
  }

  function lerp(a, b, t) { return a + (b - a) * t; }

  /* v2.6：小人走路（替换原来的抛物线跳跃）。
     匀速直线走完全程，走的过程中挂着 .walking，由 CSS 播两帧摆腿；
     停下就是 .walking 摘掉 —— 回到睁眼/闭眼的待机眨眼。
     取整到像素：像素小人的位移必须是整数像素，否则每个像素格都会被重采样糊掉。 */
  function walkTo(left, top, onDone) {
    var fromL = parseFloat(floatAvatarWrap.style.left) || 0;
    var fromT = parseFloat(floatAvatarWrap.style.top) || 0;
    if (Math.round(fromL) === Math.round(left) && Math.round(fromT) === Math.round(top)) return;

    /* 朝右画的素材，往左走就整体镜像（挂在内层素材上，不碰外层变换） */
    var dir = left < fromL ? -1 : 1;
    floatAvatarWrap.getAnimations().forEach(function (a) { a.cancel(); });
    floatAvatar.classList.remove("walking");
    void floatAvatar.offsetWidth;
    floatAvatar.classList.add("walking");
    floatAvatar.style.setProperty("--px-hero-dir", dir);

    var dx = left - fromL;
    var dy = top - fromT;
    var dist = Math.sqrt(dx * dx + dy * dy);
    var dur = Math.max(WALK_MIN_MS, dist / WALK_SPEED * 1000);
    var STEPS = Math.max(2, Math.round(dur / 55));
    var frames = [];
    for (var i = 0; i <= STEPS; i++) {
      var t = i / STEPS;
      frames.push({
        left: Math.round(lerp(fromL, left, t)) + "px",
        top: Math.round(lerp(fromT, top, t)) + "px"
      });
    }
    frames[0].offset = 0;
    frames[frames.length - 1].offset = 1;

    var anim = floatAvatarWrap.animate(frames, { duration: dur, fill: "none" });
    anim.onfinish = function () {
      floatAvatarWrap.style.left = Math.round(left) + "px";
      floatAvatarWrap.style.top = Math.round(top) + "px";
      floatAvatar.classList.remove("walking");
      if (onDone) onDone();
    };
  }

  function cancelWalk() {
    walking = false;
    floatAvatarWrap.getAnimations().forEach(function (a) { a.cancel(); });
    floatAvatar.getAnimations().forEach(function (a) { a.cancel(); });
    floatAvatar.classList.remove("walking");
  }

  function startWalk(left, top) {
    walking = true;
    walkTo(left, top, function () { walking = false; });
  }

  function maybeFollow() {
    /* v3.3（用户裁定）：窄屏小人是固定件（右下角，音效钮正上方）——
       不参与"跟随窗户 / 跟着滚动游走"那一套；窄屏也没有鼠标悬停这回事。
       CSS 那边用 !important 锁死了落点，这里再拦一道，
       免得 walk 动画白发一轮帧、也免得 pinned / walking 状态被搅乱。 */
    if (isNarrow()) return;
    if (drag.active) return;
    if (walking) return;
    if (heroVisible()) {
      if (!pinned) followHome();
      return;
    }
    if (avatarInViewport()) return;
    var f = followPos();
    startWalk(f.left, f.top);
  }

  function ensureAvatarVisible() {
    if (isNarrow()) return;   // v3.3：窄屏固定件，不需要"拉回视口"
    if (drag.active) return;
    if (walking) return;
    if (avatarInViewport()) return;
    var p = heroVisible() ? homePos() : followPos();
    startWalk(p.left, p.top);
  }

  function initFloat() {
    var p = homePos();
    floatAvatarWrap.style.transition = OPACITY_TRANSITION;
    floatAvatarWrap.style.left = p.left + "px";
    floatAvatarWrap.style.top = p.top + "px";
    floatAvatarWrap.classList.add("show");
    void floatAvatarWrap.offsetWidth;
  }

  function avatarInViewport() {
    var r = floatAvatarWrap.getBoundingClientRect();
    return r.bottom > 0 && r.top < window.innerHeight &&
      r.right > 0 && r.left < window.innerWidth;
  }

  function heroVisible() {
    var r = heroSlot.getBoundingClientRect();
    return r.bottom > 0 && r.top < window.innerHeight;
  }

  window.addEventListener("scroll", function () {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(maybeFollow, 300);
  }, { passive: true });

  /* ============================================================
   * 9. 头像拖动：轻点不瞬移，拖动超过阈值才进入移动状态
   * ============================================================ */
  var drag = { active: false, moved: false, sx: 0, sy: 0, baseLeft: 0, baseTop: 0 };

  floatAvatar.addEventListener("pointerdown", function (e) {
    drag.active = true;
    drag.moved = false;
    drag.sx = e.clientX;
    drag.sy = e.clientY;
    var rect = floatAvatarWrap.getBoundingClientRect();
    drag.baseLeft = rect.left + window.scrollX;
    drag.baseTop = rect.top + window.scrollY;
    e.preventDefault();  // 同上：头像里是 <img>，别触发原生拖图片
    floatAvatar.setPointerCapture && floatAvatar.setPointerCapture(e.pointerId);
  });

  floatAvatar.addEventListener("pointermove", function (e) {
    if (!drag.active) return;
    if (!drag.moved) {
      if (Math.abs(e.clientX - drag.sx) > 4 || Math.abs(e.clientY - drag.sy) > 4) {
        drag.moved = true;
        floatAvatarWrap.style.transition = "none";
        floatAvatar.classList.add("dragging");
        pinned = true;
      } else {
        return;
      }
    }
    floatAvatarWrap.style.left = drag.baseLeft + (e.clientX - drag.sx) + "px";
    floatAvatarWrap.style.top = drag.baseTop + (e.clientY - drag.sy) + "px";
  });

  function endDrag() {
    if (!drag.active) return;
    drag.active = false;
    floatAvatar.classList.remove("dragging");
    floatAvatarWrap.style.transition = OPACITY_TRANSITION;

    if (!drag.moved) {
      showSpeech("speakGreet");
      PixelSFX.play("pop");
      PixelParticles.burst(
        parseFloat(floatAvatarWrap.style.left) - window.scrollX + AVATAR_SIZE / 2,
        parseFloat(floatAvatarWrap.style.top) - window.scrollY,
        6
      );
    } else {
      floatAvatar.classList.remove("wobble");
      void floatAvatar.offsetWidth;
      floatAvatar.classList.add("wobble");
      setTimeout(function () {
        floatAvatar.classList.remove("wobble");
      }, 700);
    }
  }

  floatAvatar.addEventListener("pointerup", endDrag);
  floatAvatar.addEventListener("pointercancel", endDrag);

  /* ============================================================
   * 10. 首屏吊牌：拖拽 + 绳长（v2.14c 把原 10a / 10b 合成一节）
   *      绳子上端钉在「这一节的天花板」上，牌顶 = 绳子上端 + 绳长，
   *      所以绳长就是牌子挂多高；--px-rope 同时是绳子的绘制高度。
   *      拖拽语义：横向 = 牌子左右平移；竖向 = 改绳长（绳子跟着伸长缩短，
   *      而不是牌子从绳子上掉下来）。绳长钳制在 [ROPE_MIN, ROPE_MAX]；
   *      窄屏两块牌上下堆叠时，还不许撞上另一块牌。拉到头会绷紧抖 260ms。
   *      两块牌（牌 A 名牌 / 牌 B 问候牌）行为一致、都能拖。
   * ============================================================ */
  var ROPE_MAX = 250;    // 绳子最长：用户要求「加长到 250px 左右」
  var ROPE_MIN = 24;     // 最短：牌顶不会撞到天花板
  var ROPE_SLACK = 40;   // 初始留出可继续往下拉的余量
  var ROPE_GAP = 24;     // 窄屏两块牌上下堆叠时，至少留一个格子的缝
  var TAUT_MS = 260;     // 拉到头绷紧抖动的时长（与 CSS 动画一致）
  var signRope = Array.prototype.slice.call(document.querySelectorAll(".px-sign"));
  var signPanel = document.querySelector(".hero-panel");

  function signNum(v) { return v ? +v : 0; }

  /* 牌子的竖向位置只由两件事决定：
       __pin  = 绳子上端在文档里的 y（钉住不动，只能靠改绳长上下）
       __rope = 绳长  ⇒  牌顶 = __pin + __rope
     transform 只负责把「牌顶」和「牌的自然顶」的差补上。
     手拖位移只留横向（dataset.dx），竖向一律走绳长。 */
  function applySign(sign) {
    sign.style.setProperty("--px-rope", signNum(sign.__rope) + "px");
    sign.style.transform = "translate(" + signNum(sign.dataset.dx) + "px," +
      (signNum(sign.__pin) + signNum(sign.__rope) - signNum(sign.__natTop)) + "px)";
  }

  /* 绳长的可用范围：布局时算一次（见 signRanges），拖动过程中不再重算。
     v2.14d：旧写法每帧拿「另一块牌的实时 rect」互算区间，两块牌被拖开之后
     会互相压缩行程 —— 实测 1600 宽先把牌 A 拖到绳长 250、再把牌 B 拖到 24，
     牌 B 的区间只剩 [24, 34]；窄屏 390 把牌 A 拖到 250 后牌 B 只剩
     [210, 250]、往上拉一动不动。用户看到的就是「拖过之后卡住、
     只能左右不能上下」。区间改成常量之后，拖哪块都不影响另一块。 */
  function ropeRange(sign) {
    return { lo: signNum(sign.__lo), hi: signNum(sign.__hi) };
  }

  /* 每块牌的绳长区间：只有两块牌横向真的叠在一起（窄屏上下堆叠）才互相约束，
     桌面两块牌左右并排 ⇒ 各拖各的、行程都是满的 [24, 250]。
     上界再抬一次到不低于当前绳长，保证初始位置一定合法；
     lo 最后夹一次不让它超过 hi ⇒ 区间永远不会塌成单点（卡死）。 */
  function signRanges() {
    var boxes = signRope.map(function (s) {
      var r = s.getBoundingClientRect();
      return { s: s, left: r.left, right: r.right, h: s.offsetHeight,
               top: signNum(s.__pin) + signNum(s.__rope) };
    });
    function sideBySide(a, b) { return a.right <= b.left || a.left >= b.right; }
    /* 第一遍：往上最多拉到哪 —— 谁在上面谁让位（用对手当前的顶算，也就是初始布局）。 */
    boxes.forEach(function (b) {
      var lo = ROPE_MIN;
      boxes.forEach(function (o) {
        if (o.s === b.s || sideBySide(b, o)) return;          // 左右并排，互不干涉
        if (o.top + o.h <= b.top) lo = Math.max(lo, o.top + o.h + ROPE_GAP - signNum(b.s.__pin));
      });
      b.lo = Math.max(lo, ROPE_MIN);
      b.minTop = signNum(b.s.__pin) + b.lo;                   // 它拉到顶时的顶
    });
    /* 第二遍：往下最多放到哪 —— 用对手【拉到顶时】的顶算，
       这样两块牌各自拖到自己的极限也不会叠在一起（390 宽实测缝恒为 24）。 */
    boxes.forEach(function (b) {
      var hi = ROPE_MAX;
      boxes.forEach(function (o) {
        if (o.s === b.s || sideBySide(b, o)) return;
        if (o.minTop >= b.top + b.h) hi = Math.min(hi, o.minTop - ROPE_GAP - b.h - signNum(b.s.__pin));
      });
      hi = Math.max(ROPE_MIN, Math.min(ROPE_MAX, Math.max(hi, signNum(b.s.__rope))));
      b.s.__hi = hi;
      b.s.__lo = Math.min(b.lo, hi);                          // 不许超过 hi，区间不塌成单点
    });
  }

  /* 横拖范围：牌子右缘最多顶到「窗户【外框】左缘那条线」为止。
     坑：.px-window 这个热区盖的是【玻璃】（底图坐标 1174 起 227x211），
     用户要的是碰到窗框（含框线，底图坐标 1151 起）就停 —— 框厚 =
     (1174 - 1151) = 23 底图像素，所以要按 --px-scale 换成屏幕像素再往左退。
     往左不许拖出屏幕。窗户在窄屏是居中的一条横幅、跟牌子上下不重叠，
     这时不给右边界，免得把牌子硬拽回来。 */
  var WIN_FRAME_ART_L = 1151;   // 窗框（含框线）左缘，底图像素
  var WIN_GLASS_ART_L = 1174;   // 玻璃左缘 = .px-window 热区，底图像素
  function signClampX() {
    var win = document.querySelector(".px-window");
    var wr = win ? win.getBoundingClientRect() : null;
    var sc = parseFloat(getComputedStyle(document.documentElement)
      .getPropertyValue("--px-scale")) || 1;
    var frame = (WIN_GLASS_ART_L - WIN_FRAME_ART_L) * sc;   // 窗框厚度（屏幕像素）
    signRope.forEach(function (sign) {
      var r = sign.getBoundingClientRect();
      sign.__dxMin = Math.round(-r.left);
      sign.__dxMax = Infinity;
      if (wr && wr.left > r.right && r.top < wr.bottom && r.bottom > wr.top) {
        sign.__dxMax = Math.round(wr.left - frame - r.right);
      }
    });
  }

  var tautTimer = null;
  var tautAt = 0;

  /* 拉到头：牌面和绳子一起抖一下。
     不抖 .px-sign 本身 —— 它的位置是 JS 写的 inline transform，
     CSS 动画会把整条 transform 盖掉，牌会跳到原点。 */
  function shakeTaut(sign) {
    var now = Date.now();
    if (now - tautAt < 320) return;            // 别抖个不停
    tautAt = now;
    sign.classList.remove("px-sign--taut");
    void sign.offsetWidth;                     // 重启 CSS 动画
    sign.classList.add("px-sign--taut");
    clearTimeout(tautTimer);
    tautTimer = setTimeout(function () {
      sign.classList.remove("px-sign--taut");
    }, TAUT_MS);
  }

  /* 绳子从「这一节的天花板」垂下来，绳长受屏幕高度限制（不同屏幕绳子的
     可见范围本来就不一样）：还要放得下整组牌才行 */
  function layoutSigns() {
    if (!signRope.length || !signPanel) return;
    var host = signPanel.parentNode;
    var padBottom = parseFloat(getComputedStyle(host).paddingBottom) || 0;
    var anchorY = host.getBoundingClientRect().top + window.scrollY;
    var ropeMax = Math.max(ROPE_MIN, Math.min(ROPE_MAX,
      window.innerHeight - anchorY - padBottom - signPanel.offsetHeight));
    var rope = Math.max(ROPE_MIN, ropeMax - ROPE_SLACK);
    /* v2.14b：基准位移按【整组牌（panel）的自然顶】统一算，两块牌共用同一个值。
       旧写法对每块牌各自量「自己的自然顶」，窄屏两块牌本是上下堆叠，
       于是各自被拖到同一挂高 —— 实测 390 宽时两块牌 100% 重叠（57600 px²），
       牌 A 的绳子就露在牌 B 上，正是用户说的「绳子和木牌没对好」。
       panel 自己从不加 transform，它的 rect 就是自然位置，直接量即可。 */
    var panelTop = signPanel.getBoundingClientRect().top + window.scrollY;
    var groupBase = Math.round(anchorY + rope - panelTop);
    // 自然顶要在没有 transform 的状态下量；顺便清掉上一轮的拖动位移
    signRope.forEach(function (sign) {
      sign.style.transform = "none";
      sign.dataset.dx = 0;
      sign.__natTop = Math.round(sign.getBoundingClientRect().top + window.scrollY);
    });
    signRope.forEach(function (sign) {
      /* 绳子上端：桌面两块牌并排 ⇒ 都在天花板上（__natTop 相同、groupBase 相同）。
         窄屏牌 B 在牌 A 下面，绳长仍是 210，上端就落在牌 A 背后 ——
         不给它单独拉到天花板，否则牌 A 上方会同时出现四条绳子。 */
      sign.__pin = sign.__natTop + groupBase - rope;
      sign.__rope = rope;
      applySign(sign);
    });
    signRanges();   // 绳长区间（静态，见 signRanges 注释）
    signClampX();   // 横拖边界（窗户左缘 / 屏幕边缘）
  }

  /* 拖拽：拖哪块牌都行 —— 横拖平移、竖拖改绳长 */
  var nDrag = { sign: null, active: false, moved: false, sx: 0, sy: 0, dx0: 0, rope0: 0 };

  signRope.forEach(function (sign) {
    sign.addEventListener("pointerdown", function (e) {
      nDrag.sign = sign;
      nDrag.active = true;
      nDrag.moved = false;
      nDrag.sx = e.clientX;
      nDrag.sy = e.clientY;
      nDrag.dx0 = signNum(sign.dataset.dx);
      nDrag.rope0 = signNum(sign.__rope);
      // 别让浏览器把这一段读成"选字"或"拖图片"（原生 HTML5 拖拽会立刻 pointercancel）
      e.preventDefault();
      sign.setPointerCapture && sign.setPointerCapture(e.pointerId);
    });

    sign.addEventListener("pointermove", function (e) {
      if (!nDrag.active || nDrag.sign !== sign) return;
      var mx = e.clientX - nDrag.sx;
      var my = e.clientY - nDrag.sy;
      if (!nDrag.moved) {
        if (Math.abs(mx) > 4 || Math.abs(my) > 4) {
          nDrag.moved = true;
          sign.classList.add("dragging");
        } else {
          return;
        }
      }
      // 横向：牌子左右平移（两根绳子跟着走）；碰到窗户左缘 / 屏幕边缘就停住
      var dx = nDrag.dx0 + mx;
      var dxMax = (sign.__dxMax === undefined) ? Infinity : signNum(sign.__dxMax);
      var dxMin = (sign.__dxMin === undefined) ? -Infinity : signNum(sign.__dxMin);
      if (dx > dxMax) { dx = dxMax; shakeTaut(sign); }
      if (dx < dxMin) { dx = dxMin; shakeTaut(sign); }
      sign.dataset.dx = dx;
      // 竖向：改绳长；撞到钳制边界就抖一下
      var range = ropeRange(sign);
      var want = nDrag.rope0 + my;
      var got = Math.max(range.lo, Math.min(range.hi, want));
      if (Math.abs(got - want) > 0.5) shakeTaut(sign);
      sign.__rope = got;
      applySign(sign);
    });

    var endNameDrag = function () {
      if (!nDrag.active || nDrag.sign !== sign) return;
      nDrag.active = false;
      nDrag.sign = null;
      sign.classList.remove("dragging");
    };

    sign.addEventListener("pointerup", endNameDrag);
    sign.addEventListener("pointercancel", endNameDrag);
  });

  layoutSigns();
  window.addEventListener("load", layoutSigns);
  window.addEventListener("resize", layoutSigns);

  initFloat();

  /* ============================================================
   * 11. 对话气泡
   * ============================================================ */
  var speechTimer = null;

  function showSpeech(key) {
    speechBubbleKey = key;
    var dict = I18N[currentLang];
    speechBubble.textContent = dict[key];
    speechBubble.classList.add("show");
    clearTimeout(speechTimer);
    speechTimer = setTimeout(hideSpeech, 3500);
  }

  function hideSpeech() {
    speechBubble.classList.remove("show");
  }

  /* ============================================================
   * 12. 鼠标悬浮特定信息 → 头像说话
   * ============================================================ */
  var hoverSpeech = [
    { sel: 'a[href^="mailto:"]', key: "hover.email" },
    { sel: 'a[href^="tel:"]', key: "hover.phone" },
    { sel: "#projects .project-card:nth-child(1)", key: "hover.proj1" },
    { sel: "#projects .project-card:nth-child(2)", key: "hover.proj2" },
    { sel: "#projects .project-card:nth-child(3)", key: "hover.proj3" },
    { sel: ".submit-btn", key: "hover.submit" }
  ];
  hoverSpeech.forEach(function (item) {
    var el = document.querySelector(item.sel);
    if (!el) return;
    el.addEventListener("mouseenter", function () {
      ensureAvatarVisible();
      showSpeech(item.key);
    });
    el.addEventListener("mouseleave", function () {
      hideSpeech();
    });
  });

  /* ============================================================
   * 13. 长时间无滑动 → 头像主动说话
   * ============================================================ */
  var IDLE_DELAY = 15000;
  var idleTimer = null;

  function resetIdleTimer() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(function () {
      if (floatVisible) {
        showSpeech("speakIdle");
      }
    }, IDLE_DELAY);
  }

  window.addEventListener("scroll", resetIdleTimer, { passive: true });
  window.addEventListener("mousemove", resetIdleTimer, { passive: true });
  window.addEventListener("touchstart", resetIdleTimer, { passive: true });
  resetIdleTimer();

  /* ============================================================
   * 14. 音效开关
   * ============================================================ */
  function initSfxToggle() {
    if (!sfxToggleEl) return;
    var saved = null;
    try { saved = localStorage.getItem("px_sfx"); } catch (err) { saved = null; }
    var on = saved === null ? true : saved === "1";
    PixelSFX.setEnabled(on);
    // v3.0：aria 状态与标签高亮都交给 updateSfxLabel 一处同步（原来两处各写一遍）
    updateSfxLabel();

    sfxToggleEl.addEventListener("click", function () {
      var next = !PixelSFX.isEnabled();
      PixelSFX.setEnabled(next);
      try { localStorage.setItem("px_sfx", next ? "1" : "0"); } catch (err) { /* 忽略 */ }
      updateSfxLabel();
      if (next) PixelSFX.play("toggle");
    });
  }

  /* ============================================================
   * 15. 交互动效绑定：点击音效 / 悬停音效 / 点击粒子
   * ============================================================ */
  function initFx() {
    // 点击音效（委托，任何带 data-sfx 的元素）
    document.addEventListener("click", function (e) {
      var el = e.target.closest && e.target.closest("[data-sfx]");
      if (el) PixelSFX.play(el.getAttribute("data-sfx") || "click");
    });

    // 悬停音效：只在切换到新的可交互元素时响一次
    var lastHover = null;
    document.addEventListener("mouseover", function (e) {
      var el = e.target.closest && e.target.closest(
        ".nav-link, .tag, .card, .submit-btn, .contact-value, .sfx-switch, .lang-switch, " +
        ".px-window, .hero-badge"
      );
      if (!el || el === lastHover) return;
      lastHover = el;
      PixelSFX.play("hover");
    });

    // 点击粒子：点击页面（除输入框外）冒出像素爱心 / 星星 / 音符 / 叶子 / 雪花
    // v1.2 彩蛋 3：快速连点会叠加粒子数量（combo）
    var combo = 0;
    var comboTimer = null;
    document.addEventListener("click", function (e) {
      var t = e.target;
      if (t && t.closest && t.closest("input, textarea")) return;
      combo = Math.min(combo + 1, 5);
      clearTimeout(comboTimer);
      comboTimer = setTimeout(function () { combo = 0; }, 500);
      if (combo > 1) {
        PixelParticles.burst(e.clientX, e.clientY, combo * 3);
      } else {
        PixelParticles.spawn(e.clientX, e.clientY);
      }
    });
  }

  /* ============================================================
   * 16. 背景视差（rAF 节流）
   * ============================================================ */
  /* ============================================================
   * 16-B. 位图场景几何
   * 背景图按视口算出缩放与偏移，窗户 / 火苗 / 猫 / 遮挡层全部共用这套
   * 坐标，所以它们与背景图永远逐像素对齐（背景放大多少就跟着放多少）
   * ============================================================ */
  var SCENE_IMG_W = 1536;      // px-room-4.webp 的像素尺寸
  var SCENE_IMG_H = 945;
  var SCENE_PAD_Y = 120;       // 上下各留出 >=54px 的视差余量，保证不露边
  var SCENE_ANCHOR_Y = 0.55;   // 背景图垂直方向的对齐锚点
  var DESK_ART_RIGHT = 648;    // 桌面剪影 px-table.webp（648x259 @ 底图 0,686）的右边缘
  var NARROW_Q = "(max-width: 820px)";

  /* v3.3（用户裁定）：窄屏背景左右平移
     · 屏幕左右各一枚箭头（.px-scene-arrow，见 CSS），点一下背景平移一段；
     · 「左右各三下正好到边界」—— 步长按当前取景自适应，不是固定值：
       往右看（底图右缘贴屏幕右缘）与往左看（底图左缘贴屏幕左缘）各把
       自己那侧的余量三等分。默认取景偏右，两侧余量本来就不等，
       所以两个方向的步长一般不相等 —— 用户要的就是"三下到头"。
     · 平移只改 --px-ox：底图和吃底图坐标的元素（桌上三件物品 / 壁炉火 /
       窗边余晖）一起走；窄屏的窗户、猫、小人、吊灯是脱钩的固定件，不跟着走。 */
  var PAN_STEPS = 3;    // 每个方向三下到边界
  var panStep = 0;      // -3..3：负 = 往左看，正 = 往右看，0 = 默认取景
  var panUI = null;     // {sync}，由 initScenePan 填；layoutScene 每次重算后调它

  function isNarrow() {
    return !!(window.matchMedia && window.matchMedia(NARROW_Q).matches);
  }

  function layoutScene() {
    var vw = window.innerWidth;
    var vh = window.innerHeight;
    var scale = Math.max(vw / SCENE_IMG_W, (vh + SCENE_PAD_Y) / SCENE_IMG_H);
    var ox = (vw - SCENE_IMG_W * scale) / 2;
    /* v2.14e（用户裁定）：窄屏也要看到这张桌子。
       竖屏居中取景时画面落在底图中段（干辣椒串那一带），桌子整张都在
       画面外 —— 所以窄屏改成「取景右移」：把底图往左推，让桌面剪影的
       右边缘正好落在屏幕横向中间，桌子连同桌上三件物品一起进画面；
       桌子没显示全没关系（.px-table 自己在窄屏不再 display:none）。
       桌面端（>820px）的居中取景一个像素都不动。 */
    if (isNarrow()) {
      var cam = vw / 2 - DESK_ART_RIGHT * scale;   // 默认取景（v2.14e 那一档）
      /* 底图能走的范围：minOx（底图右缘贴屏幕右缘）~ 0（底图左缘贴屏幕左缘）。
         底图比视口窄时 minOx 是正数，夹到 0 —— 极端比例下退化成不可平移。 */
      var minOx = Math.min(vw - SCENE_IMG_W * scale, 0);
      var stepRight = (cam - minOx) / PAN_STEPS;   // 往右看：ox 变小
      var stepLeft = (0 - cam) / PAN_STEPS;        // 往左看：ox 变大
      ox = panStep >= 0 ? cam - panStep * stepRight : cam - panStep * stepLeft;
      // 兜底夹紧：任何一档都不许露白（背景图必须始终铺满视口）
      if (ox > 0) ox = 0;
      if (ox < minOx) ox = minOx;
    } else {
      panStep = 0;   // 桌面端没有箭头，永远回默认取景
    }
    var oy = (vh - SCENE_IMG_H * scale) * SCENE_ANCHOR_Y;
    var root = document.documentElement;
    root.style.setProperty("--px-scale", scale.toFixed(5));
    root.style.setProperty("--px-ox", ox.toFixed(2) + "px");
    root.style.setProperty("--px-oy", oy.toFixed(2) + "px");

    /* v3.3：窄屏的固定件状态在这里统一同步（视口一变就要刷新）——
       ① 小人在窄屏是固定件（CSS 的 .float-avatar-wrap.is-fixed）
       ② 两枚箭头的 disabled 状态跟着当前档位走 */
    var wrap = document.getElementById("floatAvatarWrap");
    if (wrap) wrap.classList.toggle("is-fixed", isNarrow());
    if (panUI) panUI.sync();
  }

  /* v3.3：两枚平移箭头的点击与边界状态。
     到头了就把按钮 disabled（CSS 里 .px-scene-arrow[disabled] 压到 30% 透明），
     用户能看到"还剩几下"；桌面端箭头是 display:none，状态照样同步，
     免得把窗口从窄拖宽再拖回来时档位和按钮对不上。 */
  function initScenePan() {
    var prev = document.getElementById("pxScenePrev");
    var next = document.getElementById("pxSceneNext");
    if (!prev || !next) return;

    function sync() {
      var narrow = isNarrow();
      prev.disabled = !narrow || panStep <= -PAN_STEPS;
      next.disabled = !narrow || panStep >= PAN_STEPS;
    }

    function go(delta) {
      if (!isNarrow()) return;
      var t = Math.max(-PAN_STEPS, Math.min(PAN_STEPS, panStep + delta));
      if (t === panStep) return;
      panStep = t;
      layoutScene();   // 内部会回调 panUI.sync()
    }

    prev.addEventListener("click", function () { go(-1); });
    next.addEventListener("click", function () { go(1); });

    panUI = { sync: sync };
    sync();
  }

  function initParallax() {
    layoutScene();
    window.addEventListener("resize", layoutScene, { passive: true });
    window.addEventListener("orientationchange", layoutScene, { passive: true });

    // 尊重系统"减少动态效果"：不做视差
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // v1.8 景深：分两档速率 —— 房间（远景）几乎不动所以显得远，
    // 前景的干草束与吊灯走得明显更快所以显得近，两者拉开前后层次
    var RATE_ROOM = 0.025;   // 远景房间
    var RATE_FG = 0.085;     // 近景物件（约 3.4 倍）
    var MAX_ROOM = 44;       // JS 已保证背景图上下各留 >=54px 余量，不会露边
    var MAX_FG = 150;        // 前景挂在视口顶部，走出画面即可
    // v2.4 卡片挂墙：卡片跟着墙面同向微动（房间幅度的 1/5，最大约 9px）。
    // 目的不是"卡片也做视差"，而是让卡片读起来是贴在墙面上的一件东西 ——
    // 完全不动的卡片会像是浮在画面上的一层 UI。
    var CARD_FOLLOW = 0.2;
    var root = document.documentElement;
    var ticking = false;

    function update() {
      ticking = false;
      var y = window.scrollY || window.pageYOffset || 0;

      var room = -y * RATE_ROOM;
      if (room > MAX_ROOM) room = MAX_ROOM;
      if (room < -MAX_ROOM) room = -MAX_ROOM;
      root.style.setProperty("--px-bg-y", room.toFixed(2) + "px");

      var fg = -y * RATE_FG;
      if (fg > MAX_FG) fg = MAX_FG;
      if (fg < -MAX_FG) fg = -MAX_FG;
      root.style.setProperty("--px-fg-y", fg.toFixed(2) + "px");

      // v2.4：卡片随墙微动。取整 —— 卡片里有像素字，半像素平移会糊。
      root.style.setProperty("--px-card-y", Math.round(room * CARD_FOLLOW) + "px");
    }

    window.addEventListener("scroll", function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    }, { passive: true });

    update();
  }

  /* ============================================================
   * 17. 意见反馈（v2.15：接进 Supabase 数据库）
   *     v1.1 起这里是「本地 localStorage 模拟入库」的占位实现，
   *     现在换成真的写库 —— 原生 fetch 直连 Supabase 的 REST 接口，
   *     不引任何 CDN，整个站点仍然能离线打开。
   *
   *     三条路：
   *       1) 配好 URL + anon key -> 直接写进数据库；失败则进待发队列
   *       2) 还没配（配置里是空字符串）-> 本地暂存 + 进待发队列（静默，
   *          访客体验与 1.1 以来完全一致；等配置填上后自动补发）
   *       3) 断网 / 超时 / 被拒 -> 进待发队列，下次打开页面自动重发
   *
   *     安全：这里用的是 anon public key（公开无妨），真正的防线是
   *     数据库那边的 RLS —— 匿名角色只有 INSERT，读不到任何反馈。
   *     建表与策略见 docs/supabase-setup.md。
   * ============================================================ */
  var feedbackForm = document.getElementById("feedbackForm");
  var FB = window.FEEDBACK_CONFIG || {};
  var FB_QUEUE_KEY = "feedback_queue";   // 待发队列（本地兜底，成功后出队）
  var FB_LIST_KEY = "feedback_list";     // 1.1 以来的本地留档，保留不动
  var FB_TABLE = FB.table || "feedback";
  var fbSending = false;

  // 配置齐了才谈「联网」：少任何一项都退回本地暂存
  function fbOnline() {
    return !!(FB.enabled && FB.supabaseUrl && FB.supabaseAnonKey &&
              typeof window.fetch === "function");
  }

  function readQueue() {
    try {
      var raw = JSON.parse(localStorage.getItem(FB_QUEUE_KEY) || "[]");
      return Object.prototype.toString.call(raw) === "[object Array]" ? raw : [];
    } catch (err) {
      return [];
    }
  }

  function writeQueue(list) {
    try {
      localStorage.setItem(FB_QUEUE_KEY, JSON.stringify(list.slice(-200)));
    } catch (err) {
      /* 存不下就放弃（容量限制），不影响页面 */
    }
  }

  function queuePush(row) {
    var q = readQueue();
    q.push(row);
    writeQueue(q);
  }

  // 表单数据 -> 数据行（列名与 docs/supabase-setup.md 的建表语句一一对应）
  function toRow(data) {
    return {
      name: data.name,
      relation: data.relation || null,
      email: data.email || null,
      device: data.device || null,
      message: data.message,
      site_version: FB.siteVersion || "unknown"
    };
  }

  /**
   * fbEndpoint —— 从配置算出真正的写入地址
   * 容错：Supabase 后台的 Project URL 是 https://xxx.supabase.co，
   * 但很容易顺手把 REST 端点整条复制进来（…/rest/v1/ 甚至 …/rest/v1/feedback）。
   * 那样再拼一次 /rest/v1/<表名> 就会变成 /rest/v1/rest/v1/feedback 而 404，
   * 而且 404 会被"失败即入队"的兜底吞掉 —— 表现是"提交成功但库里没有"。
   * 所以这里先把它还原成项目根，再拼一次标准路径：三写法都能跑。
   */
  function fbEndpoint() {
    var base = String(FB.supabaseUrl || "").trim().replace(/\/+$/, "");
    base = base.replace(/\/rest\/v1(\/[A-Za-z0-9_]+)?$/i, "");
    return base.replace(/\/+$/, "") + "/rest/v1/" + FB_TABLE;
  }

  /**
   * postRow —— 单条写入 Supabase
   * 两个细节不能省：
   *   · Prefer: return=minimal —— 表上只给了 INSERT 策略、没给 SELECT，
   *     默认的 return=representation 会因为"写完了读不回来"被拒。
   *   · Authorization: Bearer <anon key> —— PostgREST 认这个头。
   */
  function postRow(row) {
    var url = fbEndpoint();
    var opts = {
      method: "POST",
      headers: {
        "apikey": FB.supabaseAnonKey,
        "Authorization": "Bearer " + FB.supabaseAnonKey,
        "Content-Type": "application/json",
        "Prefer": "return=minimal"
      },
      body: JSON.stringify(row)
    };
    var timer = null;

    // AbortController 用来给请求加超时；老浏览器没有就退化成"不设超时"，
    // 不影响写入本身。
    if (typeof window.AbortController === "function") {
      var ctrl = new window.AbortController();
      opts.signal = ctrl.signal;
      timer = setTimeout(function () { ctrl.abort(); }, FB.timeoutMs || 12000);
    }

    return window.fetch(url, opts).then(function (res) {
      if (timer) clearTimeout(timer);
      if (!res.ok) throw new Error("HTTP " + res.status);
      return true;
    }, function (err) {
      if (timer) clearTimeout(timer);
      throw err;
    });
  }

  // 提交成功的样子：像素提示条 + 8-bit 音效 + 粒子喷发（1.1 以来没变过）
  function feedbackDone() {
    showToast("toast.feedbackOk");
    PixelSFX.play("submit");
    var rect = feedbackForm.getBoundingClientRect();
    PixelParticles.burst(rect.left + rect.width / 2, rect.bottom - 20, 10);
    feedbackForm.reset();
  }

  // 提交中：按钮置灰 + 文案换成"提交中..."，防止连点造成重复入库
  function setSending(on) {
    var btn = feedbackForm.querySelector(".submit-btn");
    fbSending = !!on;
    if (!btn) return;
    btn.disabled = fbSending;
    if (fbSending) {
      // 临时摘掉 data-i18n，否则切换语言会把"提交中"覆盖回"提交"
      if (!btn.getAttribute("data-label-keep")) {
        btn.setAttribute("data-label-keep", btn.getAttribute("data-i18n") || "");
      }
      btn.removeAttribute("data-i18n");
      btn.textContent = I18N[currentLang]["form.sending"];
    } else {
      var keep = btn.getAttribute("data-label-keep");
      if (keep) btn.setAttribute("data-i18n", keep);
      btn.textContent = I18N[currentLang][keep] || "";
    }
  }

  /**
   * flushQueue —— 把待发队列里的反馈补写进数据库
   * 顺序发、不并发：一条成功就出队，失败的原样留着等下一次。
   * 触发时机：网络恢复（online）、提交成功后、以及页面打开后 1.5 秒。
   */
  function flushQueue() {
    if (!fbOnline()) return;
    var list = readQueue();
    if (!list.length) return;
    var left = [];
    var chain = Promise.resolve();
    list.forEach(function (row) {
      chain = chain.then(function () {
        return postRow(row).catch(function () { left.push(row); });
      });
    });
    chain.then(function () { writeQueue(left); });
  }

  /**
   * submitFeedback —— 反馈数据入库入口（表单那边只管调它）
   */
  function submitFeedback(data) {
    // 本地留档：1.1 以来的习惯保留，也是"断网时自己填过什么"的兜底
    try {
      var list = JSON.parse(localStorage.getItem(FB_LIST_KEY) || "[]");
      list.push(data);
      localStorage.setItem(FB_LIST_KEY, JSON.stringify(list));
    } catch (err) {
      /* localStorage 不可用时忽略 */
    }

    var row = toRow(data);

    // 还没配 Supabase：静默暂存，等配置填好后自动补发
    if (!fbOnline()) {
      queuePush(row);
      feedbackDone();
      return;
    }

    setSending(true);
    postRow(row).then(function () {
      setSending(false);
      feedbackDone();
      flushQueue();          // 顺手把之前欠的补上
    }).catch(function () {
      // 断网 / 超时 / 被拒：进队列，等网络恢复或下次打开页面重发
      setSending(false);
      queuePush(row);
      showToast("toast.feedbackQueued");
    });
  }

  feedbackForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (fbSending) return;

    var data = {
      name: feedbackForm.name.value.trim(),
      relation: feedbackForm.relation.value,
      email: feedbackForm.email.value.trim(),
      device: feedbackForm.device.value,
      message: feedbackForm.message.value.trim(),
      createdAt: new Date().toISOString()
    };

    // 轻量校验：表单是 novalidate（像素版一直自己接管校验）。
    // v2.15b：除邮箱外全部必填 —— 姓名 / 关系 / 设备 / 意见内容，
    // 邮箱保持选填（填了才校验格式）。顺序与表单从上到下一致，
    // 命中哪一项就提示哪一项，访客不会"点了提交却不知道缺什么"。
    if (!data.name) { showToast("toast.needName"); return; }
    if (!data.relation) { showToast("toast.needRelation"); return; }
    if (!data.device) { showToast("toast.needDevice"); return; }
    if (!data.message) { showToast("toast.needMsg"); return; }
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      showToast("toast.needEmail");
      return;
    }

    submitFeedback(data);
  });

  // 网络恢复后自动补发；页面打开后也补一次（上次断网留下的）
  window.addEventListener("online", flushQueue);
  setTimeout(flushQueue, 1500);

  /* ============================================================
   * 18. 彩蛋 1：吊灯开关（拉一下扯线，改变整间屋子的暖光，并记忆状态）
   *     v2.11：原来首屏那块「暖灯已点亮」徽标整块删掉，开关换成挂在
   *     房间里的 AI 像素吊灯垂下来的一根扯线（#pxCord）。点线 = 拉一下，
   *     灯身会沉一下、绳会被拉长，然后整屋灯光切换 + 状态记忆。
   * ============================================================ */
  var cordBtn = document.getElementById("pxCord");
  var pendEl = document.querySelector(".px-pendant");
  var LAMP_KEY = "px_lamp";
  var cordTugTimer = null;

  // 拉绳动作：逐帧（不缓动），260ms 后自动复位
  function tugCord() {
    if (!cordBtn) return;
    cordBtn.classList.add("is-tug");
    if (pendEl) pendEl.classList.add("is-tug");
    if (cordTugTimer) clearTimeout(cordTugTimer);
    cordTugTimer = setTimeout(function () {
      cordBtn.classList.remove("is-tug");
      if (pendEl) pendEl.classList.remove("is-tug");
    }, 260);
  }

  function setLamp(on, silent) {
    document.body.classList.toggle("lamp-off", !on);
    if (cordBtn) cordBtn.setAttribute("aria-pressed", on ? "true" : "false");
    try { localStorage.setItem(LAMP_KEY, on ? "1" : "0"); } catch (err) { /* 忽略 */ }
    if (silent) return;
    showToast(on ? "ui.lampOn" : "ui.lampOff");
    if (cordBtn) {
      var r = cordBtn.getBoundingClientRect();
      PixelParticles.burst(r.left + r.width / 2, r.top + r.height / 2, on ? 8 : 4);
    }
  }

  function initLamp() {
    if (!cordBtn) return;
    var saved = null;
    try { saved = localStorage.getItem(LAMP_KEY); } catch (err) { saved = null; }
    setLamp(saved === null ? true : saved === "1", true);
    cordBtn.addEventListener("click", function () {
      tugCord();
      setLamp(document.body.classList.contains("lamp-off"), false);
    });
  }

  /* ============================================================
   * 19. 彩蛋 2：窗外天气（晴 / 雨 / 雪，点窗户循环切换）
   * ============================================================ */
  var Weather = (function () {
    var canvas = document.getElementById("pxWeather");
    if (!canvas) {
      return { setMode: function () {}, resize: function () {}, getMode: function () { return "sun"; } };
    }

    var wctx = canvas.getContext("2d");
    var SCALE = 3;        // 低分辨率放大 → 天然像素颗粒
    var mode = "sun";
    var drops = [];
    var rafId = null;
    var ticking = false;

    function newDrop(y) {
      return {
        x: Math.random() * canvas.width,
        y: y == null ? -2 : y,
        v: mode === "rain" ? (2.4 + Math.random() * 1.8) : (0.45 + Math.random() * 0.5),
        len: mode === "rain" ? (2 + Math.floor(Math.random() * 3)) : 1,
        phase: Math.random() * 6.283
      };
    }

    function build() {
      drops = [];
      if (mode === "sun") return;
      var n = mode === "rain" ? 30 : 20;
      for (var i = 0; i < n; i++) drops.push(newDrop(Math.random() * canvas.height));
    }

    function resize() {
      var rect = canvas.getBoundingClientRect();
      var w = Math.max(1, Math.floor(rect.width / SCALE));
      var h = Math.max(1, Math.floor(rect.height / SCALE));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      build();
    }

    function step() {
      rafId = null;
      wctx.clearRect(0, 0, canvas.width, canvas.height);
      if (mode === "sun" || !drops.length) return;

      if (mode === "rain") {
        wctx.fillStyle = "#E9EEF1";
        for (var i = 0; i < drops.length; i++) {
          var d = drops[i];
          d.y += d.v;
          d.x += 0.3;
          if (d.y > canvas.height + d.len) { drops[i] = newDrop(-d.len); continue; }
          if (d.x > canvas.width) d.x = -1;
          var dx = Math.round(d.x);
          var dy = Math.round(d.y);
          for (var k = 0; k < d.len; k++) wctx.fillRect(dx, dy - k, 1, 1);
        }
      } else {
        wctx.fillStyle = "#FFFFFF";
        for (var j = 0; j < drops.length; j++) {
          var s = drops[j];
          s.phase += 0.05;
          s.y += s.v;
          if (s.y > canvas.height + 2) { drops[j] = newDrop(-2); continue; }
          var sx = Math.round(s.x + Math.sin(s.phase) * 1.6);
          wctx.fillRect(sx, Math.round(s.y), 1, 1);
        }
      }
      start();
    }

    function start() {
      if (rafId === null) rafId = window.requestAnimationFrame(step);
    }

    function setMode(next) {
      mode = next;
      document.body.classList.toggle("weather-rain", mode === "rain");
      document.body.classList.toggle("weather-snow", mode === "snow");
      wctx.clearRect(0, 0, canvas.width, canvas.height);
      resize();
      if (mode !== "sun") start();
    }

    window.addEventListener("resize", function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        ticking = false;
        resize();
        if (mode !== "sun") start();
      });
    }, { passive: true });

    resize();

    return { setMode: setMode, resize: resize, getMode: function () { return mode; } };
  })();

  var windowBtn = document.getElementById("pxWindow");
  var WEATHER_KEY = "px_weather";
  var WEATHER_CYCLE = ["sun", "rain", "snow"];
  var WEATHER_TOAST = { sun: "ui.weatherSun", rain: "ui.weatherRain", snow: "ui.weatherSnow" };

  function setWeather(mode, silent) {
    Weather.setMode(mode);
    try { localStorage.setItem(WEATHER_KEY, mode); } catch (err) { /* 忽略 */ }
    if (silent) return;
    showToast(WEATHER_TOAST[mode] || "ui.weatherSun");
    if (windowBtn) {
      var r = windowBtn.getBoundingClientRect();
      PixelParticles.burst(r.left + r.width / 2, r.top + r.height / 2, mode === "sun" ? 6 : 10);
    }
  }

  function initWeather() {
    if (!windowBtn) return;
    var saved = null;
    try { saved = localStorage.getItem(WEATHER_KEY); } catch (err) { saved = null; }
    if (WEATHER_CYCLE.indexOf(saved) === -1) saved = "sun";
    setWeather(saved, true);

    windowBtn.addEventListener("click", function () {
      var idx = WEATHER_CYCLE.indexOf(Weather.getMode());
      setWeather(WEATHER_CYCLE[(idx + 1) % WEATHER_CYCLE.length], false);
    });

    window.addEventListener("load", function () { Weather.resize(); });
  }

  /* ============================================================
   * 19-B. 猫：慢半拍跟随鼠标（v1.7）
   * 位置写进 CSS 变量 --px-cat-x / --px-cat-y，由 CSS transform 消费；
   * 转向写 --px-cat-dir（1 / -1）。这样每帧只改自定义属性，不动布局。
   * ============================================================ */
  var CatFollow = (function () {
    var cat = document.querySelector(".px-cat");
    if (!cat) return { start: function () {} };

    var root = document.documentElement;
    var MQ = window.matchMedia ? window.matchMedia.bind(window) : null;
    var reduce = !!(MQ && MQ("(prefers-reduced-motion: reduce)").matches);
    // 只有精确指针（鼠标）才跟随；触摸设备安静待机
    var hasPointer = !(MQ && MQ("(hover: none), (pointer: coarse)").matches);
    /* v3.3（用户裁定）：窄屏的猫固定在左下角 —— 窄屏没有"鼠标跟随"这回事，
       而且 390 宽的视口里猫一跟指针就会压到正文上（见 onMove 的拦截）。 */

    var W = 54, H = 60;
    var px = 0, py = 0;      // 当前左上角
    var tx = 0, ty = 0;      // 目标左上角
    var dir = 1;
    var rafId = null;
    var calm = 0;            // 连续静止帧数
    var EASE = 0.14;         // 越小越"慢半拍"

    /* ---------- v1.9：沿指针轨迹跟随 ----------
       v1.8 是"光标左下角固定偏移"(mx - 0.72W)，所以猫永远贴在光标旁边。
       用户要的是"跟在指针走过的轨迹后面"：把光标经过的点记成一条路径，
       再沿路径从末端往回量 TRAIL_GAP 的距离，猫的目标就是那个点 ——
       猫走的是光标刚走过的路，始终落在后面一段，而不是挂在光标身上。 */
    var trail = [];              // [{x, y}]，屏幕坐标
    var TRAIL_GAP = 92;          // 猫落在光标后面多远（沿路径长度，px）
    var TRAIL_KEEP = 460;        // 轨迹最多保留的长度（更旧的点丢掉）
    var IDLE_MS = 1100;          // 停手多久后回窝
    var lastMove = 0;

    function measure() {
      var r = cat.getBoundingClientRect();
      if (r.width > 1) W = r.width;
      if (r.height > 1) H = r.height;
    }

    function place(x, y) {
      /* v3.3：窄屏的猫是固定件，坐标取整到整数像素 ——
         像素画材质在非整数坐标上会被重采样糊掉 */
      if (isNarrow()) { x = Math.round(x); y = Math.round(y); }
      px = x; py = y;
      root.style.setProperty("--px-cat-x", x.toFixed(2) + "px");
      root.style.setProperty("--px-cat-y", y.toFixed(2) + "px");
    }

    function clampX(x) { return Math.max(4, Math.min(window.innerWidth - W - 4, x)); }
    function clampY(y) { return Math.max(4, Math.min(window.innerHeight - H - 4, y)); }

    function home() {  // 待机位：桌面端右下角；窄屏左下角（v3.3 用户裁定）
      if (isNarrow()) return { x: clampX(16), y: clampY(window.innerHeight - H - 16) };
      return { x: clampX(window.innerWidth - W - 28), y: clampY(window.innerHeight - H - 24) };
    }

    function seg(a, b) {
      var ddx = b.x - a.x, ddy = b.y - a.y;
      return Math.sqrt(ddx * ddx + ddy * ddy);
    }

    function pushTrail(x, y) {
      var n = trail.length;
      if (n) {
        var ddx = x - trail[n - 1].x, ddy = y - trail[n - 1].y;
        if (ddx * ddx + ddy * ddy < 6) return;   // 手抖忽略
      }
      trail.push({ x: x, y: y });
      var acc = 0;
      for (var i = trail.length - 1; i > 0; i--) {
        acc += seg(trail[i], trail[i - 1]);
        if (acc > TRAIL_KEEP) { trail.splice(0, i - 1); break; }
      }
    }

    // 沿轨迹往回量 TRAIL_GAP 得到的点 = 猫该待的位置
    function trailTarget() {
      if (!trail.length) return null;
      var acc = 0;
      for (var i = trail.length - 1; i > 0; i--) {
        var d = seg(trail[i], trail[i - 1]) || 0.001;
        if (acc + d >= TRAIL_GAP) {
          var f = (TRAIL_GAP - acc) / d;
          return {
            x: trail[i].x + (trail[i - 1].x - trail[i].x) * f,
            y: trail[i].y + (trail[i - 1].y - trail[i].y) * f
          };
        }
        acc += d;
      }
      return trail[0];
    }

    // 把"轨迹上的点"换算成猫的左上角：猫身中心压在这个点上
    function seatOn(pt) {
      return { x: clampX(pt.x - W * 0.5), y: clampY(pt.y - H * 0.62) };
    }

    function frame() {
      rafId = null;
      var now = Date.now();

      if (now - lastMove > IDLE_MS) {
        trail.length = 0;                 // 回窝前清空轨迹，避免下次瞬移
        var h = home();
        tx = h.x; ty = h.y;
      } else {
        var t = trailTarget();
        if (t) { var s = seatOn(t); tx = s.x; ty = s.y; }
      }

      var dx = tx - px;
      var dy = ty - py;
      if (Math.abs(dx) < 0.4 && Math.abs(dy) < 0.4) {
        place(tx, ty);
        calm++;
        return;
      }
      calm = 0;
      place(px + dx * EASE, py + dy * EASE);
      if (dx > 3) { dir = 1; root.style.setProperty("--px-cat-dir", 1); }
      else if (dx < -3) { dir = -1; root.style.setProperty("--px-cat-dir", -1); }
      rafId = window.requestAnimationFrame(frame);
    }

    function run() { if (rafId === null) rafId = window.requestAnimationFrame(frame); }

    function onMove(e) {
      /* v3.3：窄屏猫不跟随（固定蹲在左下角）—— 窄屏一跟指针就会横穿正文，
         位置交给 home() 钉住；hasPointer 为 false 的触摸设备本来也不走这条。 */
      if (isNarrow()) return;
      lastMove = Date.now();
      if (!trail.length) {
        // 重新起手：用猫当前的位置当轨迹起点，接得上就不会瞬移
        trail.push({ x: px + W * 0.5, y: py + H * 0.62 });
      }
      pushTrail(e.clientX, e.clientY);
      if (reduce) { var t = trailTarget(); if (t) { var s = seatOn(t); place(s.x, s.y); } return; }
      run();
    }

    function onResize() {
      measure();
      trail.length = 0;        // 视口变了，旧轨迹坐标失效
      /* v3.3：窄屏的猫是固定件（左下角），视口一变就直接钉回窝，不做缓动 ——
         否则横竖屏切换时猫会从旧坐标缓动穿过整屏正文。 */
      if (isNarrow()) {
        var hn = home();
        place(hn.x, hn.y);
        tx = hn.x; ty = hn.y;
        lastMove = Date.now() - IDLE_MS - 1;   // 保持"已回窝"状态
        return;
      }
      tx = clampX(tx); ty = clampY(ty);
      if (calm > 0) { var h = home(); tx = h.x; ty = h.y; }
      if (reduce) { place(tx, ty); return; }
      run();
    }

    function start() {
      measure();
      trail.length = 0;
      var h = home();
      place(h.x, h.y);
      tx = h.x; ty = h.y;
      root.style.setProperty("--px-cat-dir", 1);
      lastMove = Date.now() - IDLE_MS - 1;   // 开局就在"已回窝"状态
      /* v3.3：resize / orientationchange 必须注册在 hasPointer 判断之前 ——
         窄屏的猫是固定件，横竖屏切换、地址栏收放都要重算落点，
         而手机正属于 hasPointer=false 这一类；mousemove 仍然只给桌面端。 */
      window.addEventListener("resize", onResize, { passive: true });
      window.addEventListener("orientationchange", onResize, { passive: true });
      if (!hasPointer) return;   // 触摸设备：原地待机，不追鼠标
      window.addEventListener("mousemove", onMove, { passive: true });
    }

    return { start: start };
  })();

  /* ============================================================
   * 19b. 配色切换（深色木牌 / 浅色纸笺，默认深色，记忆状态）
   * ============================================================ */
  var themeSwitch = document.getElementById("pxTheme");
  var THEME_KEY = "px_theme";

  function applyTheme(mode) {
    var isLight = mode === "mid";

    // html 和 body 都挂上：html 那份是给 <head> 里的防闪烁脚本用的，
    // 两处选择器在 CSS 里都接住了
    document.documentElement.classList.toggle("palette-mid", isLight);
    document.body.classList.toggle("palette-mid", isLight);

    document.querySelectorAll(".theme-switch").forEach(function (sw) {
      sw.classList.toggle("light", isLight);
      sw.setAttribute("aria-checked", isLight ? "true" : "false");
    });
    document.querySelectorAll(".theme-switch .theme-switch-label").forEach(function (lb) {
      var isMidOpt = lb.getAttribute("data-theme-opt") === "mid";
      lb.classList.toggle("is-active", isMidOpt === isLight);
    });

    try {
      window.localStorage.setItem(THEME_KEY, isLight ? "mid" : "dark");
    } catch (e) { /* 隐私模式忽略 */ }
  }

  function initTheme() {
    var saved = "dark";
    try {
      saved = window.localStorage.getItem(THEME_KEY) || "dark";
    } catch (e) { /* 隐私模式忽略 */ }
    applyTheme(saved);

    if (themeSwitch) {
      themeSwitch.addEventListener("click", function () {
        applyTheme(document.body.classList.contains("palette-mid") ? "dark" : "mid");
      });
    }
  }

  /* ============================================================
   * 19.5 v3.0：卡片"抬起"要留 1 秒宽限
   *     原来抬起完全由 CSS :hover 决定 —— 光标一离开，卡片立刻落回去。
   *     用户要的是"光标移开满 1 秒才复原；1 秒内又移回来就不复原"，
   *     所以这里改成挂类：进入立即挂 .is-lifted，离开只起一个 1s 定时器，
   *     定时器到点才摘掉；1s 内重新进入就把定时器清掉（卡片一直保持抬起）。
   *     为什么必须走 JS 而不是给 transition 加 delay：
   *     z-index 与 animation:none 都不吃 delay，卡片会在"看起来还抬着"的
   *     那一秒里先掉回桌子(7)/桌上物品(8)的下面，而且呼吸动画会在
   *     mouseleave 的瞬间重新接管 box-shadow —— 阴影当场跳一下。
   *     事件用委托挂在 document 上（不逐个卡片绑），
   *     将来动态插入的卡片也自动生效。
   * ============================================================ */
  var CARD_LIFT_HOLD_MS = 1000;
  var cardLiftTimers = new Map();

  function initCardLift() {
    document.addEventListener("mouseover", function (e) {
      var card = (e.target && e.target.closest) ? e.target.closest(".card") : null;
      if (!card) return;
      /* 卡片内部在子元素之间移动也会触发 mouseover，这类不算"重新进入" */
      if (e.relatedTarget && card.contains(e.relatedTarget)) return;
      var timer = cardLiftTimers.get(card);
      if (timer) { clearTimeout(timer); cardLiftTimers.delete(card); }
      card.classList.add("is-lifted");
    });

    document.addEventListener("mouseout", function (e) {
      var card = (e.target && e.target.closest) ? e.target.closest(".card") : null;
      if (!card) return;
      if (e.relatedTarget && card.contains(e.relatedTarget)) return;
      if (cardLiftTimers.has(card)) return;
      cardLiftTimers.set(card, setTimeout(function () {
        cardLiftTimers.delete(card);
        card.classList.remove("is-lifted");
      }, CARD_LIFT_HOLD_MS));
    });
  }

  /* ============================================================
   * 20. 初始化
   * ============================================================ */
  function init() {
    applyLanguage("zh");
    window.addEventListener("scroll", updateActiveLink, { passive: true });
    updateActiveLink();

    document.querySelectorAll(".lang-switch").forEach(function (sw) {
      sw.addEventListener("click", toggleLanguage);
    });

    initSfxToggle();
    initCardLift();
    initTheme();
    initFx();
    initScenePan();   // v3.3：先接上两枚平移箭头，再让 initParallax 首次 layoutScene
    initParallax();
    initLamp();
    initWeather();
    CatFollow.start();

    // 首次交互解锁音频上下文（浏览器自动播放策略）
    window.addEventListener("pointerdown", function unlock() {
      PixelSFX.unlock();
      window.removeEventListener("pointerdown", unlock);
    }, { once: true });
  }

  init();
})();