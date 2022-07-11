const sidebar = [
  {
    text: '组件',
    items: [
      { text: 'Button 按钮', link: '/components/button/' },
      { text: 'Tree 树形控件', link: '/components/tree/' },
      { text: 'Input 输入框', link: '/components/input/' },
      { text: 'Select 选择器', link: '/components/select/' },
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