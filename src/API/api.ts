import axios from "axios";
import {Todo} from "../Types/Todos";

export const API_URI = 'https://jsonplaceholder.typicode.com';

axios.defaults.baseURL = API_URI

export const Todos  = {
    async getAll() {
        return axios.get<Todo[]>('/todos')
    }
}

