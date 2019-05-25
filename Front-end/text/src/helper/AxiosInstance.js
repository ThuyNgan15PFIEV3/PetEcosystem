import axios from 'axios';

var axiosInstance = axios.create({
  baseURL: process.env.PUBLIC_URL  || 'http://localhost:4000',
});


export default axiosInstance