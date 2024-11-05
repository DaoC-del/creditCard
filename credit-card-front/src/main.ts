// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './index.css'; // 引入Tailwind CSS
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
// 选择并导入主题 CSS 样式
// import 'primevue/resources/themes/saga-blue/theme.css'; // 选择的主题，确保路径正确
// import 'primevue/resources/primevue.min.css';           // PrimeVue 核心 CSS
// import 'primeicons/primeicons.css';                     // PrimeIcons 图标


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);
app.mount('#app')
