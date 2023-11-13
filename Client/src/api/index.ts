import axios from 'axios';

export const axiosClient = axios.create();
axiosClient.defaults.baseURL = 'http://127.0.0.1:8080';


