export const SITE_CONFIG = {
  name: '梯子机场',
  brandEn: 'TiziJichang',
  domain: 'tizijichang.cc',
  url: 'https://tizijichang.cc',
  tagline: '2026 专业梯子机场评测与网络可观测性实验室',
  title: '梯子机场 (tizijichang.cc) — 2026 高性价比专线机场推荐、晚高峰测速与客户端指南',
  description:
    '梯子机场 (tizijichang.cc) 收录 42 家主流 IEPL/IPLC 专线机场与网络代理服务，提供非晚高峰与晚高峰延迟带宽实测、ChatGPT/Claude/Netflix 流媒体解锁矩阵及全平台客户端配置教程。',
  author: {
    name: '梯子机场评测实验室',
    role: '网络可观测性与专线评测团队',
    avatar: '/assets/author-avatar.png',
  },
  authorRole: '网络可观测性与专线评测团队',
  authorAvatar: '/assets/author-avatar.png',
  ogImage: '/assets/og-card-v8.png',
  ogImageAlt: '梯子机场 (tizijichang.cc) — 2026 专线机场评测与客户端导航',
  faviconSvg: '/assets/favicon.svg',
  faviconPng: '/assets/favicon.png',
  appleTouchIcon: '/assets/logo.png',
  logoSvg: '/assets/logo.svg',
  logoPng: '/assets/logo.png',
  brandMask: '/assets/brand-mask.svg',
  fontPreload: '/assets/jbm.woff2',
  storageKeys: {
    palette: 'site-palette',
    themeHintSeen: 'site-theme-hint-seen',
    docsLang: 'site-docs-lang',
  },
} as const;

export const SEARCH_VERIFICATION = {
  // Google Search Console (例如: "google-site-verification=xxx")
  google: '',
  // Bing Webmaster Tools (例如: "xxx")
  bing: '',
  // 百度搜索资源平台 (例如: "codeva-xxx")
  baidu: '',
  // 神马站长平台 (例如: "shenma-site-verification=xxx")
  shenma: '',
} as const;
