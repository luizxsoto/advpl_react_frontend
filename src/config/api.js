import axios from 'axios';

const apiConfig = axios.create({
  baseURL: 'http://192.168.122.190:9999/rest',
});

export default apiConfig;
