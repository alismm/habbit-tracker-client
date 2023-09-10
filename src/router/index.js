import { createRouter, createWebHashHistory } from 'vue-router'
import AppHome from '@/views/Home.vue'
import AppLogin from '@/views/Login.vue'

const routes = [
  {
    name: 'home',
    path: '/',
    component: AppHome
  },
  {
    name: 'login',
    path: '/login',
    component: AppLogin
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
