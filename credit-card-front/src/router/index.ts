import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
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
