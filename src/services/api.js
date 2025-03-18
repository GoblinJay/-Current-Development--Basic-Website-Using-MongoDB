import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Function to register a new user
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Function to login a user
export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/login`, credentials);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Function to get user profile
export const getUserProfile = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/profile/${userId}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Function to update user profile
export const updateUserProfile = async (userId, profileData) => {
    try {
        const response = await axios.put(`${API_URL}/profile/${userId}`, profileData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Function to handle two-factor authentication
export const verifyTwoFactorAuth = async (userId, token) => {
    try {
        const response = await axios.post(`${API_URL}/verify-2fa`, { userId, token });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};