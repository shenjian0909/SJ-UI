// 入口文件
import type { App } from 'vue'
// 1. 引入实现的组件，批量导出去
import ButtonPlugin, { Button }  from '../src/button'
import InputPlugin, { Input } from '../src/input'
import TreePlugin, { Tree } from '../src/tree'
import '../src/index.scss'
import version from '../src/version'

// 导出组件
export { Button }
export { Input }
export { Tree }

// 2. 导出一个插件
const plugins = [ButtonPlugin, InputPlugin, TreePlugin]
export default {
  version,
  install(app: App) {
    plugins.forEach(p => {
      app.use(p)
    })
  }
}