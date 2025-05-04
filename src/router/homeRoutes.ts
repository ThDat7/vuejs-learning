import HomeView from '@/views/HomeView.vue'
import { ROUTE_NAMES, ROUTE_PATHS } from '@/router/routeConstants'

export default [
  {
    path: ROUTE_PATHS.home,
    name: ROUTE_NAMES.home,
    component: HomeView,
  },
]
