import axios from 'axios';
import { API_BASE_URL } from '@env';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para manejar errores
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Manejar errores de la API
      console.error('API Error:', error.response.data);
    } else if (error.request) {
      // Manejar errores de red
      console.error('Network Error:', error.message);
    } else {
      // Manejar otros errores
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);
