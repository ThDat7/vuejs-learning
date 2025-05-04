import axios from "axios"
import { API_BASE_URL } from "@/service/apiConfig"

class BaseService {
    constructor() {
        this.api = axios.create({
            baseURL: API_BASE_URL,
            headers: {
                "Content-Type": "application/json",
            },
        })
    }

    async get(url, params = {}, config = {}) {
        return this.api.get(url, { params, ...config })
            .then(response => response.data)
            .catch(this.errorHandler)
    }

    async post(url, data = {}, config = {}) {
        return this.api.post(url, data, config)
            .then(response => response.data)
            .catch(this.errorHandler)
    }

    async put(url, data = {}, config = {}) {
        return this.api.put(url, data, config)
            .then(response => response.data)
            .catch(this.errorHandler)
    }

    async delete(url, config = {}) {
        return this.api.delete(url, config)
            .then(response => response.data)
            .catch(this.errorHandler)
    }

    errorHandler(error) {
        console.error(error)
        throw error
    }
}
    
export default BaseService