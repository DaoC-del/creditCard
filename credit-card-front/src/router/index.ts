import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import TestPage from '@/pages/TestPage.vue'
import CardSelection from '@/pages/cardApplication/CardSelection.vue'
import { useErrorHandler } from '@/components/errorHandler'
import { useLoadingHandler } from '@/components/loadingHandler'
const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/cardApplication/cardSelection',
    name: 'CardSelection',
    component: CardSelection
  },
  {
    path: '/test',
    name: 'test',
    component: TestPage
  }
  // {
  //   path: '/other',
  //   name: 'Other',
  //   component: OtherPage
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const errorHandler = useErrorHandler()
  const loadingHandler = useLoadingHandler()

  try {
    debugger
    // loadingHandler.startLoading();
    // 模拟加载延迟
    await new Promise((resolve) => setTimeout(resolve, 500))
    next()
  } catch (error) {
    errorHandler.showError('An error occurred while navigating.')
    next(false)
  }
  // finally {
  //   loadingHandler.stopLoading();
  // }
})

export default router
