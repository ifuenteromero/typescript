import axios, { CanceledError } from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export default axios.create({
    baseURL: BASE_URL
});

export { CanceledError }