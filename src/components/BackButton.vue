<script setup>
import { RouterLink } from 'vue-router'
import { ROUTE_PATHS } from '@/router/routeConstants'
</script>

<template>
  <section>
    <div class="container m-auto px-6 py-6">
      <RouterLink
        :to="ROUTE_PATHS.jobs"
        class="flex items-center text-green-500 hover:text-green-600"
      >
        <i class="fas fa-arrow-left mr-2"></i> Back to Job Listings
      </RouterLink>
    </div>
  </section>
</template>
