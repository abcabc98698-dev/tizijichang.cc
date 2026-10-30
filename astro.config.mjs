import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tizijichang.cc',
  output: 'static',
  trailingSlash: 'always',
  redirects: {
    '/ja/': '/docs/',
    '/ja/docs/': '/docs/',
    '/zh-cn/': '/docs/',
    '/zh-cn/docs/': '/docs/',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/404/') && !page.includes('/blog/author/'),
    }),
    starlight({
      title: '梯子机场百科 (tizijichang.cc)',
      description:
        '2026 梯子机场选型百科、IEPL/IPLC 专线科普、VLESS/Hysteria2 协议解析与 6 大平台客户端配置教程。',
      favicon: '/assets/favicon.png',
      defaultLocale: 'root',
      locales: {
        root: { label: '简体中文', lang: 'zh-CN' },
      },
      components: {
        Banner: './src/components/Banner.astro',
        Header: './src/components/Header.astro',
        Sidebar: './src/components/Sidebar.astro',
        SiteTitle: './src/components/SiteTitle.astro',
        Footer: './src/components/Footer.astro',
      },
      customCss: ['./src/styles/starlight.css'],
      head: [
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: 'https://tizijichang.cc/assets/og-card-v8.png' },
        },
        { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
        { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image:alt',
            content: '梯子机场 (tizijichang.cc) — 2026 梯子机场推荐与实测中台',
          },
        },
        {
          tag: 'meta',
          attrs: { name: 'twitter:image', content: 'https://tizijichang.cc/assets/og-card-v8.png' },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:image:alt',
            content: '梯子机场 (tizijichang.cc) — 2026 梯子机场推荐与实测中台',
          },
        },
      ],
      lastUpdated: true,
      disable404Route: true,
      sidebar: [
        {
          label: '新手选型百科',
          items: [
            { label: '百科全景速查', slug: 'docs' },
            { label: '机场选购与避坑指南', slug: 'docs/airport-buying-guide' },
            { label: 'IEPL/IPLC 专线与中转科普', slug: 'docs/iepl-vs-iplc' },
            { label: '倍率计算与流量计费说明', slug: 'docs/billing-and-rates' },
          ],
        },
        {
          label: '客户端配置教程',
          items: [
            { label: 'Windows 配置 (Clash / v2rayN)', slug: 'docs/windows-setup' },
            { label: 'macOS 配置 (Clash Verge Rev)', slug: 'docs/macos-setup' },
            { label: 'iOS 小火箭与 Shadowrocket', slug: 'docs/ios-setup' },
            { label: 'Android 安卓配置 (CMFA / v2rayNG)', slug: 'docs/android-setup' },
            { label: 'OpenWrt 软路由透明代理', slug: 'docs/openwrt-router' },
          ],
        },
        {
          label: '协议与网络进阶',
          items: [
            { label: '代理协议全景解析 (SS / VLESS / Hy2)', slug: 'docs/protocols-guide' },
            { label: 'ChatGPT 与 4K 流媒体解锁实战', slug: 'docs/ai-and-streaming-unlock' },
            { label: '分流规则与 DNS 防污染防泄漏', slug: 'docs/dns-and-rules' },
          ],
        },
        {
          label: '核心业务与专题栏目',
          items: [
            { label: '🏆 2026 机场推荐大全', link: '/jichang/' },
            { label: '👑 首选推荐 · 光速云', link: '/brands/guangsuyun/' },
            { label: '🛡️ VPN 与专线对比', link: '/vpn/' },
            { label: '⚡ Clash 配置中心', link: '/clash/' },
            { label: '🌐 全球节点测速', link: '/nodes/' },
            { label: '🪜 梯子选型避坑', link: '/tizi/' },
            { label: '🎁 免费与平价方案', link: '/free/' },
            { label: '📖 客户端使用教程', link: '/tutorial/' },
            { label: '🏢 42 家品牌大全', link: '/brands/' },
            { label: '📊 测速与跑分矩阵', link: '/compare/' },
            { label: '📱 6大客户端大全', link: '/clients/' },
            { label: '📝 深度评测专栏', link: '/blog/' },
          ],
        },
      ],
    }),
  ],
});
