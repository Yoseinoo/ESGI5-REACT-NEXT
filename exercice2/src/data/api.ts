import axios from "axios";

const API_URL = "http://localhost:3001";

export async function getTasks() {
    return axios.get(`${API_URL}/tasks`)
        .then((response) => response.data)
        .catch((error) => {
            console.error(error);
            throw error;
        });
}

export async function apiLogin(email: string, password: string) {
    return axios.post(`${API_URL}/login`, {
        email: email,
        password: password
    })
    .then((response) => response.data)
    .catch((error) => {
        console.error(error);
        throw error;
    })
}

export async function createTask(title: string, token: string|null) {
    return axios.post(`${API_URL}/tasks`, 
        {
            title: title,
        },
        {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
    )
}