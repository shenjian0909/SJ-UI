
import Select from './src/select'
import { App } from 'vue'

// 具名方式导出
export { Select }

// 插件方式导出
export default {
  install(app: App) {
    app.component(Select.name, Select)
  }
}
  