import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: 'Home',
      isProtected: true
    }
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/Login.vue'),
    meta: {
      title: 'Login',
      isProtected: false
    }
  },
  {
    name: 'activities',
    path: '/activities',
    component: () => import('@/views/Activities.vue'),
    meta: {
      title: 'Activities',
      isProtected: false
    }
  },
  {
    name: 'signup',
    path: '/signup',
    component: () => import('@/views/SignUp.vue'),
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

export default router
  