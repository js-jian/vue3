import axios from 'axios'

// axios.defaults.baseURL = ""

axios.interceptors.request.use(
  config => {
    return config
  },
  error => {

  }
)

axios.interceptors.response.use(
  response => {
  },
  error => {

  }
)

export default axios