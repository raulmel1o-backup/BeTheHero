import axios from 'axios';
import { API_URL } from 'react-native-dotenv'

const localIP = 'http://192.168.0.120:3333';

const api = axios.create({
    baseURL: API_URL || localIp
});

export default api;