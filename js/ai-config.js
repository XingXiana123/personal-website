/* ============================================================
 * AI 数字分身前端配置（v4.0，2026-11）
 * ------------------------------------------------------------
 * 这里只放「公开也没关系」的信息：
 *   - Supabase Edge Function 的地址
 *   - Supabase anon / publishable key
 *
 * 真正敏感的 DeepSeek API Key 只保存在 Supabase Edge Function 的
 * Secrets 里，绝不会进入这个文件、GitHub 仓库或浏览器。
 *
 * 为什么可以有 anon key：
 *   anon key 本来就是设计给浏览器用的，它只代表「匿名访客」；
 *   真正的权限由 RLS 和 Edge Function 控制。这个函数只做聊天转发，
 *   不读数据库、不返回任何访客数据。
 * ============================================================ */
window.AI_TWIN_CONFIG = {
  /* 总开关：false = 不请求模型，直接走本地兜底回答 */
  enabled: true,

  /* Supabase Edge Function 地址（结尾不要带斜杠） */
  endpoint: "https://maglfnvwlzbjiezqdarn.supabase.co/functions/v1/chat",

  /* 复用 feedback-config.js 里的 publishable key；若它没加载成功，
     Edge Function 仍然可以匿名调用（verify_jwt = false），只是少了网关
     的 apikey 头。 */
  anonKey: (window.FEEDBACK_CONFIG && window.FEEDBACK_CONFIG.supabaseAnonKey) || "",

  /* 单次请求超时（毫秒）。DeepSeek 首字通常 1~3 秒，留足冷启动时间。 */
  timeoutMs: 45000,

  /* 最多携带多少条历史消息（user + assistant 合计） */
  maxHistory: 10,

  /* UI 上展示的模型名；具体型号以 Supabase 环境变量 DEEPSEEK_MODEL 为准 */
  modelLabel: "DeepSeek"
};
