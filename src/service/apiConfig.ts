export const API_BASE_URL = import.meta.env.VITE_API_URL

export const ENDPOINTS = {
  jobs: '/jobs',
  job(id: number) {
    return `/jobs/${id}`
  },
  deleteJob(id: number) {
    return `/jobs/${id}`
  },
  addJob() {
    return `/jobs`
  },
  editJob(id: number) {
    return `/jobs/${id}`
  },
}
