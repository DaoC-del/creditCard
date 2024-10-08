import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import TestPage from '@/pages/TestPage.vue'
const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/test',
    name: 'test',
    component: TestPage
  },
  // {
  //   path: '/other',
  //   name: 'Other',
  //   component: OtherPage
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
