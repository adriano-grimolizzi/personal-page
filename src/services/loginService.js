import axios from 'axios'

const headers = {
    'Content-Type': 'application/json'
}

const fetchToken = credentials => axios.post(
    'http://localhost:3002/login',
    JSON.stringify(credentials),
    headers)

export default {
    fetchToken
}
