import axios from 'axios';

const api = axios.create({
    baseURL: "https://omni-api2.herokuapp.com"
});

export default api;