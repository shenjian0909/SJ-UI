import DefaultTheme from 'vitepress/theme'
import { registerComponents } from './registe-component'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import '../../../src/index.scss'
import './doc.scss'
import SjUI from '../../../src/index'

export default {
  ...DefaultTheme,
  enhanceApp({app}) {
    registerComponents(app)
    app.use(SjUI)
  }
}