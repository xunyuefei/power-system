import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import markdownItKatex from '@iktakahiro/markdown-it-katex'

// 自动检测 GitHub Pages 仓库路径基准，本地默认为 '/'
const base = process.env.BASE_PATH || (process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` : '/')

export default withPwa(defineConfig({
  base,
  title: "电力系统简答题指南",
  description: "华电电气考研历年真题与期末题整理",
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}favicon.svg` }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: `${base}favicon.ico` }],
    ['link', { rel: 'apple-touch-icon', href: `${base}apple-touch-icon.png` }],
    ['meta', { name: 'theme-color', content: '#0f172a' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover' }]
  ],
  pwa: {
    outDir: '.vitepress/dist',
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico', 'favicon.svg', 'apple-touch-icon.png', 'cards.json'],
    manifest: {
      id: base,
      name: '电力系统考研背诵刷题神器',
      short_name: '电分考研',
      description: '电力系统分析考研简答题 Anki 刷题与随身笔记本',
      theme_color: '#0f172a',
      background_color: '#0f172a',
      display: 'standalone',
      orientation: 'portrait',
      start_url: base,
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ]
    },
    workbox: {
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2,json}'],
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'cdn-cache',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 60 * 60 * 24 * 365
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    }
  },
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '⚡ 选择/判断题刷题宝', link: `${base}quiz/index.html`, target: '_blank' },
      { text: '开始复习', link: '/chapter1' },
      { text: '🔥 今日复习 (Anki Mode)', link: '/review' },
      { text: '📝 考研笔记本', link: '/notes' }
    ],
    sidebar: [
      {
        text: '简答题指南',
        items: [
          { text: '第一章', link: '/chapter1' },
          { text: '第二章', link: '/chapter2' },
          { text: '第三章', link: '/chapter3' },
          { text: '第四章', link: '/chapter4' },
          { text: '第五章', link: '/chapter5' },
          { text: '第六章', link: '/chapter6' },
          { text: '第七章', link: '/chapter7' },
          { text: '第八章', link: '/chapter8' }
        ]
      }
    ],
    outline: 'deep'
  },
  markdown: {
    config: (md) => {
      md.use(markdownItKatex)
    }
  }
}))
