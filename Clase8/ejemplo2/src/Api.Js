import axios from 'axios'

const API_URL = `http://localhost:8080/`

export function getAll(){
    return axios.get(`${API_URL}/task`)
}
