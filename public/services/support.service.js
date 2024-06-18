import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:5127/api/v1', 
});

export default {
    async getAllSupportRequests() {
        const response = await http.get('/SupportRequest');
        return response.data;
    },

    async createSupportRequest(supportRequest) {
        const response = await http.post('/SupportRequest', supportRequest);
        return response.data;
    },

    async updateSupportRequest(id, supportRequest) {
        const response = await http.put(`/SupportRequest/${id}`, supportRequest);
        return response.data;
    },

    async deleteSupportRequest(id) {
        const response = await http.delete(`/SupportRequest/${id}`);
        return response.data;
    }
};
