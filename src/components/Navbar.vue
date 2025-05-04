<script setup lang="ts">
import logo from '@/assets/img/logo.png'
import { ROUTE_PATHS } from '@/router/routeConstants'
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'

const isActiveLink = (to: string) => {
  const route = useRoute()
  return to === route.path
}

const navs = [
  {
    name: 'Home',
    to: ROUTE_PATHS.home,
  },
  {
    name: 'Jobs',
    to: ROUTE_PATHS.jobs,
  },
  {
    name: 'Add Job',
    to: ROUTE_PATHS.jobAdd,
  },
]
</script>

<template>
  <nav class="border-b border-green-500 bg-green-700">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          <!-- Logo -->
          <RouterLink :to="ROUTE_PATHS.home" class="mr-4 flex flex-shrink-0 items-center">
            <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
            <span class="ml-2 hidden text-2xl font-bold text-white md:block">Vue Jobs</span>
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <RouterLink
                v-for="nav in navs"
                :key="nav.name"
                :to="nav.to"
                :class="isActiveLink(nav.to) ? 'bg-green-900' : 'hover:bg-green-900'"
                class="rounded-md px-3 py-2 text-white hover:bg-green-900 hover:text-white"
                >{{ nav.name }}</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
