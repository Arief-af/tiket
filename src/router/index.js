import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/no1',
    name: 'no1',
    component: () => import('../views/no1.vue')
  },
  {
    path: '/',
    name: 'no1',
    component: () => import('../views/no1.vue')
  },
  {
    path: '/no2',
    name: 'no2',
    component: () => import('../views/no2.vue')
  },
  {
    path: '/no3',
    name: 'no3',
    component: () => import( '../views/no3.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
