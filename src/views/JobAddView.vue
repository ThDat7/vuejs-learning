<script setup>
import JobForm from '@/components/JobForm.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import JobService from '@/service/JobService'
import { ROUTE_NAMES } from '@/router/routeConstants'
import { useToast } from 'vue-toastification'

const toast = useToast()
const router = useRouter()
const isLoading = ref(false)

const addJob = async (job) => {
  if (!job) return
  try {
    isLoading.value = true
    await JobService.addJob(job)
    router.push({ name: ROUTE_NAMES.jobs })
  } catch (error) {
    toast.error('Failed to add job')
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <section class="bg-green-50">
    <div class="container m-auto max-w-2xl py-24">
      <div class="m-4 mb-4 rounded-md border bg-white px-6 py-8 shadow-md md:m-0">
        <h2 class="mb-6 text-center text-3xl font-semibold">Add Job</h2>
        <JobForm @save="addJob" :isLoading="isLoading" />
      </div>
    </div>
  </section>
</template>
