import axios from 'axios'

const backendUrlLocal = "http://localhost:4500"
const backendUrlProd = "https://api-express-6zho.onrender.com"
const axiosClient = axios.create( {
  baseURL: backendUrlLocal
} )

export default axiosClient