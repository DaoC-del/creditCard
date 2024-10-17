// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './index.css'; // 引入Tailwind CSS
import App from './App.vue'
import router from './router'
import rotatingBorder from './animation/rotatingBorder';
const app = createApp(App)

app.use(createPinia())
app.use(router)
// 注册全局指令
app.directive('rotating-border', rotatingBorder);
app.mount('#app')
