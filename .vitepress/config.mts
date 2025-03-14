import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Zeus运维平台",
  description: "中小企业一站式运维平台",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'static/zeus.png',
    nav: [
      { text: '项目简介', link: '/' },
      { text: '使用文档', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dev-love-ops' }
    ]
  }
})
