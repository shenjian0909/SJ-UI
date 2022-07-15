
> A Vue.js 3.0 UI Toolkit for Web.

Sj-UI will stay with Vue 3.x 


## Links
- 主页和文档
  - [International users](https://shenjian0909.github.io/)
  - [Chinese users](https://shenjian0909.github.io/)
- [github](https://github.com/shenjian0909/SJ-UI)

## Install
```shell
npm install jacksj-ui -S
```

## Quick Start
``` javascript
// 全局引入
import { createApp } from 'vue'
import SjUI from 'jacksj-ui'
import 'jacksj-ui/style.css'
import App from './App.vue'

const app = createApp(App)

app.use(SjUI)
app.mount('#app')

// or 按需引入
import {
  Button,
  Input
  // ...
} from 'jacksj-ui'

app.use(Button)
app.use(Input)
```
For more information, please refer to [Quick Start](https://shenjian0909.github.io) in our documentation.

## Browser Support
Modern browsers and Internet Explorer 10+.
