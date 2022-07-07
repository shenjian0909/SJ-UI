const sidebar = [
  {
    text: 'Guide',
    items: [
      { text: 'button', link: '/components/button/' },
      { text: 'tree', link: '/components/tree/' }
    ]
  }
]
const config = {
  title: 'SJ-UI',
  themeConfig: {
    sidebar
  },
  markdown: {
    // 这里可以使用markdown-it的插件
    config(md) {
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin)
    }
  }
}
export default config