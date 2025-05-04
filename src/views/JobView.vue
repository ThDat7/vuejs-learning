<script setup lang="ts">
import BackButton from '@/components/BackButton.vue'
import { ROUTE_NAMES } from '@/router/routeConstants'
import JobService from '@/service/JobService'
import type { Job } from '@/types/Job'
import { computed, onMounted, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import { useToast } from 'vue-toastification'

interface JobViewState {
  job: Job
  isLoading: boolean
}

const router = useRouter()
const toast = useToast()
const route = useRoute()
const state = reactive<JobViewState>({
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

const deleteJob = async () => {
  if (!id.value) return

  const isConfirmed = confirm(`Are you sure you want to delete job with id ${id.value}`)

  if (!isConfirmed) return

  try {
    await JobService.deleteJob(id.value)
    router.push({ name: ROUTE_NAMES.jobs })
  } catch (error) {
    toast.error(`Failed to delete job with id ${id.value}`)
  }
}
</script>

<template>
  <!-- Go Back -->
  <BackButton />

  <div v-if="state.isLoading" class="py-6 text-center text-gray-500">
    <PulseLoader />
  </div>

  <div v-else>
    <section class="bg-green-50">
      <div class="container m-auto px-6 py-10">
        <div class="md:grid-cols-70/30 grid w-full grid-cols-1 gap-6">
          <main>
            <div class="rounded-lg bg-white p-6 text-center shadow-md md:text-left">
              <div class="mb-4 text-gray-500">{{ state.job.type }}</div>
              <h1 class="mb-4 text-3xl font-bold">{{ state.job.title }}</h1>
              <div class="mb-4 flex justify-center align-middle text-gray-500 md:justify-start">
                <i class="fa-solid fa-location-dot mr-2 text-lg text-orange-700"></i>
                <p class="text-orange-700">{{ state.job.location }}</p>
              </div>
            </div>

            <div class="mt-6 rounded-lg bg-white p-6 shadow-md">
              <h3 class="mb-6 text-lg font-bold text-green-800">Job Description</h3>

              <p class="mb-4">
                {{ state.job.description }}
              </p>

              <h3 class="mb-2 text-lg font-bold text-green-800">Salary</h3>

              <p class="mb-4">{{ state.job.salary }} / Year</p>
            </div>
          </main>

          <!-- Sidebar -->
          <aside>
            <!-- Company Info -->
            <div class="rounded-lg bg-white p-6 shadow-md">
              <h3 class="mb-6 text-xl font-bold">Company Info</h3>

              <h2 class="text-2xl">{{ state.job.company.name }}</h2>

              <p class="my-2">
                {{ state.job.company.description }}
              </p>

              <hr class="my-4" />

              <h3 class="text-xl">Contact Email:</h3>

              <p class="my-2 bg-green-100 p-2 font-bold">{{ state.job.company.contactEmail }}</p>

              <h3 class="text-xl">Contact Phone:</h3>

              <p class="my-2 bg-green-100 p-2 font-bold">{{ state.job.company.contactPhone }}</p>
            </div>

            <!-- Manage -->
            <div class="mt-6 rounded-lg bg-white p-6 shadow-md">
              <h3 class="mb-6 text-xl font-bold">Manage Job</h3>
              <RouterLink
                :to="{ name: ROUTE_NAMES.jobEdit, params: { id: state.job.id } }"
                class="focus:shadow-outline mt-4 block w-full rounded-full bg-green-500 px-4 py-2 text-center font-bold text-white hover:bg-green-600 focus:outline-none"
                >Edit Job</RouterLink
              >
              <button
                @click="deleteJob"
                class="focus:shadow-outline mt-4 block w-full rounded-full bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600 focus:outline-none"
              >
                Delete Job
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </div>
</template>
