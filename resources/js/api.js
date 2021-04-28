import axios from 'axios'


export const BASE_API_URL = 'http://127.0.0.1:8000/';
export const CSRF_TOKEN = 'http://127.0.0.1:8000/sanctum/csrf-cookie';

export const apiClient = axios.create ({
    baseURL: BASE_API_URL,
    withCredentials:true,
})
