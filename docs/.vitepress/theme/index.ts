import DefaultTheme from 'vitepress/theme'
import HelloWorld from '../../../src/components/HelloWorld.vue'
import Test from '../../../src/components/Test'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import '../../../src/button/style/button.scss'
import '../../../src/tree/style/tree.scss'
import './doc.scss'
import { Button } from '../../../src/button'
import { Tree } from '../../../src/tree'

export default {
  ...DefaultTheme,
  enhanceApp({app}) {
    app.component('HelloWorld', HelloWorld)
    app.component('Test', Test)
    app.component('DemoBlock', DemoBlock)
    app.component('Demo', Demo)
    app.component(Button.name, Button)
    app.component(Tree.name, Tree)
  }
}