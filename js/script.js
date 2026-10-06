(function () {
  "use strict";

  /* ============================================================
   * 1. 文案字典（中英文）
   *    新增 key：ui.sfxOnShort / ui.sfxOffShort / ui.sfxAria /
   *             hero.badge / hero.deskNote /
   *             toast.feedbackOk
   *    （v3.0：ui.sfxOn / ui.sfxOff 这对长文案 key 随木牌样式一起作废，
   *      拨片标签只剩"开 / 关"一个字，改名 sfxOnShort / sfxOffShort）
   *   v3.6 新增 key：ui.bgmAria / ui.bgmTapHint（背景音乐开关与自动播放被拦的提示）
   * ============================================================ */
  var I18N = {
    zh: {
      /* v3.5（用户裁定③）：顶栏标题从「郑先生」改成「电脑端体验更佳」——
         brand 这个词条全站只有窄屏顶栏 .mobile-brand 在用
         （侧边栏用的是 name / role，见下面两行），所以直接改值即可。 */
      brand: "电脑端体验更佳",
      name: "郑瑞航",
      role: "点击我的浮动小人可以与我聊天哦",
      avatar: "郑",
      avatarShort: "郑",
      "hero.greet": "欢迎来到我的个人主页 👋",
      /* v2.11：hero.badge / hero.badgeOff 两个 key 已无人引用 ——
         首屏那块「暖灯已点亮」徽标整块删掉了，开关换成吊灯的扯线。
         保留这两行只为不动既有词典（新页面不再读它们）。 */
      "hero.badge": "暖灯已点亮",
      "hero.badgeOff": "暖灯已熄灭",
      "hero.deskNote": "辛苦了，泡了杯咖啡，慢慢看。",
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
      "projects.d1": "用 vibe coding 制作的学习辅助网页。",
      "projects.tag2": "游戏",
      "projects.t2": "侦探解密游戏《奇迹demo》",
      "projects.d2": "侦探解密题材的游戏 demo，持续打磨中。",
      "projects.tag3": "探索中",
      "projects.t3": "下一步正在探索中！",
      "projects.d3": "更多有趣的想法正在孵化。",
      "interests.i1": "乒乓球",
      "interests.i2": "武术",
      "interests.i3": "散步",
      "interests.i4": "游戏",
      "interests.i5": "音乐",
      "interests.i6": "写东西",
      "interests.i7": "捣鼓奇怪的东西",
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
      // v3.6（用户第⑤条）：背景音乐开关 + 被自动播放策略拦下时的提示
      "ui.bgmAria": "背景音乐开关",
      "ui.bgmTapHint": "点一下任意位置，开始播放背景音乐",
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
      footer: "© 2026 郑瑞航 · 个人主页",
      speakGreet: "你好！有什么能帮到您？",
      speakIdle: "陷入了什么思考呀？我能帮忙吗？",
      "hover.email": "有事欢迎与我邮箱联系！",
      "hover.phone": "有事欢迎致电！",
      "hover.proj1": "还在持续优化中！欢迎使用！",
      "hover.proj2": "正在努力改进美术和修bug...（掉头发）",
      "hover.proj3": "敬请期待！",
      "hover.submit": "新人一个，手下留情，不要骂我...",
      /* v3.23：详情气泡 + 遮挡提示 + 聊天窗（标题复用 projects.t*）
         v3.24（需求②③）：聊天窗从「每个项目一套写死台词」改成【单个全局对话】——
         chat.more / chat.note / chat.p1a-c / chat.p2a-c 全部退场，换成下面这套：
         入口文案 + 首次问候 + 兜底 + 4 个快捷提问 / 2 个自动提问 + 6 组关键词应答。 */
      "hover.detail": "点击这里查看详情",
      "hint.occluded": "内容被遮挡可以试试将光标移动到卡片上哦",
      "chat.close": "关闭",
      "chat.enter": "进入对话",
      "chat.title": "和郑瑞航聊聊",
      "chat.hello": "您好！我是郑瑞航，现就读于天津大学香港理工大学深圳未来技术学院，您有什么问题欢迎向我提问！但我只是数字分身，无法做到全知全能哦。您也可以点击下方的快捷提问！让我们开始聊天吧！",
      "chat.fallback": "不好意思，我暂时无法回答您这个问题...但我肯定能回答下方的快捷提问！",
      "chat.ph": "输入你想问的问题…",
      "chat.inputAria": "输入你想问的问题",
      "chat.logAria": "对话记录",
      "chat.send": "发送",
      "chat.q1": "你是谁？",
      "chat.q2": "你的联系方式是什么？",
      "chat.q3": "你有什么项目与作品？",
      "chat.q4": "你的兴趣有哪些？",
      "chat.ask1": "可以详细说说你的学习辅助项目吗？",
      "chat.ask2": "可以详细说说你的侦探游戏项目吗？",
      "chat.a.who": "我是郑瑞航，现在是一名学生，平时喜欢捣鼓像素风和各种奇怪的小玩意，这个主页就是我自己一点点搭起来的。想了解别的，点下面的快捷提问就行！",
      "chat.a.contact": "邮箱：3490216203@qq.com；电话：13826692189。有事欢迎与我联系，也可以直接在下面的「意见反馈」里给我留言。",
      "chat.a.projects": "目前并没有什么很拿得出手的项目，一个是学习辅助，一个是侦探解谜游戏，还有一个就是现在您进入的我的个人网页。虽然寥若晨星，但是每一个我都细心打磨每一个细节，如个人网页光是产品迭代报告目前就已经纯文本写了七百多 KB，之后还可能继续增长，加上已经删除记录的废案，已经迭代了八十多个版本。如果你想详细了解「学习辅助」项目和「游戏」项目，回复关键词「学习辅助」或「游戏」即可~",
      "chat.a.interests": "乒乓球、武术、散步、游戏、音乐、写剧本，还有捣鼓各种奇怪的东西。",
      "chat.a.proj1": "学习辅助网页是用 vibe coding 做出来的，想法来自平时学习时的需要，现在还在持续优化中，欢迎使用！在这个网页里，一切知识点需要自己添加、撰写，包括含义、边界、应用、证明过程、逆转思考角度等等，全由自己手动搭建，网页提供撰写卡片和分类功能，让知识不再零散。不用担心自己总结会导致错误，网页配备的 AI 辅助检查功能，只需要在设置里接入 AI，就可以让 AI 帮助我们检查正误！网页也配备了复习功能，复习计划将自动遵循艾宾浩斯遗忘曲线制定，让我们高效复习。当然，完成一次复习是需要一定门槛的，为了防止走马观花，每次复习后需要输入此次复习的感悟或想法才能够完成一次复习！目前还在内测使用，尚未公布链接，如有需要欢迎联系我获取！",
      "chat.a.proj2": "《奇迹》是一个侦探解密题材的游戏 demo，现在正在努力改进美术和修 bug 中。侦探真新是一位来自乡下的新人，偶然卷入了一场噩梦中，他能否一次次诞生奇迹，绝境逢生呢？目前 demo 只开放了第一章，并未开放所有玩法，目前还在修改剧情 bug 和游戏画面，如果有兴趣欢迎与我联系获取软件~"
    },
    en: {
      /* v3.5（用户裁定③）：与中文 brand 同步 —— 窄屏顶栏提示去电脑上体验 */
      brand: "Best viewed on desktop",
      name: "Zheng Ruihang",
      role: "You can chat with me by clicking on my little floating character",
      avatar: "Zheng",
      avatarShort: "Zheng",
      "hero.greet": "Welcome to my homepage 👋",
      "hero.badge": "The warm lamp is on",
      "hero.badgeOff": "The lamp is off — the room is dark",
      "hero.deskNote": "You've worked hard. Made a cup of coffee — take your time.",
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
      "projects.d1": "Study-assist webpage built by vibe coding.",
      "projects.tag2": "Game",
      "projects.t2": "Detective puzzle game \"Miracle (demo)\"",
      "projects.d2": "A detective puzzle demo, still polishing.",
      "projects.tag3": "Exploring",
      "projects.t3": "Next step: exploring!",
      "projects.d3": "More fun ideas are hatching.",
      "interests.i1": "Table Tennis",
      "interests.i2": "Martial Arts",
      "interests.i3": "Walking",
      "interests.i4": "Gaming",
      "interests.i5": "Music",
      "interests.i6": "writing",
      "interests.i7": "Tinkering with curious things",
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
      // v3.6 (user item ⑤): background-music switch + autoplay-blocked hint
      "ui.bgmAria": "Background music switch",
      "ui.bgmTapHint": "Tap anywhere to start the background music",
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
      footer: "© 2026 Zheng Ruihang · Homepage",
      speakGreet: "Hello! How can I help you?",
      speakIdle: "Lost in thought? Can I help?",
      "hover.email": "Feel free to reach me by email!",
      "hover.phone": "Feel free to call me!",
      "hover.proj1": "Still improving — welcome to try it!",
      "hover.proj2": "Working on the art and fixing bugs... (losing hair)",
      "hover.proj3": "Stay tuned!",
      "hover.submit": "Just a newbie, please be gentle...",
      /* v3.23: detail bubbles + occlusion hint + chat window (titles reuse projects.t*)
         v3.24 (asks 2 & 3): the chat window becomes ONE global conversation —
         chat.more / chat.note / chat.p1a-c / chat.p2a-c are gone; the set below
         holds the entry label, first-time greeting, fallback, quick / auto
         questions and the six keyword answers. */
      "hover.detail": "Click here for details",
      "hint.occluded": "The content is covered — try moving your cursor onto the card.",
      "chat.close": "Close",
      "chat.enter": "Open the chat",
      "chat.title": "Chat with Zheng Ruihang",
      "chat.hello": "Hi! I'm Zheng Ruihang, currently studying at Tianjin University-Hong Kong Polytechnic University Shenzhen Future Technology Institute. Feel free to ask me anything! I'm only a digital stand-in though, so I'm not all-knowing. You can also tap a quick question below — let's chat!",
      "chat.fallback": "Sorry, I can't answer that one yet... but the quick questions below I definitely can!",
      "chat.ph": "Type your question…",
      "chat.inputAria": "Type your question",
      "chat.logAria": "Conversation",
      "chat.send": "Send",
      "chat.q1": "Who are you?",
      "chat.q2": "How can I reach you?",
      "chat.q3": "What projects do you have?",
      "chat.q4": "What are your interests?",
      "chat.ask1": "Can you tell me more about the study-assist project?",
      "chat.ask2": "Can you tell me more about the detective game?",
      "chat.a.who": "I'm Zheng Ruihang, a student who likes tinkering with pixel art and all sorts of odd little things. I built this homepage myself, bit by bit. Tap a quick question below to learn more!",
      "chat.a.contact": "Email: 3490216203@qq.com; Phone: 13826692189. Feel free to get in touch, or just leave me a note in the feedback form below.",
      "chat.a.projects": "There isn't much I can proudly show off yet: a study-assist tool, a detective puzzle game, and this personal homepage you're on right now. Sparse as they are, I've polished every detail of each one — the homepage alone has already got a product iteration report of over 700 KB of plain text, and it may keep growing; counting deleted drafts, it's been through 80-plus versions. If you'd like to hear more about the study-assist project or the game, just type the keyword \"study\" or \"game\"~",
      "chat.a.interests": "Table tennis, martial arts, walking, games, music, screenwriting, and tinkering with weird stuff.",
      "chat.a.proj1": "The study-assist site was built with vibe coding, out of a need I kept running into while studying, and it's still being improved — welcome to try it! In it, every knowledge point has to be added and written by yourself: meaning, boundaries, applications, proofs, reverse-thinking angles, all built by hand, with cards and categories so knowledge stops being scattered. Don't worry that writing it yourself will get it wrong: there's an AI check built in — just connect an AI in the settings and it will help verify your notes! It also has a review feature, and the schedule follows the Ebbinghaus forgetting curve so reviewing stays efficient. And a review has a threshold: to keep you from skimming, you have to write down a thought or insight after each session before it counts. It's still in closed beta with no public link yet, so get in touch if you'd like access!",
      "chat.a.proj2": "\"Miracle\" is a detective puzzle game demo; I'm working on the art and fixing bugs. Detective Zhen Xin is a newcomer from the countryside who stumbles into a nightmare — can he keep working miracles and find a way out? Only chapter one is open in the demo and not all mechanics are available yet; I'm still fixing story bugs and the visuals. If you're interested, get in touch and I'll send you the build~"
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

    // v3.23：气泡改成对话栈之后，气泡是动态创建的 —— 换语言时按 key
    // 重刷栈里每一条的文案（气泡本身还在，只是字要跟着换）。
    // 聊天窗开着就顺手一起重刷。
    speechList.slice().forEach(function (b) {
      var t = b.el.querySelector(".speech-text");
      if (t) t.textContent = dict[b.key] || "";
      var d = b.el.querySelector(".speech-detail");
      if (d) d.textContent = dict["hover.detail"] || "";
      var m = b.el.querySelector(".speech-enter");
      if (m) m.textContent = dict["chat.enter"] || "";
    });
    // 聊天窗开着就顺手把标题 / 输入框 / 快捷提问 / 聊天记录一起重刷
    if (chatEl && !chatEl.hidden) refreshChatTexts();
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
    syncSignTopbar();   // v3.4：窄屏牌组要让开侧边栏（函数在本文件第 10 节）
  }

  function closeSidebar() {
    sidebar.classList.remove("open");
    sidebarMask.classList.remove("show");
    syncSignTopbar();
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
  /* v3.23：#speechBubble 这个单气泡元素已换成 #speechStack 对话栈，
     文案与定时全部由第 11 节的栈逻辑接管，这里不再留引用。 */
  var heroSlot = document.getElementById("heroAvatarSlot");
  var heroName = document.getElementById("heroName");

  var AVATAR_SIZE = 96;    // 与 CSS 中 .float-avatar 尺寸保持一致（v2.7: 64 -> 96；v2.8 只换 32x32 素材，尺寸不变）
  /* v3.23：头顶要给"对话栈"留位置 —— 最多两条（各约 52px）+ 6px 间距
     + 14px 底距 ≈ 124px，所以从 60 提到 140（原来只放一条气泡）。 */
  var BUBBLE_SPACE = 140;
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
    var isDesktop = window.innerWidth > 1024;
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
    var isDesktop = window.innerWidth > 1024;
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
      showSpeech("speakGreet", { enter: true });
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
  var ROPE_GAP = 24;     // 窄屏两块牌上下堆叠时，至少留一个格子的缝（拖拽用）
  var TAUT_MS = 260;     // 拉到头绷紧抖动的时长（与 CSS 动画一致）
  /* v3.4（用户裁定）：窄屏绳子从「屏幕最上沿」垂下，并且缩短一些。
     · ROPE_NARROW 原口径下算出的是 210（250 - SLACK 40），缩短 34px 取 176；
       牌 A 的顶因此从文档 y 282 提到 176 —— 绳子明显短了一截，
       顶上还多出屏幕最上沿那 56px 的一段（"从最上沿垂下来"）。
     · ROPE_CLEAR 是下限：绳再短，牌顶就会撞上吊灯灯罩（灯罩底 = 102）、
       或右上角那扇小窗的底边（窗顶 72 + 高 93 = 165）。
       屏幕实在放不下时宁可整组溢出首屏（滚动看），也不让灯/窗咬住牌子。
     · ROPE_TUCK 是牌 B 绳头压进牌 A 框里的那 4px（与 CSS 里绳盒多出的 4px 同源）。

     v3.5（用户裁定①「绳再短一些」）：
     · ROPE_NARROW 176 → 120（再短 56px，比 v3.4 又短 32%）；
       牌 A 的顶 = 120（v3.4 是 176），牌 B 的顶 = 376，整组仍放得下首屏。
     · ROPE_CLEAR 172 → 112 一并下移：算式是
       max(ROPE_CLEAR, min(ROPE_NARROW, avail))，下限不下移的话
       一旦 avail < 172 就会夹回 172，比目标值还长、退化。
     · 原来那条「或右上角那扇小窗的底边（165）」的约束在 v3.5 已经消失
       —— 窗户不再被挪到右上角，改成贴着底图那扇窗（见 css 窗户段），
       所以下限只剩灯罩底 102，120 > 102 仍留 18px 余量。
     · 副作用（已知，可接受）：扯线 #pxCord 是 z-index 52、牌 A 是 51，
       绳短之后扯线与灯珠会叠在牌面左上（x 91~116）——仍点得到。 */
  var ROPE_NARROW = 120;
  var ROPE_CLEAR = 112;
  var ROPE_TUCK = 4;
  var TOPBAR_H = 56;     // 窄屏顶栏高度（css 2646 实测 56；牌的降级开关按它判断）
  var signRope = Array.prototype.slice.call(document.querySelectorAll(".px-sign"));
  var signPanel = document.querySelector(".hero-panel");

  /* 窄屏判定（v3.4 从 16-B 搬到这里）：
     第 10 节的 layoutSigns / 拖拽守卫、第 16-B 的取景、箭头状态都要用它，
     而 layoutSigns 在本节末尾就会执行一次 —— 留在 16-B 的话那时 NARROW_Q
     还没赋值（var 只有声明被提升），窄屏首帧会静默按桌面规则布局。
     v3.6（用户第③条）：口径与 CSS 那批窄屏覆盖完全一致 ——
     CSS 侧全部 @media (max-width: 1024px) 都写成
     "(max-width: 1024px), (orientation: landscape) and (max-height: 560px)"，
     这里必须同步加横屏那一段，否则"手机横屏"会出现 CSS 按窄屏排版、
     JS 按桌面算绳长/取景的错配（v3.5 之前这就是横屏错位的根）。
     横屏判据用 max-height: 560px 而不是 max-width —— 横屏 iPhone 的
     视口宽是 844/932，按宽度判会掉进电脑端那套规则。
     v3.7：宽度阈值 820 -> 1024，与 CSS 同步抬高（理由见 style.css 响应式段）。 */
  var NARROW_Q = "(max-width: 1024px), (orientation: landscape) and (max-height: 560px)";

  function isNarrow() {
    return !!(window.matchMedia && window.matchMedia(NARROW_Q).matches);
  }

  function signNum(v) { return v ? +v : 0; }

  /* 牌子的竖向位置只由两件事决定：
       __pin  = 绳子上端在文档里的 y（钉住不动，只能靠改绳长上下）
       __rope = 绳长  →  牌顶 = __pin + __rope
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
     桌面两块牌左右并排 → 各拖各的、行程都是满的 [24, 250]。
     上界再抬一次到不低于当前绳长，保证初始位置一定合法；
     lo 最后夹一次不让它超过 hi → 区间永远不会塌成单点（卡死）。 */
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
     往左不许拖出屏幕。窄屏 v3.5 起窗户与桌面同源（贴着底图那扇窗、
     跟着 --px-ox 一起走），但窄屏整条拖拽路径本来就是关的（isNarrow 直接
     return），所以这条右边界只服务桌面端；真要在窄屏放开拖拽，
     这里的判据（窗在牌右侧 + 竖向重叠才给右边界）依然成立。 */
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

  /* v3.4：窄屏「绳子从最上沿垂下」的降级开关。
     两块牌要压过顶栏（窄屏 CSS 里 51 / 50）才看得见 0..56px 那一段绳子；
     可牌组一旦滚进顶栏、或侧边栏/遮罩打开时，牌就会盖住顶栏、汉堡键和侧边栏
     （遮罩 35 / 侧边栏 40 都在 51 之下），所以这两种情况必须放回文档层（9 / 8）。
     判据是【绳子的下端】（= 牌 A 的顶）有没有走到顶栏下沿：
     绳子上端在文档 y=0，牌顶在 y=120（v3.5 起，v3.4 是 176），
     视口里牌顶 = 120 - 滚动量。
     牌顶还在 56 以下时，牌本身没碰到顶栏；压过顶栏的只是绳子那一段，
     而 0..56 正是要被看见的部分。牌顶一到 56（滚动 64px），
     整条绳子都钻到顶栏后面了（顶栏不透明、盖住 0..56），
     此刻再降级，屏幕上看不出任何变化 —— 这就是这个切换"无感"的原因。
     早先误用了【绳子上端】（= -滚动量，永远 <= 56），
     结果页面停在顶部时就一直降级，绳子那一段反而被顶栏挡掉了。 */
  function syncSignTopbar() {
    if (!signPanel) return;
    var masked = !!(sidebar && sidebar.classList.contains("open")) ||
                 !!(sidebarMask && sidebarMask.classList.contains("show"));
    /* v3.5（用户裁定④）：侧边栏/遮罩打开时把吊灯与扯线降层 —— 它们窄屏取
       z-index 52（"叠在顶栏之上"那套），而侧边栏只有 40、遮罩 35，
       打开时会盖不住吊灯。规则写在 css 末尾 ⑦ 节（body.is-masked），
       只在窄屏生效。类始终同步（不受下面窄屏 early-return 影响），
       免得关了侧边栏还留着降层状态。 */
    document.body.classList.toggle("is-masked", masked);
    if (!isNarrow()) {
      signPanel.classList.remove("is-under-topbar");
      return;
    }
    var ropeBottom = signRope.length
      ? signRope[0].getBoundingClientRect().bottom : Infinity;
    signPanel.classList.toggle("is-under-topbar", masked || ropeBottom <= TOPBAR_H);
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
    /* v3.4（用户裁定）：手机端绳子从【屏幕最上沿】垂下来，而且缩短一些。
       原口径的"天花板" = anchorY = 这一节顶 = 文档 y 72，正好落在顶栏下沿
       那条棕灰线上 —— 绳子从那里开始，读起来就是"挂在顶栏下面"，
       正是用户说的"顶端定位错误"。
       窄屏改成以文档 y=0 为绳子上端：groupBase = 绳长 − 牌 A 的自然顶，
       两块牌共用这一个位移，于是牌 A 的绳上端落在 0（见下面的 __pin 算式）。
       绳长取 ROPE_NARROW（176，比原来的 210 短 34px —— 用户要"绳子缩短一些"）；
       只有屏幕真的放不下（avail 更小）时才缩到 ROPE_CLEAR：再短牌顶就会撞上
       吊灯灯罩或右上角那扇小窗的底边，宁可整组溢出首屏（滚动看）。 */
    var narrow = isNarrow();
    var ropes = signRope.map(function () { return rope; });
    if (narrow && signRope.length) {
      var avail = window.innerHeight - padBottom - signPanel.offsetHeight;
      var ropeA = Math.max(ROPE_CLEAR, Math.min(ROPE_NARROW, avail));
      ropes[0] = ropeA;
      groupBase = Math.round(ropeA - signRope[0].__natTop);   // → 牌 A 的绳上端 = 文档 y 0
      if (signRope.length > 1) {
        /* 牌 B：绳头系在牌 A 的下沿（压进 ROPE_TUCK 那 4px，读作"绳头在牌背面"），
           绳只跨过两块牌之间那道缝。缝按实测取（窄屏 .hero-panel 是
           flex-direction: column + gap: 72），不去猜 CSS 的数字。 */
        var ropeGapPx = Math.round(signRope[1].__natTop -
          (signRope[0].__natTop + signRope[0].offsetHeight));
        ropes[1] = Math.max(ROPE_MIN, ropeGapPx + ROPE_TUCK);
      }
    }
    signRope.forEach(function (sign, i) {
      /* 绳子上端：桌面两块牌并排 → 都在天花板上（__natTop 相同、groupBase 相同）。
         窄屏（v3.4）：牌 A 的 groupBase 已按 ropeA 反算过，__pin 落在 0；
         牌 B 共用同一条 groupBase、只为它自己那条短绳反推 __pin →
         它的绳上端正好落在牌 A 的底边往下 ROPE_TUCK 处。
         旧口径下牌 B 的绳长与牌 A 相同（210），上端落在牌 A 背后 138px ——
         那是"绳子和木牌没对好"的那种挂法。 */
      sign.__pin = sign.__natTop + groupBase - ropes[i];
      sign.__rope = ropes[i];
      applySign(sign);
    });
    signRanges();       // 绳长区间（静态，见 signRanges 注释）
    signClampX();       // 横拖边界（窗户左缘 / 屏幕边缘）
    syncSignTopbar();   // v3.4：窄屏牌组"从最上沿垂下"的降级开关（见函数注释）
  }

  /* 拖拽：拖哪块牌都行 —— 横拖平移、竖拖改绳长 */
  var nDrag = { sign: null, active: false, moved: false, sx: 0, sy: 0, dx0: 0, rope0: 0 };

  signRope.forEach(function (sign) {
    sign.addEventListener("pointerdown", function (e) {
      /* v3.4（用户裁定）：手机端吊牌不许手动移动 —— 手指落在牌上时，
         手势交还页面（滚动），牌不动。CSS 那边也把 touch-action 改回 pan-y，
         两层都留着：任一层改动漏掉都不会把牌拖走。
         桌面/平板（>1024px）行为完全不变：拖动对象 = 整块牌。 */
      if (isNarrow()) return;
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
  /* v3.4：窄屏"从最上沿垂下"的降级开关要跟着滚动走（见 syncSignTopbar）。
     rAF 节流：每次滚动只读一次 rect、切一次类，不跟视差抢帧。 */
  var signTopRaf = false;
  window.addEventListener("scroll", function () {
    if (signTopRaf) return;
    signTopRaf = true;
    window.requestAnimationFrame(function () {
      signTopRaf = false;
      syncSignTopbar();
    });
  }, { passive: true });

  initFloat();

  /* ============================================================
   * 11. 对话栈（v3.23）
   *     用户裁定的规则，逐条落在下面：
   *       · 最多同时 2 条 —— 第 3 条进来时把最老的一条【立即】删掉
   *         （不是等它到期，用户明确说过"不管到没到时间"）；
   *       · 新的在下、旧的被顶到上面：DOM 顺序从老到新，
   *         .speech-stack 是 column 布局，最新的自然贴底（离小人最近）；
   *       · 离开触发区不立刻消失，5 秒后才消失；
   *       · 光标移到气泡上（或触发它的元素上）→ 暂停（豆豆保持 5 颗），
   *         移开后【重新从 5 秒】计时（所以暂停时把 remaining 复位成 5，
   *         而不是接着往下数）；
   *       · 气泡右外侧 5 颗黄豆豆，每秒从下到上消失一颗，全没了气泡消失。
   *     另外"同一句话不重复堆"：key 已在栈里就只把它的倒计时复位，
   *     不再追加一条 —— 遮挡提示连续触发的那种情况全靠这条兜住。
   * ============================================================ */
  var STACK_MAX = 2;
  var BUBBLE_LIFE_SEC = 5;                    // 5 颗豆豆 = 5 秒
  var speechStackEl = document.getElementById("speechStack");
  var speechList = [];                        // 从老到新

  function findSpeech(key) {
    for (var i = 0; i < speechList.length; i++) {
      if (speechList[i].key === key) return speechList[i];
    }
    return null;
  }

  // 把豆豆数量画成 b.remaining 颗（少则删尾巴，多则补）
  function renderBeans(b) {
    while (b.beans.children.length > b.remaining) {
      b.beans.removeChild(b.beans.lastChild);
    }
    while (b.beans.children.length < b.remaining) {
      var d = document.createElement("span");
      d.className = "speech-bean";
      b.beans.appendChild(d);
    }
  }

  function stopCountdown(b) {
    if (b.tick) { clearInterval(b.tick); b.tick = null; }
  }

  function detachSpeech(b) {
    stopCountdown(b);
    var i = speechList.indexOf(b);
    if (i >= 0) speechList.splice(i, 1);
    if (!b.el.parentNode) return;
    if (b.immediate) {
      b.el.parentNode.removeChild(b.el);
      return;
    }
    b.el.classList.remove("show");
    setTimeout(function () {
      if (b.el.parentNode) b.el.parentNode.removeChild(b.el);
    }, 240);   // 与 CSS 的 opacity 过渡同长
  }

  function removeSpeech(b, immediate) {
    b.immediate = !!immediate;
    detachSpeech(b);
  }

  function clearSpeechStack() {
    speechList.slice().forEach(function (b) { removeSpeech(b, false); });
  }

  // 开始/重启倒计时：remaining 复位成 5，再每秒掉一颗
  function startCountdown(b) {
    stopCountdown(b);
    b.remaining = BUBBLE_LIFE_SEC;
    renderBeans(b);
    b.tick = setInterval(function () {
      b.remaining -= 1;
      renderBeans(b);
      if (b.remaining <= 0) removeSpeech(b, false);
    }, 1000);
  }

  function pauseSpeech(b) {
    if (!b || b.paused) return;
    b.paused = true;
    stopCountdown(b);
    b.remaining = BUBBLE_LIFE_SEC;   // 移开后要"重新从 5 秒计时"
    renderBeans(b);
  }

  function resumeSpeech(b) {
    if (!b || !b.el.parentNode) return;
    b.paused = false;
    startCountdown(b);
  }

  /* 压入一条气泡。
     opts.owner  触发它的元素（光标停在那上面时同样算暂停）
     opts.detail 带「点击这里查看详情」那一行，整块可点
     opts.chat   进聊天窗并自动问一句（1 / 2，对应项目卡的 data-chat）
     opts.enter  进聊天窗但不自动提问（问候 / 发呆气泡的「进入对话」） */
  function showSpeech(key, opts) {
    opts = opts || {};
    var dict = I18N[currentLang];
    var text = dict[key];
    if (text == null) return null;

    var exist = findSpeech(key);
    if (exist) return exist;    // 同一句不重复堆，交给 hover 的暂停/恢复管

    // 顶掉最老的一条：立即消失，不等它到期
    while (speechList.length >= STACK_MAX) {
      removeSpeech(speechList[0], true);
    }

    var el = document.createElement("div");
    el.className = "speech-bubble";
    var textEl = document.createElement("span");
    textEl.className = "speech-text";
    textEl.textContent = text;
    el.appendChild(textEl);
    if (opts.detail) {
      el.classList.add("speech-bubble--detail");
      var detailEl = document.createElement("span");
      detailEl.className = "speech-detail";
      detailEl.textContent = dict["hover.detail"] || "";
      el.appendChild(detailEl);
    }
    // v3.24（需求②）：右下角那行小字不再挂在项目气泡上（那里只留内联的
    // 「点击这里查看详情」），改成只给问候 / 发呆气泡当聊天入口。
    if (opts.enter) {
      var enterEl = document.createElement("span");
      enterEl.className = "speech-enter";
      enterEl.textContent = dict["chat.enter"] || "";
      el.appendChild(enterEl);
      el.classList.add("speech-bubble--enter");
    }
    // 整块可点（也能 Tab + 回车）：项目气泡顺便自动问一句，问候气泡只开窗
    if (opts.detail || opts.enter) {
      el.setAttribute("role", "button");
      el.setAttribute("tabindex", "0");
    }

    var beans = document.createElement("span");
    beans.className = "speech-beans";
    el.appendChild(beans);

    var b = {
      key: key, el: el, beans: beans, owner: opts.owner || null,
      paused: false, remaining: BUBBLE_LIFE_SEC, tick: null, immediate: false
    };
    // 光标停在气泡上 → 暂停；离开 → 重新从 5 秒计时
    el.addEventListener("mouseenter", function () { pauseSpeech(b); });
    el.addEventListener("mouseleave", function () { resumeSpeech(b); });
    if (opts.chat || opts.enter) {
      // 项目气泡：开窗 + 自动问一句（chat = "1" / "2"）；
      // 问候 / 发呆气泡：只开窗，不带自动提问（enter = true）
      var chatId = opts.chat || null;
      el.addEventListener("click", function () { openChat(chatId); });
      el.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openChat(chatId);
        }
      });
    }

    renderBeans(b);              // 先把 5 颗豆豆摆好
    speechStackEl.appendChild(el);
    void el.offsetWidth;         // 强制一次布局，让 .show 的过渡真的跑起来
    el.classList.add("show");
    // 小人贴右缘时"框外右侧"会顶出屏幕（豆豆在视口外 = 倒计时看不见），
    // 这种情况整列翻到气泡左侧，窄屏由 CSS 媒体查询同样处理。
    var elRect = el.getBoundingClientRect();
    if (elRect.right + 26 > window.innerWidth) {
      el.classList.add("speech-bubble--beans-left");
    }
    speechList.push(b);

    // 触发元素上已经有光标 → 先暂停；没有才立刻开始 5 秒倒计时
    if (b.owner) pauseSpeech(b);
    else resumeSpeech(b);
    return b;
  }

  function hideSpeech() { clearSpeechStack(); }

  /* ============================================================
   * 11-B. 像素风聊天窗（v3.23 需求③ / v3.24 需求②③ / v3.25 需求①）
   *       v3.24 起不再是"每个项目一套写死的静态台词"，而是【单个全局对话】：
   *         · CHAT_LOG 存整段聊天记录 —— 左 = 主页主人（郑先生，带头像、
   *           奶油气泡），右 = 访客（豆绿气泡、无头像），沿用 v3.23 的左右惯例；
   *         · 输入框 + 发送按钮；4 个快捷提问木牌；关键词应答 + 兜底回复；
   *         · 首次进入自动问候一句（内存标记，不写 localStorage，刷新即重置）；
   *         · 从项目卡 / 详情气泡进来时替访客自动问一句（chat.ask1 / ask2）；
   *         · 记录只在内存里：关掉再开还在，往上滚能翻，刷新就清空。
   *       v3.25 需求①（用户裁定）：「我」的回复不再秒回，分两拍 ——
   *         ① 气泡先挂着，里面是一串跳动的省略号（正在输入）；
   *         ② 随机停 0.75~1s 后逐字吐出来（50 字/秒，像 AI 在打字）。
   *         访客自己的话仍然立即出场；主人的回复排队一条条说。
   *       打开：气泡点击 / 回车、"进入对话"、项目卡回车（键盘通路）；
   *       关闭：右上角像素 ×、点窗外遮罩、Esc —— 用户裁定的三件套。
   * ============================================================ */
  var chatEl = document.getElementById("pxChat");
  var chatWindowEl = document.getElementById("pxChatWindow");
  var chatBodyEl = document.getElementById("pxChatBody");
  var chatTitleEl = document.getElementById("pxChatTitle");
  var chatQuickEl = document.getElementById("pxChatQuick");
  var chatFormEl = document.getElementById("pxChatForm");
  var chatInputEl = document.getElementById("pxChatInput");
  var chatSendEl = document.getElementById("pxChatSend");
  var chatCloseEl = document.getElementById("pxChatClose");
  var chatBackdropEl = document.getElementById("pxChatBackdrop");
  var chatLastFocus = null;
  var chatGreeted = false;      // 本次打开页面是否已经问候过（用户裁定：不写盘）

  /* 聊天记录：一条 = { from: "me" | "them", key: i18n 键?, text: 访客原话? }
     带 key 的（问候 / 应答 / 自动提问）换语言时按 key 重刷成另一种语言；
     带 text 的是访客自己打的字，原样保留。 */
  var CHAT_LOG = [];

  /* 快捷提问木牌：问句 + 直接对应的答案键。
     点木牌不再走关键词（保证中英都能一问一答），
     只有"自己打字"才交给下面的 CHAT_RULES 猜意图。 */
  var QUICK_ASKS = [
    { q: "chat.q1", a: "chat.a.who" },
    { q: "chat.q2", a: "chat.a.contact" },
    { q: "chat.q3", a: "chat.a.projects" },
    { q: "chat.q4", a: "chat.a.interests" }
  ];

  /* 关键词应答表（v3.24 需求③）：从上往下第一条命中的就用它。
     顺序有意：两个"具体项目"规则排在"项目 / 作品"这类泛词之前，
     否则"学习辅助项目"会先撞上泛词；"兴趣"排在"游戏"之前，
     免得"你喜欢什么游戏"被当成在问侦探游戏；"游戏 / game"
     留在侦探那条里，"侦探游戏做得怎么样"仍然接得住。 */
  var CHAT_RULES = [
    { key: "chat.a.proj1", words: ["学习辅助", "学习", "网页", "vibe", "web", "study"] },
    { key: "chat.a.who", words: ["你是谁", "你叫", "你的名字", "自我介绍", "who are you", "your name"] },
    { key: "chat.a.contact", words: ["联系方式", "联系", "邮箱", "邮件", "电话", "手机", "微信", "contact", "email", "mail", "phone", "reach"] },
    { key: "chat.a.interests", words: ["兴趣", "爱好", "喜欢", "平时", "interest", "hobby", "like"] },
    { key: "chat.a.proj2", words: ["侦探", "解密", "解谜", "奇迹", "游戏", "demo", "detective", "puzzle", "game", "miracle"] },
    { key: "chat.a.projects", words: ["项目", "作品", "做过", "project", "portfolio", "work"] }
  ];

  // 归一化：小写 + 只留中英文与数字（空格、标点全丢掉），
  // 这样"你是谁？"和"Who are you?"能被同一张表接住。
  function normAsk(s) {
    return String(s == null ? "" : s).toLowerCase().replace(/[^a-z0-9\u4e00-\u9fff]/g, "");
  }

  /* 英文名词的单复数兜底：-y → -ies（hobby → hobbies）、-s / -es
     （project → projects）。词表里写单数，问题里写复数也算命中 ——
     真机实测踩到过：打字 "hobbies" 掉进了兜底回答。中文词不受影响。 */
  function wordForms(w) {
    var f = [w];
    if (/^[a-z]+$/.test(w)) {
      f.push(w + "s");
      f.push(w + "es");
      if (/[^aeiou]y$/.test(w)) f.push(w.slice(0, -1) + "ies");
    }
    return f;
  }

  function answerKeyFor(text) {
    var n = normAsk(text);
    if (!n) return "chat.fallback";
    for (var i = 0; i < CHAT_RULES.length; i++) {
      var words = CHAT_RULES[i].words;
      for (var j = 0; j < words.length; j++) {
        var forms = wordForms(normAsk(words[j]));
        for (var k = 0; k < forms.length; k++) {
          if (forms[k] && n.indexOf(forms[k]) !== -1) return CHAT_RULES[i].key;
        }
      }
    }
    return "chat.fallback";
  }

  // 造一行：from = "me"（左侧 + 头像）/ "them"（右侧）
  function makeChatRow(m) {
    var dict = I18N[currentLang];
    var row = document.createElement("div");
    row.className = "px-chat-row px-chat-row--" + m.from;
    if (m.from === "me") {
      var face = document.createElement("span");
      face.className = "px-chat-face";
      row.appendChild(face);
    }
    var bub = document.createElement("div");
    bub.className = "px-chat-bubble";
    bub.textContent = m.key ? (dict[m.key] || "") : (m.text || "");
    row.appendChild(bub);
    return row;
  }

  function renderChatLog() {
    if (!chatBodyEl) return;
    chatBodyEl.textContent = "";
    CHAT_LOG.forEach(function (m) { chatBodyEl.appendChild(makeChatRow(m)); });
    chatBodyEl.scrollTop = chatBodyEl.scrollHeight;   // 最新一条留在视野里
  }

  function pushChat(m) {
    CHAT_LOG.push(m);
    if (chatEl && !chatEl.hidden && chatBodyEl) {
      var row = makeChatRow(m);
      chatBodyEl.appendChild(row);
      chatBodyEl.scrollTop = chatBodyEl.scrollHeight;
      return row;                 // v3.25：出场的这一行要给"吐字"接手
    }
    return null;
  }

  /* ------------------------------------------------------------
   * v3.25 需求①：主人不再"秒回"。
   *   一条回复分两拍 ——
   *     ① 先把气泡挂出来，里面是一串跳动的省略号（正在输入）；
   *     ② 随机停 0.75~1s，再像 AI 一样逐字吐出来（默认 50 字/秒）。
   *   访客自己说的话仍然立即出现（不能让用户觉得自己的字也没发出去）；
   *   主人这边排队：上一条还在说，下一条就等它说完 —— 连问三句也不会
   *   两条回复挤在同一个气泡里。
   *   尊重系统"减少动态效果"：那种情况下直接出全文（等同 v3.24 的行为）。
   * ------------------------------------------------------------ */
  var CHAT_WAIT_MIN = 750;    // "正在输入"最短停顿（ms）
  var CHAT_WAIT_MAX = 1000;   // 最长停顿（ms）
  var CHAT_TYPE_CPS = 50;     // 吐字速度：每秒 50 个字（≈ 每字 20ms，像 AI）
  var chatQueue = [];         // 待播序列：主人的回复在这里排队
  var chatBusy = false;       // 是否有一条主人回复正在"等待 / 吐字"
  var chatTyping = null;      // 进行中那条：{ row, bub, full, timer, raf, startAt, shown, onDone }

  function chatReduceMotion() {
    return !!(window.matchMedia
      && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }

  // 省略号气泡：三个像素小方块，CSS 里依次跳动（.px-chat-dots）
  function makeTypingDots() {
    var dots = document.createElement("span");
    dots.className = "px-chat-dots";
    dots.setAttribute("aria-hidden", "true");
    for (var i = 0; i < 3; i++) dots.appendChild(document.createElement("i"));
    return dots;
  }

  // 用户自己滚上去看历史时别把他拽回来：只有原本贴着底才跟着滚
  function chatStuckToBottom() {
    if (!chatBodyEl) return false;
    return chatBodyEl.scrollHeight - chatBodyEl.scrollTop
      - chatBodyEl.clientHeight < 60;
  }

  /* 把正在说的那条一次性补齐（关窗 / 换语言 / 被下一条顶掉时用）。
     记录里本来就有这条（存的是 key），所以补齐只是把动画收尾，不是丢内容。 */
  function finishMeReply() {
    var t = chatTyping;
    if (!t) return;
    chatTyping = null;
    if (t.timer) { clearTimeout(t.timer); t.timer = 0; }
    if (t.raf) { cancelAnimationFrame(t.raf); t.raf = 0; }
    if (t.row && document.contains(t.row)) {
      t.row.classList.remove("px-chat-row--typing");
      if (t.bub) t.bub.textContent = t.full;
    }
    if (t.onDone) t.onDone();
  }

  // 队列泵：访客的话立即出场，主人的回复一条一条慢慢说
  function chatPump() {
    while (!chatBusy && chatQueue.length) {
      var m = chatQueue.shift();
      if (m.from === "me") {
        chatBusy = true;
        startMeReply(m.key, function () { chatBusy = false; chatPump(); });
        return;
      }
      pushChat(m);
    }
  }

  function chatEnqueue(list) {
    chatQueue = chatQueue.concat(list);
    chatPump();
  }

  /* 一条主人回复：省略号 → 停 0.75~1s → 逐字吐出。
     窗口没开（记录照写、下次打开看到全文）或"减少动态效果"时直接落全文。 */
  function startMeReply(key, onDone) {
    var row = pushChat({ from: "me", key: key });
    if (!row || chatReduceMotion()) { if (onDone) onDone(); return; }
    var bub = row.querySelector(".px-chat-bubble");
    if (!bub) { if (onDone) onDone(); return; }
    var t = {
      row: row, bub: bub, onDone: onDone,
      full: I18N[currentLang][key] || "",
      timer: 0, raf: 0, startAt: 0, shown: 0
    };
    chatTyping = t;
    bub.textContent = "";
    bub.appendChild(makeTypingDots());          // 第一拍：省略号
    row.classList.add("px-chat-row--typing");
    chatBodyEl.scrollTop = chatBodyEl.scrollHeight;
    t.timer = setTimeout(function () {
      t.timer = 0;
      if (chatTyping !== t) return;             // 已被 finish 收尾
      bub.textContent = "";
      t.raf = requestAnimationFrame(function (now) { typeMeReply(t, now); });
    }, CHAT_WAIT_MIN + Math.random() * (CHAT_WAIT_MAX - CHAT_WAIT_MIN));
  }

  /* 吐字：按真实时间推进（掉帧也不改速度），每帧只改一次 textContent。
     不用 setInterval(20ms)：后台标签会被降频成 1s 一跳，吐字会一顿一顿。 */
  function typeMeReply(t, now) {
    if (chatTyping !== t) return;
    if (!t.startAt) t.startAt = now;
    var stuck = chatStuckToBottom();
    var n = Math.floor((now - t.startAt) / 1000 * CHAT_TYPE_CPS);
    if (n > t.full.length) n = t.full.length;
    if (n !== t.shown) {
      t.shown = n;
      t.bub.textContent = t.full.slice(0, n);
      if (stuck) chatBodyEl.scrollTop = chatBodyEl.scrollHeight;
    }
    if (n < t.full.length) {
      t.raf = requestAnimationFrame(function (next) { typeMeReply(t, next); });
      return;
    }
    t.raf = 0;
    chatTyping = null;
    t.row.classList.remove("px-chat-row--typing");
    if (t.onDone) t.onDone();
  }

  /* 关窗 / 换语言：正在说的补齐、还没出场的直接写进记录（不再放动画）。 */
  function stopChatSeq() {
    chatBusy = false;
    if (chatQueue.length) {
      chatQueue.forEach(function (m) { CHAT_LOG.push(m); });
      chatQueue.length = 0;
    }
    finishMeReply();
  }

  /* 一问一答：访客原话（text）留在记录里并且**立即出场**，主人的应答
     只存 i18n 键（换语言时跟着变），交给队列慢慢说（v3.25 需求①）。
     ansKey 给了就用它（快捷提问 / 自动提问），没给才走关键词表（自己打字）。 */
  function askChat(text, ansKey) {
    var t = String(text == null ? "" : text).replace(/^\s+|\s+$/g, "");
    if (!t) return;
    pushChat({ from: "them", text: t });
    chatEnqueue([{ from: "me", key: ansKey || answerKeyFor(t) }]);
    // 音效交给调用方：快捷提问木牌带 data-sfx（全局委托会响），
    // 输入框回车 / 点发送由 submit 处理器响 —— 这里再响一次就重了。
  }

  function buildQuickAsks() {
    if (!chatQuickEl) return;
    var dict = I18N[currentLang];
    chatQuickEl.textContent = "";
    QUICK_ASKS.forEach(function (qa) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "px-chat-chip";
      btn.setAttribute("data-sfx", "click");
      btn.textContent = dict[qa.q] || "";
      btn.addEventListener("click", function () { askChat(dict[qa.q] || "", qa.a); });
      chatQuickEl.appendChild(btn);
    });
  }

  // 标题 / 关闭按钮 / 输入框 / 快捷提问 / 记录一起重刷（换语言时调用）
  function refreshChatTexts() {
    var dict = I18N[currentLang];
    // v3.25：先把动画落定再重建 DOM —— 正在吐的那条补齐、没出场的写进记录，
    // 否则重建后 rAF 还握着一个已经脱离文档的气泡，那一条就永远不显示了。
    stopChatSeq();
    if (chatTitleEl) chatTitleEl.textContent = dict["chat.title"] || "";
    if (chatCloseEl) chatCloseEl.setAttribute("aria-label", dict["chat.close"] || "close");
    if (chatBodyEl) chatBodyEl.setAttribute("aria-label", dict["chat.logAria"] || "");
    if (chatInputEl) {
      chatInputEl.setAttribute("aria-label", dict["chat.inputAria"] || "");
      chatInputEl.setAttribute("placeholder", dict["chat.ph"] || "");
    }
    if (chatSendEl) chatSendEl.textContent = dict["chat.send"] || "";
    buildQuickAsks();
    renderChatLog();
  }

  /* 开窗。enter = "1" / "2" ⇒ 进来就替访客自动问一句项目问题
     （项目卡的「点击这里查看详情」走这条路）；其余（问候 / 发呆气泡的
     「进入对话」）只开窗。首次进入先让主人自我介绍一句。
     v3.25：开场这几句也一律走"省略号 → 停一拍 → 逐字说"（排队播），
     免得同一扇窗里有的字会蹦、有的字是整段砸下来。 */
  function openChat(enter) {
    if (!chatEl) return;
    chatLastFocus = document.activeElement;
    chatEl.hidden = false;
    document.body.classList.add("px-chat-open");   // 锁住背后的页面滚动
    refreshChatTexts();
    var seq = [];
    if (!chatGreeted) {
      chatGreeted = true;
      seq.push({ from: "me", key: "chat.hello" });
    }
    if (enter === "1" || enter === "2") {
      var askKey = "chat.ask" + enter;
      // 上一条"访客说的话"就是这个同一个问题 ⇒ 不重复问（连点两次卡片）
      var lastThem = null;
      for (var i = CHAT_LOG.length - 1; i >= 0; i--) {
        if (CHAT_LOG[i].from === "them") { lastThem = CHAT_LOG[i]; break; }
      }
      if (!(lastThem && lastThem.key === askKey)) {
        seq.push({ from: "them", key: askKey });
        seq.push({ from: "me", key: "chat.a.proj" + enter });
      }
    }
    chatEnqueue(seq);
    if (chatWindowEl && chatWindowEl.focus) chatWindowEl.focus();
    PixelSFX.play("pop");
  }

  function closeChat() {
    if (!chatEl || chatEl.hidden) return;
    // v3.25：正在说的补齐、排队还没出场的直接写进记录（下次打开是完整对话）
    stopChatSeq();
    chatEl.hidden = true;
    document.body.classList.remove("px-chat-open");
    if (chatLastFocus && chatLastFocus.focus) chatLastFocus.focus();
  }

  function initChat() {
    if (!chatEl) return;
    if (chatCloseEl) chatCloseEl.addEventListener("click", closeChat);
    if (chatBackdropEl) chatBackdropEl.addEventListener("click", closeChat);
    // 回车和点「发送」都走 submit，键盘用户不用摸鼠标。
    // 音效在这里响（发送按钮故意不带 data-sfx：走全局委托会和这里重复一声）。
    if (chatFormEl) chatFormEl.addEventListener("submit", function (e) {
      e.preventDefault();
      askChat(chatInputEl ? chatInputEl.value : "");
      if (chatInputEl) { chatInputEl.value = ""; chatInputEl.focus(); }
      PixelSFX.play("pop");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !chatEl.hidden) closeChat();
    });
  }

  /* ============================================================
   * 11-C. 卡片被挡住时提示（v3.23 需求①）
   *       用户裁定：卡片与「桌面 / 桌上三件物品」的矩形【相交】就算被遮挡，
   *       不设面积阈值；猫、吊灯、遮挡层都不算。
   *       提示走同一个对话栈（和别的对话同规则：5 秒 / 最多 2 条），
   *       但"不重复说"：同一次遮挡只说一次，卡片先脱离遮挡、再次被挡才重说。
   *       桌面是整张剪影图（.px-table 铺满全屏 + mask），所以它的矩形要按
   *       图片在底图里的位置算：底图原点 --px-ox/--px-oy，桌面素材贴在
   *       底图 y = 686 处（648x259），--px-scene-slack 抵掉场景上移量。
   * ============================================================ */
  var OCCLUDED_KEY = "hint.occluded";
  var OCCLUDED_PROPS = [".px-prop--oillamp", ".px-prop--cup", ".px-prop--apples"];
  var occShown = new Map();    // 卡片 -> 本轮遮挡是否已经说过
  var occRaf = 0;

  function occRects() {
    var rects = [];
    var rs = getComputedStyle(document.documentElement);
    var table = document.querySelector(".px-table");
    var scale = parseFloat(rs.getPropertyValue("--px-scale"));
    var ox = parseFloat(rs.getPropertyValue("--px-ox"));
    var oy = parseFloat(rs.getPropertyValue("--px-oy"));
    var slack = parseFloat(rs.getPropertyValue("--px-scene-slack")) || 0;
    // .px-table 自己铺满视口、真实形状在 mask 里，所以只有在拿得到
    // 场景变换参数时才按素材几何算；窄屏它是 display:none（rect 为 0）。
    if (table && scale > 0 && !isNaN(ox) && !isNaN(oy)) {
      var tr = table.getBoundingClientRect();
      if (tr.width > 0) {
        var top = tr.top + oy + slack + 686 * scale;
        rects.push({
          left: tr.left + ox,
          top: top,
          right: tr.left + ox + 648 * scale,
          bottom: top + 259 * scale
        });
      }
    }
    OCCLUDED_PROPS.forEach(function (sel) {
      var el = document.querySelector(sel);
      if (!el) return;
      var cs = getComputedStyle(el);
      if (cs.display === "none" || cs.visibility === "hidden") return;
      var r = el.getBoundingClientRect();
      if (r.width <= 0 || r.height <= 0) return;
      rects.push({ left: r.left, top: r.top, right: r.right, bottom: r.bottom });
    });
    return rects;
  }

  function rectsHit(a, b) {
    return a.left < b.right && b.left < a.right &&
           a.top < b.bottom && b.top < a.bottom;
  }

  function checkOcclusion() {
    var rects = occRects();
    var cards = document.querySelectorAll(".card");
    Array.prototype.forEach.call(cards, function (card) {
      var r = card.getBoundingClientRect();
      var inView = r.width > 0 && r.bottom > 0 && r.top < window.innerHeight;
      var hit = false;
      if (inView && rects.length) {
        for (var i = 0; i < rects.length; i++) {
          if (rectsHit(r, rects[i])) { hit = true; break; }
        }
      }
      if (!hit) { occShown.delete(card); return; }   // 脱离遮挡 → 允许下次再说
      if (occShown.get(card)) return;                // 这一轮遮挡已经说过了
      occShown.set(card, true);
      ensureAvatarVisible();
      showSpeech(OCCLUDED_KEY);
    });
  }

  function scheduleOcclusionCheck() {
    if (occRaf) return;
    occRaf = window.requestAnimationFrame(function () {
      occRaf = 0;
      checkOcclusion();
    });
  }

  function initOcclusionHint() {
    window.addEventListener("scroll", scheduleOcclusionCheck, { passive: true });
    window.addEventListener("resize", scheduleOcclusionCheck);
    scheduleOcclusionCheck();
  }

  /* ============================================================
   * 12. 鼠标悬浮特定信息 → 头像说话（v3.23 改走对话栈）
   *     进入 = 压一条气泡并暂停倒计时；离开 = 开始 5 秒倒计时（不立刻消失）。
   *     两个项目卡的气泡带「点击这里查看详情」，整块可点；
   *     卡片本身也支持键盘（Enter / 空格）直接开详情窗。
   * ============================================================ */
  var hoverSpeech = [
    { sel: 'a[href^="mailto:"]', key: "hover.email" },
    { sel: 'a[href^="tel:"]', key: "hover.phone" },
    { sel: "#projects .project-card:nth-child(1)", key: "hover.proj1", chat: "1" },
    { sel: "#projects .project-card:nth-child(2)", key: "hover.proj2", chat: "2" },
    { sel: "#projects .project-card:nth-child(3)", key: "hover.proj3" },
    { sel: ".submit-btn", key: "hover.submit" }
  ];
  hoverSpeech.forEach(function (item) {
    var el = document.querySelector(item.sel);
    if (!el) return;
    el.addEventListener("mouseenter", function () {
      ensureAvatarVisible();
      showSpeech(item.key, {
        owner: el,
        detail: !!item.chat,
        chat: item.chat
      });
      pauseSpeech(findSpeech(item.key));
    });
    el.addEventListener("mouseleave", function () {
      resumeSpeech(findSpeech(item.key));
    });
    if (item.chat) {
      el.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openChat(item.chat);
        }
      });
    }
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
        showSpeech("speakIdle", { enter: true });
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
   * 14-B. 背景音乐（v3.6 用户第⑤条）
   *   需求原文："增加背景音乐，进入网站自动播放，可以关闭；关闭的按钮
   *             在右上角那个音效按钮的下面，也是像素风、AI 画；
   *             要告诉我音频文件放在哪个位置；手机端按钮在左下角猫猫上面。"
   *
   *   实现要点（为什么这么写）：
   *   ① 音频文件走 HTML 里的 <audio id="bgmAudio"> 三个 <source>，
   *      文件统一放 assets/bgm/（bgm.mp3 首选，.ogg/.m4a 是退路）。
   *      JS 不硬编码路径 —— 换歌只是替换文件，不用改代码。
   *   ② 自动播放一定会被浏览器拦（Chrome/Safari 的策略：没跟页面
   *      交互过不许出声）。所以 play() 失败 → 提示一次"点一下开始播放音乐"
   *      + 挂一次性 pointerdown，用户随手一点就接着放。
   *   ③ 音量从 0 淡入 1.5s（BGM_VOLUME = 0.4）：背景音乐是"底"、音效是"面"，
   *      一上来满音量会盖掉点击音效。想改音量就改这个常量。
   *   ④ 读不出音频（没放文件 / 格式不支持）**不报错、不弹提示**，
   *      只 console.info 一句 + 把按钮隐藏 —— 没放歌时页面必须一切照常。
   *   ⑤ ?bgm=<url> 是调试口：临时换别的音源试听，不写就走 assets/bgm/。
   * ============================================================ */
  function initBgmToggle() {
    var bgmAudio = document.getElementById("bgmAudio");
    var bgmToggleEl = document.getElementById("bgmToggle");
    if (!bgmAudio || !bgmToggleEl) return;

    var BGM_VOLUME = 0.4;     // 目标音量（用户嫌吵/嫌小就改这一个数）
    var FADE_IN_MS = 1500;
    var FADE_OUT_MS = 400;
    var enabled = true;
    var ready = false;        // 读出元数据 = 文件真的在
    var missing = false;      // 三个音源全读不出来
    var hinted = false;       // 自动播放被拦的提示只弹一次
    var armed = false;        // 是否已挂好"等用户点一下"的监听
    var hiddenPause = false;  // 这次暂停是"切走标签页"造成的
    var fadeTimer = null;

    /* ?bgm=<url> 调试口：要把 <audio> 里那三个 <source> 先清掉再加一个，
       否则浏览器会继续按第一个能用的 source 播。 */
    var q = /[?&]bgm=([^&#]+)/.exec(window.location.search);
    if (q) {
      while (bgmAudio.firstChild) bgmAudio.removeChild(bgmAudio.firstChild);
      var alt = document.createElement("source");
      alt.src = decodeURIComponent(q[1]);
      bgmAudio.appendChild(alt);
    }

    function markMissing(why) {
      if (missing) return;
      missing = true;
      console.info("[bgm] 背景音乐未启用：" + why +
        "。把音频放到 assets/bgm/bgm.mp3 即可（见 assets/bgm/README.txt），" +
        "不放也不影响其它任何功能。");
      bgmToggleEl.classList.add("is-missing");
      if (fadeTimer) { clearInterval(fadeTimer); fadeTimer = null; }
    }

    function fadeTo(target, ms, done) {
      if (fadeTimer) { clearInterval(fadeTimer); fadeTimer = null; }
      if (!ms) {
        try { bgmAudio.volume = target; } catch (err) { /* 忽略 */ }
        if (done) done();
        return;
      }
      var from = bgmAudio.volume;
      var t0 = Date.now();
      fadeTimer = setInterval(function () {
        var k = Math.min(1, (Date.now() - t0) / ms);
        try { bgmAudio.volume = Math.max(0, Math.min(1, from + (target - from) * k)); }
        catch (err) { /* 个别浏览器读 volume 会抛，忽略 */ }
        if (k >= 1) {
          clearInterval(fadeTimer);
          fadeTimer = null;
          if (done) done();
        }
      }, 60);
    }

    /* 自动播放被拦时提示 + 等下一个手势。1.2 秒后再判断一次：
       音源本身读不出来（networkState 3 = NO_SOURCE）就当作"没放文件"直接
       降级 —— 那时提示"点一下播放"是骗人的，用户点了也不会响。 */
    function hintTapSoon() {
      window.setTimeout(function () {
        /* 这里千万别拿 ready 当挡箭牌：文件读得出来（ready=true）恰恰是"被自动播放
           策略拦住"最典型的场景，那才是最该提示的时候。第一轮验收探针实测到
           "readyState=4 却停在 paused、提示一直不弹"，就是旧写法把 ready 也算成
           "不用提示"了。真正要跳过的是：文件根本没放（missing）、已经在响、已经提示过。 */
        if (missing || hinted) return;
        if (!bgmAudio.paused) return;
        if (bgmAudio.networkState === 3 || bgmAudio.error) {
          markMissing("三个候选音源都读不出来");
          return;
        }
        hinted = true;
        showToast("ui.bgmTapHint");
      }, 1200);
    }

    function armUnlock() {
      if (armed || missing) return;
      armed = true;
      var onGesture = function () {
        window.removeEventListener("pointerdown", onGesture);
        armed = false;
        start();
      };
      window.addEventListener("pointerdown", onGesture);
    }

    function start() {
      if (missing || !enabled) return;
      /* 后台标签页里浏览器同样不许出声，而且这时的提示用户也看不见；
         等 visibilitychange 切回前台再试（见下面的监听）。 */
      if (document.hidden) { armUnlock(); return; }
      try { bgmAudio.volume = 0; } catch (err) { /* 忽略 */ }
      var p = null;
      try { p = bgmAudio.play(); } catch (err) { p = null; }
      if (p && p.then) {
        p.then(function () {
          fadeTo(BGM_VOLUME, FADE_IN_MS);
        }).catch(function () {
          armUnlock();
          hintTapSoon();
        });
      } else {
        // 老浏览器 play() 不返回 Promise：直接淡入，同时留好手势退路
        fadeTo(BGM_VOLUME, FADE_IN_MS);
        armUnlock();
      }
    }

    function setEnabled(next) {
      enabled = !!next;
      try { localStorage.setItem("px_bgm", enabled ? "1" : "0"); } catch (err) { /* 忽略 */ }
      bgmToggleEl.setAttribute("aria-pressed", enabled ? "true" : "false");
      if (missing) return;
      if (enabled) start();
      else fadeTo(0, FADE_OUT_MS, function () { bgmAudio.pause(); });
    }

    bgmToggleEl.addEventListener("click", function () {
      setEnabled(!enabled);
    });

    // 读出元数据 = 文件真的在。三张音源里任意一张能用都算 ready。
    ["loadedmetadata", "canplay", "canplaythrough"].forEach(function (ev) {
      bgmAudio.addEventListener(ev, function () {
        if (ready) return;
        ready = true;
        bgmToggleEl.classList.remove("is-missing");
      });
    });

    // 三个 <source> 全失败时，浏览器才在 <audio> 上派 error
    bgmAudio.addEventListener("error", function () {
      if (bgmAudio.networkState === 3) markMissing("三个候选音源都读不出来");
    });

    /* 快速降级：三张音源全 404 时 networkState 立刻就是 3，不用白等 6 秒。
       （实测：这种"没有音源"的情形下 play() 的 promise 一直是 pending，
       既不走 then 也不走 catch，所以 hintTapSoon 那条路指望不上。） */
    window.setTimeout(function () {
      if (!ready && (bgmAudio.networkState === 3 || bgmAudio.error)) {
        markMissing("三个候选音源都读不出来（2.5s 快速判定）");
      }
    }, 2500);

    /* 兜底：6 秒还没读出任何元数据就按"没放文件"处理。
       不直接信 error 事件 —— <source> 失败时 Chrome 只在 <source> 上派 error，
       <audio> 上的监听收不到，靠 readyState 判断更实在。 */
    window.setTimeout(function () {
      if (!ready && bgmAudio.readyState === 0) {
        markMissing("assets/bgm/ 下 6 秒内没读出可用音频");
      }
    }, 6000);

    /* 切走标签页先停、切回来续上：用户开了音乐却切走后，
       与其让浏览器把它压成静音，不如主动停掉，回来接着放，行为可预期。 */
    document.addEventListener("visibilitychange", function () {
      if (missing) return;
      if (document.hidden) {
        if (!bgmAudio.paused) { hiddenPause = true; bgmAudio.pause(); }
      } else if (hiddenPause) {
        hiddenPause = false;
        if (enabled) start();
      } else if (enabled && bgmAudio.paused && ready) {
        // 首次是在后台标签页里打开的：切回前台补一次尝试
        start();
      }
    });

    // 默认开（用户第⑤条：进站自动播放）；存过 "0" 就一直保持关
    var saved = null;
    try { saved = localStorage.getItem("px_bgm"); } catch (err) { saved = null; }
    enabled = saved !== "0";
    bgmToggleEl.setAttribute("aria-pressed", enabled ? "true" : "false");
    if (enabled) start();
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
    // v3.6（用户第⑥条）：单次上限减半 —— 原来连点 5 下是 5 * 3 = 15 颗，
    // 现在封顶 CLICK_BURST_MAX = 8（15 / 2 向上取整），同屏总量 MAX = 96 不变。
    // 系数同时从 3 收到 1.6：连点 2/3/4/5 下依次 3/5/6/8 颗，既保留
    // "越点越多"的手感，又不会连点两下就顶到上限（那样 2~5 下看着一样多）。
    var CLICK_BURST_MAX = 8;
    var CLICK_BURST_RATE = 1.6;
    var combo = 0;
    var comboTimer = null;
    document.addEventListener("click", function (e) {
      var t = e.target;
      if (t && t.closest && t.closest("input, textarea")) return;
      combo = Math.min(combo + 1, 5);
      clearTimeout(comboTimer);
      comboTimer = setTimeout(function () { combo = 0; }, 500);
      if (combo > 1) {
        PixelParticles.burst(e.clientX, e.clientY,
          Math.min(CLICK_BURST_MAX, Math.round(combo * CLICK_BURST_RATE)));
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
  /* v3.4：NARROW_Q / isNarrow() 搬到了第 10 节 —— layoutSigns 在第 10 节末尾
     就要跑一次，那时这里的赋值还没执行（var 只提升声明）→ 窄屏首帧会静默
     按桌面规则布局（吊牌挂在 72、拖拽守卫失效）。函数名与语义都不变。 */

  /* v3.3（用户裁定）：窄屏背景左右平移
     · 屏幕左右各一枚箭头（.px-scene-arrow，见 CSS），点一下背景平移一段；
     · 步长按当前取景自适应，不是固定值：往右看（底图右缘贴屏幕右缘）
       把那一侧的余量三等分 —— 用户要的是"三下到头"。
       默认取景偏右，所以左边没有余量、也就没有"往左三档"这回事。
     · 平移只改 --px-ox：底图和吃底图坐标的元素（桌上三件物品 / 壁炉火 /
       窗边余晖 / v3.5 起的窗户）一起走；窄屏的猫、小人、吊灯是脱钩的
       固定件，不跟着走。
     v3.5（用户裁定②）：左侧那枚箭头恢复，但**边界口径不变** ——
     初始取景就是左边界（0 档），左箭头在这一档灰掉；panStep 仍只有 0..3。
     也就是说 v3.4「删掉左箭头」与 v3.5「左箭头灰着」表达的是同一件事，
     后者只多了可见的边界提示，定位算式一个数都没改。 */
  var PAN_STEPS = 3;    // 往右三档到边界（往左没有档位：0 档 = 左边界 = 初始取景）
  var panStep = 0;      // 0..3：0 = 默认取景 = 最左档（左边界），正 = 往右看
  var panUI = null;     // {sync}，由 initScenePan 填；layoutScene 每次重算后调它

  /* isNarrow() 定义见第 10 节开头（v3.4 从这儿搬走的，理由见上面那条注释） */

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
       桌面端（>1024px）的居中取景一个像素都不动。 */
    if (isNarrow()) {
      var cam = vw / 2 - DESK_ART_RIGHT * scale;   // 默认取景（v2.14e 那一档）
      /* 底图能走的范围：minOx（底图右缘贴屏幕右缘）~ 0（底图左缘贴屏幕左缘）。
         底图比视口窄时 minOx 是正数，夹到 0 —— 极端比例下退化成不可平移。 */
      var minOx = Math.min(vw - SCENE_IMG_W * scale, 0);
      var stepRight = (cam - minOx) / PAN_STEPS;   // 往右看：ox 变小
      /* v3.4（用户裁定）：取消「往左」这条路径。
         旧口径还有一条「往左」的步长（(0 - cam) / PAN_STEPS，≈155px/档），
         三档之后 ox 推到 0 = 底图左缘贴屏幕左缘，用户不要这个视角。
         v3.5（用户裁定②）：左侧箭头恢复了，但这条路径**不恢复** ——
         用户说的"开始的位置当作最左边"就是这件事：默认取景（cam）
         永远是最左那一档，panStep 只有 0..3。 */
      ox = cam - panStep * stepRight;
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
       ② 两枚「左右看」箭头的状态跟着当前档位走（v3.5 起又是两枚） */
    var wrap = document.getElementById("floatAvatarWrap");
    if (wrap) wrap.classList.toggle("is-fixed", isNarrow());
    if (panUI) panUI.sync();
  }

  /* v3.5（用户裁定②）：左右各一枚箭头，两端到边界就灰掉、不循环。
     用户口径：「不是删掉左箭头，而是开始的那个位置就当作最左边，往左的
     箭头是灰的，用户往右边走的时候才能再往左 —— 重新规定边界而已」。
     于是：
     ① 左侧那枚按钮在 index.html 恢复（#pxScenePrev，CSS 用 scaleX(-1)
        镜像复用同一张素材）；
     ② panStep 仍是 0..3 —— 0 = 默认取景 = 最左档，"初始取景 = 左边界"
        这个口径本身没改，改的是"不能往左"由箭头灰掉来表达，而不是把按钮删掉；
     ③ 走满不再回环：v3.4 那把"右端再点一下回默认取景"按裁定撤销，
        两端都靠 .is-end 表达（不挂真 disabled —— 真 disabled 会把 click
        与焦点语义一起吞掉）。
     桌面端两枚都是 display:none，状态照样同步，免得窗口窄↔宽来回拖时对不上。 */
  function initScenePan() {
    var prev = document.getElementById("pxScenePrev");
    var next = document.getElementById("pxSceneNext");
    if (!next) return;

    function sync() {
      var narrow = isNarrow();
      var atStart = narrow && panStep <= 0;
      var atEnd = narrow && panStep >= PAN_STEPS;
      if (prev) {
        prev.disabled = !narrow;
        prev.classList.toggle("is-end", atStart);
        prev.setAttribute("aria-disabled", atStart ? "true" : "false");
      }
      next.disabled = !narrow;
      next.classList.toggle("is-end", atEnd);
      next.setAttribute("aria-disabled", atEnd ? "true" : "false");
    }

    function go(delta) {
      if (!isNarrow()) return;
      var t = panStep + delta;
      if (t < 0) t = 0;                           // 最左档 = 初始取景，不能更左
      if (t > PAN_STEPS) t = PAN_STEPS;           // 最右档 = 底图右缘，不能更右
      if (t === panStep) return;
      panStep = t;
      layoutScene();   // 内部会回调 panUI.sync()
    }

    if (prev) prev.addEventListener("click", function () { go(-1); });
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

    // v1.8 景深：房间（远景）几乎不动所以显得远。
    // v3.21 需求④：近景层（干草束/吊灯）整层删除，这一路速率
    // （RATE_FG / MAX_FG）与 --px-fg-y 的写入随之撤除；
    // 房间视差与卡片跟随不受影响。
    var RATE_ROOM = 0.025;   // 远景房间
    var MAX_ROOM = 44;       // JS 已保证背景图上下各留 >=54px 余量，不会露边
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
   * 16-C. v3.6（用户第①条）系统"字体放大 / 显示大小"下的兜底
   *   手机端的"大量错位"有两个来源：
   *   ① 浏览器把 12px 的像素字自动放大（15.6 / 18.2 这种非 12 的整倍数）
   *      ⇒ 字糊 + 照 12px 网格钉死的像素件被撑破。
   *      → 结构件一律 text-size-adjust: 100%（css 的 html 那条 +
   *        v3.6 段里给长正文开的 auto 例外）。
   *   ② 倍率没法穷举：Android 的"字体大小 / 显示大小"各有好几档，
   *      再叠浏览器缩放、再叠用户自己改的默认字号 —— 断点写不完。
   *      → 这里改成"量"：量到横向溢出就挂 .is-fit 收紧（CSS 里那条），
   *        并在控制台留下一行"谁溢出、溢出多少"，下次照着补断点就行。
   *   只在视口尺寸变了 / 像素字加载完成后量，不在滚动过程中量。
   * ============================================================ */
  function describeEl(el) {
    if (!el || !el.tagName) return "(未知元素)";
    var s = el.tagName.toLowerCase();
    if (el.id) s += "#" + el.id;
    if (typeof el.className === "string" && el.className.trim()) {
      s += "." + el.className.trim().split(/\s+/).slice(0, 2).join(".");
    }
    return s;
  }

  function fitChrome() {
    if (!document.body) return;
    var de = document.documentElement;
    var vw = de.clientWidth;

    /* ① 先摘掉上一轮的降档标记 —— 已经收窄过会掩盖这一轮的真实宽度，
          不摘就会"一旦溢出、永远溢出"。 */
    var marks = document.querySelectorAll(".is-fit");
    for (var i = 0; i < marks.length; i++) marks[i].classList.remove("is-fit");

    /* ② 逐件量：像素件里 scrollWidth > clientWidth 就是"字把框撑破了" */
    var targets = document.querySelectorAll(
      ".mobile-brand, .sfx-btn, .bgm-btn, .hero-name, .px-sign-face"
    );
    for (var j = 0; j < targets.length; j++) {
      var el = targets[j];
      if (el.scrollWidth > el.clientWidth + 1) {
        el.classList.add("is-fit");
        console.info("[v3.6/fit] 横向溢出已降档：" + describeEl(el) +
          "（scrollWidth " + el.scrollWidth + " > clientWidth " + el.clientWidth + "）");
      }
    }

    /* ③ 整页横向溢出（手机上最直观的"错位"就是画面能左右晃）：
          报一次，并指出最右的越界元素，省得下次靠肉眼找。 */
    if (de.scrollWidth > vw + 1) {
      var worst = null;
      var worstRight = vw;
      var all = document.body.querySelectorAll("*");
      for (var k = 0; k < all.length; k++) {
        var node = all[k];
        if (node.classList && node.classList.contains("is-fit")) continue;
        var r = node.getBoundingClientRect();
        if (r.width < 2 || r.height < 2) continue;
        if (r.right > worstRight) { worstRight = r.right; worst = node; }
      }
      console.warn("[v3.6/fit] 页面横向溢出：" + de.scrollWidth + " > " + vw +
        (worst ? "；最右越界元素 " + describeEl(worst) +
          " 右缘 " + Math.round(worstRight) : ""));
    }
  }

  function initFitChrome() {
    var timerId = null;
    var schedule = function () {
      if (timerId) clearTimeout(timerId);
      timerId = setTimeout(function () {
        timerId = null;
        fitChrome();
      }, 220);
    };
    window.addEventListener("resize", schedule, { passive: true });
    window.addEventListener("orientationchange", schedule, { passive: true });
    /* 像素字是 woff2：首帧量到的是备用字体的宽度（不是最终版式）⇒
       等字体就绪再量一次。document.fonts 在 Safari 10+ / Chrome 35+ 都有。 */
    if (document.fonts && document.fonts.ready && document.fonts.ready.then) {
      document.fonts.ready.then(function () { fitChrome(); });
    }
    fitChrome();
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

    /* v1.9：沿指针轨迹跟随 ----------
       v1.8 是"光标左下角固定偏移"(mx - 0.72W)，所以猫永远贴在光标旁边。
       用户要的是"跟在指针走过的轨迹后面"：把光标经过的点记成一条路径，
       再沿路径从末端往回量 TRAIL_GAP 的距离，猫的目标就是那个点 ——
       猫走的是光标刚走过的路，始终落在后面一段，而不是挂在光标身上。
       v3.6（用户第④条）：电脑端的猫缩到 2/3（CSS 54x60 -> 36x40，见
       .px-cat），个头小了还按 92px 落在后面就显得"离指针很远"，
       所以跟随距离一起收到 74（92 的 0.8 倍左右；再小会贴在光标下）。
       TRAIL_KEEP 是轨迹保留长度，与猫的大小无关，不动。 */
    var trail = [];              // [{x, y}]，屏幕坐标
    var TRAIL_GAP = 74;          // 猫落在光标后面多远（沿路径长度，px）
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
    initBgmToggle();   // v3.6：背景音乐开关（14-B 节，见那里的长注释）
    initCardLift();
    initTheme();
    initFx();
    initScenePan();   // v3.4：先接上那枚「往右看」箭头，再让 initParallax 首次 layoutScene
    initParallax();
    initFitChrome();   // v3.6：系统字体放大兜底（16-C 节）
    initLamp();
    initWeather();
    initChat();           // v3.23：聊天窗三关闭（× / 遮罩 / Esc）
    initOcclusionHint();  // v3.23：卡片被桌面或桌上物品挡住时的提示
    CatFollow.start();

    // 首次交互解锁音频上下文（浏览器自动播放策略）
    window.addEventListener("pointerdown", function unlock() {
      PixelSFX.unlock();
      window.removeEventListener("pointerdown", unlock);
    }, { once: true });
  }

  init();
})();