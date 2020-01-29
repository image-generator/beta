import axios from 'axios';


const api = axios.create({
    baseURL: `https://pixabay.com/api`
});

export default api;