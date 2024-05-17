import { defineConfig } from 'vitepress'
export default defineConfig({
  title: "restTrans",
  head: [
    ['link', { rel: 'icon', href: '/icon.png'}]
  ],
  themeConfig: {
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '切换深色模式',
    outlineTitle: '在此页面中',
    returnToTopLabel: '回到顶部',
    footer: {
      copyright: '© 2024 restTrans'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    nav: [
      { text: '主页', link: '/' },
    ],
    sidebar: [
      {
        text: '2023年',
        items: [
          { text: '日期已确认', link: '/document/2023a.md' },
          { text: '日期未确认', link: '/document/2023b.md' }
        ]
      },
      {
        text: '2024年',
        items: [
          { text: '日期已确认', link: '/document/2024a.md' },
          { text: '日期未确认', link: '/document/2024b.md' }
        ]
      },
    ],
  }
})
