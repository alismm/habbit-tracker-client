import { createRouter, createWebHashHistory } from 'vue-router'
import AppHome from '@/views/Home.vue'
import AppLogin from '@/views/Login.vue'
import AppSignUp from '@/views/SignUp.vue'
import CheckAuth from '@/middlewares/checkAuth.js'

const routes = [
  {
    name: 'home',
    path: '/',
    component: AppHome,
    meta: {
      title: 'Home',
      isProtected: true
    }
  },
  {
    name: 'login',
    path: '/login',
    component: AppLogin,
    meta: {
      title: 'Login',
      isProtected: false
    }
  },
  {
    name: 'signup',
    path: '/signup',
    component: AppSignUp,
    meta: {
      title: 'Sign up',
      isProtected: false
    }
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' }
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

router.afterEach((to) => {
  const { title } = to.meta
  document.title = title
})

router.beforeEach((to, from, next) => {
  if (!to.meta.isProtected) {
    next();
    return;
  }
  else {
    next("/login")
  }
  CheckAuth(to, from, next, to.meta.isProtected)
})

export default router
  