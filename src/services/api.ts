import axios from 'axios';

// config axios instance here
const api = axios.create({
  baseURL: '',
  headers: { 'Content-Type': 'application/json' },
});

export default api;
