import type { Job } from '@/types/Job'
import { ENDPOINTS } from './apiConfig'
import BaseService from './BaseService'

class JobService extends BaseService {
  async getJobs() {
    return this.get(ENDPOINTS.jobs)
  }

  async getJobById(id: number) {
    return this.get(ENDPOINTS.job(id))
  }

  async deleteJob(id: number) {
    return this.delete(ENDPOINTS.deleteJob(id))
  }

  async addJob(job: Job) {
    return this.post(ENDPOINTS.addJob(), job)
  }

  async editJob(id: number, job: Job) {
    return this.put(ENDPOINTS.editJob(id), job)
  }
}

export default new JobService()
