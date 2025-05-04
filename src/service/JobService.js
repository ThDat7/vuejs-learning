import { ENDPOINTS } from "./apiConfig";
import BaseService from "./BaseService";

class JobService extends BaseService {
    async getJobs() {
        return this.get(ENDPOINTS.jobs)
    }

    async getJobById(id) {
        return this.get(ENDPOINTS.job(id))
    }
    }
}

export default new JobService();