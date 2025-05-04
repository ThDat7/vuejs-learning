import { ENDPOINTS } from "./apiConfig";
import BaseService from "./BaseService";

class JobService extends BaseService {
    async getJobs() {
        return this.get(ENDPOINTS.jobs)
    }

    async getJobById(id) {
        return this.get(ENDPOINTS.job(id))
    }

    async deleteJob(id) {
        return this.delete(ENDPOINTS.deleteJob(id))
    }

    async addJob(job) {
        return this.post(ENDPOINTS.addJob(), job)
    }
}

export default new JobService();