import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.11.14.29:8080'
})

export default api;