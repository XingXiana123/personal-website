/* ============================================================
 * 反馈入库配置（v2.15）
 * ------------------------------------------------------------
 * 这里只放两样东西：Supabase 项目地址 + anon public key。
 * 两者都是「公开也无所谓」的信息 —— 真正的安全防线建在数据库那边：
 * RLS 策略让匿名角色只能新增（INSERT），读不到任何一条反馈。
 * 建表与策略语句见 docs/supabase-setup.md。
 *
 * 千万不要把下面三样写到这里（前端文件，任何人右键就能看到）：
 *   service_role key / 数据库密码 / JWT Secret
 * 它们是后端专用凭证，一旦进了前端，等于把整个数据库交给所有人。
 *
 * 两个值留空会怎样：
 *   反馈照常能提交，只是走「本地暂存 + 联网后自动补发」这条路，
 *   页面不报错、不弹失败提示。等你把下面两行填上，之前暂存的反馈
 *   会在访客下次打开页面时自动补写进数据库。
 * ============================================================ */
window.FEEDBACK_CONFIG = {
  /* 站点版本号：每次迭代同步更新，提交反馈时自动带上（入库到 site_version 列）。
     访客只会看到页面，不会看到这个常量。 */
  siteVersion: "v3.4",

  /* Supabase 项目地址，形如 https://xxxxxxxxxxxx.supabase.co（结尾不要带斜杠） */
  supabaseUrl: "https://maglfnvwlzbjiezqdarn.supabase.co/rest/v1/",

  /* Supabase 的 anon / publishable key（新版界面叫 Publishable key，作用相同） */
  supabaseAnonKey: "sb_publishable_kpdVMRjca5GsCEpOx1isMQ_SSPJv0-S",

  /* 数据表名，与 docs/supabase-setup.md 里建的表保持一致 */
  table: "feedback",

  /* 单次请求超时（毫秒）：超时按「网络不通」处理，进待发队列，
     避免提交按钮无限转圈。 */
  timeoutMs: 12000,

  /* 总开关：false = 完全不联网，只走本地暂存 */
  enabled: true
};