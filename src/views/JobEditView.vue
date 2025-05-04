<script setup lang="ts">
import JobForm from '@/components/JobForm.vue'
import { computed, onMounted, reactive, ref } from 'vue'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import { useRoute, useRouter } from 'vue-router'
import JobService from '@/service/JobService'
import { useToast } from 'vue-toastification'
import { ROUTE_NAMES } from '@/router/routeConstants'
import type { Job } from '@/types/Job'

interface JobEditState {
  job: Job
  isLoading: boolean
}

const toast = useToast()
const route = useRoute()
const router = useRouter()
const isLoading = ref(false)
const state = reactive<JobEditState>({
  job: {} as Job,
  isLoading: true,
})

const id = computed(() => Number(route.params.id))

onMounted(async () => {
  if (!id.value) return

  try {
    state.isLoading = true
    state.job = await JobService.getJobById(id.value)
  } catch (error) {
    toast.error(`Failed to load job with id ${id.value}`)
  } finally {
    state.isLoading = false
  }
})

const editJob = async (job: Job) => {
  if (!job) return
  try {
    isLoading.value = true
    await JobService.editJob(id.value, job)
    router.push({ name: ROUTE_NAMES.jobs })
  } catch (error) {
    toast.error('Failed to edit job')
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <section class="bg-green-50">
    <div class="container m-auto max-w-2xl py-24">
      <div class="m-4 mb-4 rounded-md border bg-white px-6 py-8 shadow-md md:m-0">
        <h2 class="mb-6 text-center text-3xl font-semibold">Edit Job</h2>
        <div v-if="state.isLoading" class="py-6 text-center text-gray-500">
          <PulseLoader />
        </div>
        <JobForm v-else @save="editJob" :job="state.job" :isLoading="isLoading" />
      </div>
    </div>
  </section>
</template>
