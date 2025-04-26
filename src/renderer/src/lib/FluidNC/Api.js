import Axios from 'axios';
import { URL } from "./Constants";

const axios = Axios.create({
    baseURL: URL,
});

axios.interceptors.response.use(
    response => response.data,
    error => Promise.reject(error)
);

export default axios;

export const command = async command => {
    return axios
        .get(`/command?cmd=${command}`)
        .catch(console.error);
};