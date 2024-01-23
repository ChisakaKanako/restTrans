import { defineConfig } from 'vitepress'
export default defineConfig({
  base: '/restTrans/',
  title: "restTrans",
  description: "记录那些逝去的跨性别者🕯️",
  head: [
    ['link', { rel: 'icon', href: '/restTrans/icon.png'}]
  ],
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                displayDetails: '显示详细列表',
                noResultsText: '没有相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                }
              }
            }
          }
        }
      }
    },
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
          { text: '2023-日期已确认', link: '/document/2023a.md' },
          { text: '2023-日期未确认', link: '/document/2023b.md' }
        ]
      },
      {
        text: '2024年',
        items: [
          { text: '2024-日期已确认', link: '/document/2024a.md' },
          { text: '2024-日期未确认', link: '/document/2024b.md' }
        ]
      },
    ],
  }
})