
import Table from './src/table'
import { App } from 'vue'

// 具名方式导出
export { Table }

// 插件方式导出
export default {
  install(app: App) {
    app.component(Table.name, Table)
  }
}
  