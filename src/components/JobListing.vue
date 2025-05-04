<script setup lang="ts">
import { ROUTE_NAMES } from '@/router/routeConstants'
import { computed, ref } from 'vue'
import type { Job } from '@/types/Job'

const props = defineProps<{
  job: Job
}>()

const showFullDescription = ref(false)
const toggleShowFullDescription = () => {
  showFullDescription.value = !showFullDescription.value
}

const truncatedDescription = computed(() => {
  return showFullDescription.value
    ? props.job.description
    : `${props.job.description.slice(0, 90)}...`
})
</script>

<template>
  <div class="relative rounded-xl bg-white shadow-md">
    <div class="p-4">
      <div class="mb-6">
        <div class="my-2 text-gray-600">{{ job.type }}</div>
        <h3 class="text-xl font-bold">{{ job.title }}</h3>
      </div>

      <div class="mb-5">
        <div>{{ truncatedDescription }}</div>
        <button @click="toggleShowFullDescription" class="mb-5 text-green-500 hover:text-green-600">
          {{ showFullDescription ? 'Show Less' : 'Show More' }}
        </button>
      </div>

      <h3 class="mb-2 text-green-500">{{ job.salary }} / Year</h3>

      <div class="mb-5 border border-gray-100"></div>

      <div class="mb-4 flex flex-col justify-between lg:flex-row">
        <div class="mb-3 text-orange-700">
          <i class="pi pi-map-marker text-orange-700"></i>
          {{ job.location }}
        </div>
        <RouterLink
          :to="{
            name: ROUTE_NAMES.job,
            params: { id: job.id },
          }"
          class="h-[36px] rounded-lg bg-green-500 px-4 py-2 text-center text-sm text-white hover:bg-green-600"
        >
          Read More
        </RouterLink>
      </div>
    </div>
  </div>
</template>
