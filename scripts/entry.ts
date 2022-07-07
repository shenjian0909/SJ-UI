// 入口文件
import type { App } from 'vue'
// 1. 引入实现的组件，批量导出去
import ButtonPlugin, { Button }  from '../src/button'

// 导出组件
export { Button }

// 2. 导出一个插件
const plugins = [ButtonPlugin]
export default {
  install(app: App) {
    plugins.forEach(p => {
      app.use(p)
    })
  }
}