import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import { ROUTE_NAMES, ROUTE_PATHS } from './routeConstants'

const routes = [
  { path: ROUTE_PATHS.home, name: ROUTE_NAMES.home, component: HomeView },
  { path: '/:pathMatch(.*)*', name: ROUTE_NAMES.NotFound, component: NotFoundView }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router