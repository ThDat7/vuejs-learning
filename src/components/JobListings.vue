<script setup>
import JobListing from '@/components/JobListing.vue'
import { ROUTE_PATHS } from '@/router/routeConstants'
import JobService from '@/service/JobService'
import { onMounted, reactive } from 'vue'
import { RouterLink } from 'vue-router'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import { useToast } from 'vue-toastification'

const toast = useToast()
const state = reactive({
  jobs: [],
  isLoading: false,
})

onMounted(async () => {
  try {
    state.isLoading = true
    state.jobs = await JobService.getJobs()
  } catch (error) {
    toast.error('Failed to load jobs')
  } finally {
    state.isLoading = false
  }
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
      <div v-if="state.isLoading" class="py-6 text-center text-gray-500">
        <PulseLoader />
      </div>
      <div v-else class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <JobListing
          v-for="job in state.jobs.slice(0, limit || state.jobs.length)"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
  </section>

  <section v-if="showMoreButton" class="m-auto my-10 max-w-lg px-6">
    <RouterLink
      :to="ROUTE_PATHS.jobs"
      class="block rounded-xl bg-black px-6 py-4 text-center text-white hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>
