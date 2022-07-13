import TableColumn from '../table/src/tableColumn'
import { App } from 'vue'

// 具名方式导出
export { TableColumn }

// 插件方式导出
export default {
  install(app: App) {
    app.component(TableColumn.name, TableColumn)
  }
}
  