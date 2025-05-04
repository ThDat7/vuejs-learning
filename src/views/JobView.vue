<script setup>
import JobService from '@/service/JobService'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const job = ref(null)
onMounted(async () => {
  const id = route.params.id
  if (!id) return
  job.value = await JobService.getJobById(id)
})
</script>

<template>
  <!-- Go Back -->
  <section>
    <div class="container m-auto px-6 py-6">
      <a href="jobs.html" class="flex items-center text-green-500 hover:text-green-600">
        <i class="fas fa-arrow-left mr-2"></i> Back to Job Listings
      </a>
    </div>
  </section>

  <div v-if="job">
    <section class="bg-green-50">
      <div class="container m-auto px-6 py-10">
        <div class="md:grid-cols-70/30 grid w-full grid-cols-1 gap-6">
          <main>
            <div class="rounded-lg bg-white p-6 text-center shadow-md md:text-left">
              <div class="mb-4 text-gray-500">{{ job.type }}</div>
              <h1 class="mb-4 text-3xl font-bold">{{ job.title }}</h1>
              <div class="mb-4 flex justify-center align-middle text-gray-500 md:justify-start">
                <i class="fa-solid fa-location-dot mr-2 text-lg text-orange-700"></i>
                <p class="text-orange-700">{{ job.location }}</p>
              </div>
            </div>

            <div class="mt-6 rounded-lg bg-white p-6 shadow-md">
              <h3 class="mb-6 text-lg font-bold text-green-800">Job Description</h3>

              <p class="mb-4">
                {{ job.description }}
              </p>

              <h3 class="mb-2 text-lg font-bold text-green-800">Salary</h3>

              <p class="mb-4">{{ job.salary }} / Year</p>
            </div>
          </main>

          <!-- Sidebar -->
          <aside>
            <!-- Company Info -->
            <div class="rounded-lg bg-white p-6 shadow-md">
              <h3 class="mb-6 text-xl font-bold">Company Info</h3>

              <h2 class="text-2xl">{{ job.company.name }}</h2>

              <p class="my-2">
                {{ job.company.description }}
              </p>

              <hr class="my-4" />

              <h3 class="text-xl">Contact Email:</h3>

              <p class="my-2 bg-green-100 p-2 font-bold">{{ job.company.contactEmail }}</p>

              <h3 class="text-xl">Contact Phone:</h3>

              <p class="my-2 bg-green-100 p-2 font-bold">{{ job.company.contactPhone }}</p>
            </div>

            <!-- Manage -->
            <div class="mt-6 rounded-lg bg-white p-6 shadow-md">
              <h3 class="mb-6 text-xl font-bold">Manage Job</h3>
              <a
                href="add-job.html"
                class="focus:shadow-outline mt-4 block w-full rounded-full bg-green-500 px-4 py-2 text-center font-bold text-white hover:bg-green-600 focus:outline-none"
                >Edit Job</a
              >
              <button
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
