import axios from 'axios';

const api = axios.create({
    baseURL: 'https://motoclube-bikeapp.herokuapp.com/'
})

export default api;