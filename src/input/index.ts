
import Input from './src/input'
import { App } from 'vue'

// 具名方式导出
export { Input }

// 插件方式导出
export default {
  install(app: App) {
    app.component(Input.name, Input)
  }
}
  