import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:5127/api/v1",
});

export class MessageService {
    async getAllMessages() {
        const response = await http.get('/messages');
        return response.data;
    }

    async getMessageById(id) {
        const response = await http.get(`/messages/${id}`);
        return response.data;
    }

    async sendMessage(message) {
        const response = await http.post('/messages', message);
        return response.data;
    }

    async updateMessage(id, message) {
        const response = await http.put(`/messages/${id}`, message);
        return response.data;
    }

    async deleteMessage(id) {
        const response = await http.delete(`/messages/${id}`);
        return response.data;
    }

    async getMessagesByReceiverId(receiverId) {
        const response = await http.get(`/messages/receiver/${receiverId}`);
        return response.data;
    }

    async getMessagesBySenderId(senderId) {
        const response = await http.get(`/messages/sender/${senderId}`);
        return response.data;
    }
}