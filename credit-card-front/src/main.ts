// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './index.css' // 引入Tailwind CSS
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { useErrorHandler } from '@/components/errorHandler'

const app = createApp(App)
const { showError } = useErrorHandler()
app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: 'system',
      cssLayer: false
    }
  }
})
// Vueのグローバルエラーハンドラー
app.config.errorHandler = (err, instance, info) => {
  console.error('Vue Error:', err, info)
  if (err instanceof Error) {
    showError({ type: 'common', message: err.message })
  } else {
    showError({ type: 'common', message: 'An unknown error occurred' })
  }
}

// JavaScript のグローバルエラーハンドリング
window.onerror = (message, source, lineno, colno, error) => {
  console.error('Global Error:', message, source, lineno, colno, error)
  if (error instanceof Error) {
    showError({ type: 'network', message: error.message })
  } else {
    showError({ type: 'network', message: message?.toString() || 'An unknown error occurred' })
  }
}

// Promise の未処理のエラーを捕捉
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled Promise Rejection:', event.reason)
  const errorMessage =
    event.reason instanceof Error ? event.reason.message : 'An unexpected error occurred'
  showError({ type: 'confirm', message: errorMessage })
})
app.mount('#app')
