import axios, { type AxiosInstance } from 'axios'
import { API_BASE_URL } from '@/service/apiConfig'

class BaseService {
  api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  protected async get(url: string, params = {}, config = {}) {
    return this.api
      .get(url, { params, ...config })
      .then((response) => response.data)
      .catch(this.errorHandler)
  }

  protected async post(url: string, data = {}, config = {}) {
    return this.api
      .post(url, data, config)
      .then((response) => response.data)
      .catch(this.errorHandler)
  }

  protected async put(url: string, data = {}, config = {}) {
    return this.api
      .put(url, data, config)
      .then((response) => response.data)
      .catch(this.errorHandler)
  }

  protected async delete(url: string, config = {}) {
    return this.api
      .delete(url, config)
      .then((response) => response.data)
      .catch(this.errorHandler)
  }

  protected errorHandler(error: any) {
    console.error(error)
    throw error
  }
}

export default BaseService
