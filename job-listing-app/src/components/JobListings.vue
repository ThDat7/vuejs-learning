<script setup>
import JobListing from '@/components/JobListing.vue'
import JobService from '@/service/JobService'
import { onMounted, ref } from 'vue'

const jobs = ref([])

onMounted(async () => {
  jobs.value = await JobService.getJobs()
})

const props = defineProps({
  limit: Number,
  showMoreButton: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl m-auto lg:container">
      <h2 class="mb-6 text-center text-3xl font-bold text-green-500">Browse Jobs</h2>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <JobListing v-for="job in jobs.slice(0, limit || jobs.length)" :key="job.id" :job="job" />
      </div>
    </div>
  </section>

  <section v-if="showMoreButton" class="m-auto my-10 max-w-lg px-6">
    <a href="/jobs" class="block rounded-xl bg-black px-6 py-4 text-center text-white hover:bg-gray-700">
      View All Jobs
    </a>
  </section>
</template>
