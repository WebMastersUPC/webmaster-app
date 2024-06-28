﻿import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const token = localStorage.getItem('token');

const http = axios.create({
    baseURL: 'https://webmasterapi.azurewebsites.net/api/v1',
    headers: {
        'Authorization': `Bearer ${token}`
    }
});
export default {
    async createSupportRequest(supportRequest) {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Token not found');
            }

            const decodedToken = jwtDecode(token);
            const userId = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid'];
            if (!userId) {
                throw new Error('User ID not found in token');
            }

            supportRequest.append('userId', userId);

            const response = await http.post('/SupportRequest', supportRequest, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error creating support request:', error);
            console.log(error.response);
            throw error;
        }
    },
};