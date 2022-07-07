import Button from './src/button'
import { App } from 'vue'

// 具名方式导出
export { Button }

// 插件方式导出
export default {
  install(app: App) {
    app.component(Button.name, Button)
  }
}