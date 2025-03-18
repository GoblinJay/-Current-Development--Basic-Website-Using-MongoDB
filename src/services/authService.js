import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/auth';

export const register = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/login`, credentials);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const requestTwoFactorAuth = async (email) => {
    try {
        const response = await axios.post(`${API_URL}/2fa/request`, { email });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const verifyTwoFactorAuth = async (token) => {
    try {
        const response = await axios.post(`${API_URL}/2fa/verify`, { token });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};