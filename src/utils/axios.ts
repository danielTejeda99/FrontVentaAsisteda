import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000', //TODO:  Reemplaza con la URL base de tu API
});

export default axiosInstance;
