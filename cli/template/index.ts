import { upperFirst } from "./utils"

export default function genIndexTemplate(name) {
  const upperName = upperFirst(name)
  return `
import ${upperName} from './src/${name}'
import { App } from 'vue'

// 具名方式导出
export { ${upperName} }

// 插件方式导出
export default {
  install(app: App) {
    app.component(${upperName}.name, ${upperName})
  }
}
  `
}