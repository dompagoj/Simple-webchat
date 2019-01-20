import Axios from 'axios'
import { authStore } from './stores/AuthStore'

export const axios = Axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    Authorization: authStore.token,
  },
})
