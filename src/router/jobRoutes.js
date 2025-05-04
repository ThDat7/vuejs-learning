import JobsView from "@/views/JobsView.vue";
import { ROUTE_NAMES, ROUTE_PATHS } from "@/router/routeConstants";
import JobView from "@/views/JobView.vue";

export default [
    {
      path: ROUTE_PATHS.jobs,
      name: ROUTE_NAMES.jobs,
      component: JobsView
    },
    {
      path: ROUTE_PATHS.job,
      name: ROUTE_NAMES.job,
      component: JobView,
    }
  ];
  