import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const http = axios.create({
    baseURL: 'http://localhost:5127/api/v1',
});

export default {
    async createMessage(message) {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Token not found');
            }

            const decodedToken = jwtDecode(token);
            const senderId = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid'];
            if (!senderId) {
                throw new Error('Sender ID not found in token');
            }

            message.append('senderId', senderId);

            const response = await http.post('/Messages', message, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error creating message:', error);
            console.log(error.response);
            throw error;
        }
    },
};
