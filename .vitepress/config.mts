import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Zeus运维平台",
  description: "中小企业一站式运维平台",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'static/image/zeus.png',
    nav: [
      { text: '项目介绍', link: 'zeus/README' },
      { text: 'Demo',
      items: [
        {text: 'Demo-1', link: 'demo'},
        {text: 'Demo-2', link: 'demo-2'}
      ]}
    ],

    sidebar: [
      {
        text: '运维平台',
        items: [
          { text: '项目介绍', link: 'zeus/README' },
          { text: '使用文档', link: 'zeus/USAGE' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dev-love-ops' }
    ]
  }
})
