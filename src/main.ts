import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
// 使用全量导出
import SjUI from './index'

createApp(App).use(SjUI).mount('#app')
