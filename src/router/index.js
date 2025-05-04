import { createWebHistory, createRouter } from 'vue-router'

import NotFoundView from '@/views/NotFoundView.vue'
import homeRoutes from '@/router/homeRoutes'
import jobRoutes from '@/router/jobRoutes'
import { ROUTE_NAMES } from '@/router/routeConstants'

const routes = [
  ...homeRoutes,
  ...jobRoutes,
  { path: '/:pathMatch(.*)*', name: ROUTE_NAMES.NotFound, component: NotFoundView }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router