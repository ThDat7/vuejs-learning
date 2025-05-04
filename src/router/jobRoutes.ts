import JobsView from '@/views/JobsView.vue'
import { ROUTE_NAMES, ROUTE_PATHS } from '@/router/routeConstants'
import JobView from '@/views/JobView.vue'
import JobAddView from '@/views/JobAddView.vue'
import JobEditView from '@/views/JobEditView.vue'

export default [
  {
    path: ROUTE_PATHS.jobs,
    name: ROUTE_NAMES.jobs,
    component: JobsView,
  },
  {
    path: ROUTE_PATHS.job,
    name: ROUTE_NAMES.job,
    component: JobView,
  },
  {
    path: ROUTE_PATHS.jobAdd,
    name: ROUTE_NAMES.jobAdd,
    component: JobAddView,
  },
  {
    path: ROUTE_PATHS.jobEdit,
    name: ROUTE_NAMES.jobEdit,
    component: JobEditView,
  },
]
