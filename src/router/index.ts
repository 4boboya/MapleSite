import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { home } from './views/Home'
import { raiders } from './views/Raiders'

const routes: Array<RouteRecordRaw> = []

routes.push(home, raiders)

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, _, next) => {
  if (to.meta.title) document.title = to.meta.title as string
  next()
})

export default router
