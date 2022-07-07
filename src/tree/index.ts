
import Tree from './src/tree'
import { App } from 'vue'

// 具名方式导出
export { Tree }

// 插件方式导出
export default {
  install(app: App) {
    app.component(Tree.name, Tree)
  }
}
  