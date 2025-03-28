import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api'; // Update this if your Laravel backend URL is different

export async function registerUser(userData) {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        console.error('Registration error:', error.response?.data);
        throw error;
    }
}
