export const API_BASE_URL = import.meta.env.VITE_API_URL

export const ENDPOINTS = {
    jobs: '/jobs',
    job(id) { return `/jobs/${id}` },
    deleteJob(id) { return `/jobs/${id}` },
    addJob() { return `/jobs` },
}