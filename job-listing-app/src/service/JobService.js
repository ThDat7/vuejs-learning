import axios from "axios";

class JobService {
    async getJobs() {
        return axios.get('http://localhost:3000/jobs')
            .then(response => response.data);
    }

    async getJobById(id) {
        return axios.get(`http://localhost:3000/jobs/${id}`)
            .then(response => response.data);
    }
}

export default new JobService();