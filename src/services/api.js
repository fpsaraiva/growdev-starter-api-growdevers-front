import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gs3-api-growdevers-back.herokuapp.com',
});

export default api;
