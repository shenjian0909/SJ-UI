import type { App, Plugin } from 'vue'
import * as components from './components'
import version from './version'

const SjUI = {
  version,
  install(app: App) {
    Object.keys(components).forEach(key => {
      const Component = components[key as keyof typeof components]
      // 只执行插件方法
      if ('install' in Component || typeof Component === 'function') {
        app.use(Component as Plugin)
      }
    })
  }
}

export default SjUI