<script setup lang="ts">
import { reactive } from 'vue'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import type { Job } from '@/types/Job'

const emit = defineEmits(['save'])

const props = withDefaults(
  defineProps<{
    job?: Job
    isLoading: boolean
  }>(),
  {
    job: () => ({
      type: 'Full-Time',
      title: '',
      description: '',
      salary: 'Under $50K',
      location: '',
      company: {
        name: '',
        description: '',
        contactEmail: '',
        contactPhone: '',
      },
    }),
    isLoading: false,
  }
)

const job = reactive({
  ...props.job,
})

const saveJob = () => {
  emit('save', job)
}
</script>

<template>
  <form @submit.prevent="saveJob">
    <div class="mb-4">
      <label for="type" class="mb-2 block font-bold text-gray-700">Job Type</label>
      <select id="type" v-model="job.type" class="w-full rounded border px-3 py-2" required>
        <option value="Full-Time">Full-Time</option>
        <option value="Part-Time">Part-Time</option>
        <option value="Remote">Remote</option>
        <option value="Internship">Internship</option>
      </select>
    </div>

    <div class="mb-4">
      <label for="name" class="mb-2 block font-bold text-gray-700">Job Listing Name</label>
      <input
        type="text"
        id="name"
        v-model="job.title"
        class="mb-2 w-full rounded border px-3 py-2"
        placeholder="eg. Senior Vue Developer"
        required
      />
    </div>
    <div class="mb-4">
      <label for="description" class="mb-2 block font-bold text-gray-700">Description</label>
      <textarea
        id="description"
        v-model="job.description"
        class="w-full rounded border px-3 py-2"
        rows="4"
        placeholder="Add any job duties, expectations, requirements, etc"
      ></textarea>
    </div>

    <div class="mb-4">
      <label for="salary" class="mb-2 block font-bold text-gray-700">Salary</label>
      <select id="salary" v-model="job.salary" class="w-full rounded border px-3 py-2" required>
        <option value="Under $50K">Under $50K</option>
        <option value="$50K - $60K">$50K - $60K</option>
        <option value="$60K - $70K">$60K - $70K</option>
        <option value="$70K - $80K">$70K - $80K</option>
        <option value="$80K - $90K">$80K - $90K</option>
        <option value="$90K - $100K">$90K - $100K</option>
        <option value="$100K - $125K">$100K - $125K</option>
        <option value="$125K - $150K">$125K - $150K</option>
        <option value="$150K - $175K">$150K - $175K</option>
        <option value="$175K - $200K">$175K - $200K</option>
        <option value="Over $200K">Over $200K</option>
      </select>
    </div>

    <div class="mb-4">
      <label for="location" class="mb-2 block font-bold text-gray-700">Location</label>
      <input
        type="text"
        id="location"
        v-model="job.location"
        class="mb-2 w-full rounded border px-3 py-2"
        placeholder="Company Location"
        required
      />
    </div>

    <h3 class="mb-5 text-2xl">Company Info</h3>

    <div class="mb-4">
      <label for="company" class="mb-2 block font-bold text-gray-700">Company Name</label>
      <input
        type="text"
        id="company"
        v-model="job.company.name"
        class="w-full rounded border px-3 py-2"
        placeholder="Company Name"
      />
    </div>

    <div class="mb-4">
      <label for="company_description" class="mb-2 block font-bold text-gray-700"
        >Company Description</label
      >
      <textarea
        id="company_description"
        v-model="job.company.description"
        class="w-full rounded border px-3 py-2"
        rows="4"
        placeholder="What does your company do?"
      ></textarea>
    </div>

    <div class="mb-4">
      <label for="contact_email" class="mb-2 block font-bold text-gray-700">Contact Email</label>
      <input
        type="email"
        id="contact_email"
        v-model="job.company.contactEmail"
        class="w-full rounded border px-3 py-2"
        placeholder="Email address for applicants"
        required
      />
    </div>
    <div class="mb-4">
      <label for="contact_phone" class="mb-2 block font-bold text-gray-700">Contact Phone</label>
      <input
        type="tel"
        id="contact_phone"
        v-model="job.company.contactPhone"
        class="w-full rounded border px-3 py-2"
        placeholder="Optional phone for applicants"
      />
    </div>

    <div>
      <button
        class="focus:shadow-outline w-full rounded-full bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600 focus:outline-none"
        type="submit"
      >
        <PulseLoader v-if="props.isLoading" />
        <span v-else>Save</span>
      </button>
    </div>
  </form>
</template>
