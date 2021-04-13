import { useCheck } from '@/hooks/useAccount'
import { createRouter, createMemoryHistory, createWebHashHistory } from 'vue-router'

/** @type { import('vue-router').RouteRecordRaw[] } */
const routes = [
  {
    name: 'Login',
    path: '/login',
    component: () => import('../views/VLogin.vue')
  }, {
    name: 'Index',
    path: '/',
    component: () => import('../views/VIndex.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach(e => {
  useCheck()
    .then(res => {
      if (!res.success) {
        router.push('/login')
        return
      }
      if (e.path === '/login') {
        router.push('/')
      }
    })
})

export default router
