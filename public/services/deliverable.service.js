import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:5127/api/v1',
});

export class DeliverableService{

    async getAllDeliverables(projectId) {
        const response = await http.get(`/Projects/${projectId}/Deliverables`);
        return response.data;
    }

    async getDeliverableById(projectId, deliverableId) {
        const response = await http.get(`/Projects/${projectId}/Deliverables/${deliverableId}`);
        return response.data;
    }

    async createDeliverable(projectId, deliverable) {
        const response = await http.post(`/Projects/${projectId}/Deliverables`, deliverable);
        return response.data;
    }

    async updateDeliverable(projectId, deliverableId, deliverable) {
        const response = await http.put(`/Projects/${projectId}/Deliverables/${deliverableId}`, deliverable);
        return response.data;
    }

    async deleteDeliverable(projectId, orderNumber) {
        const response = await http.delete(`/Projects/${projectId}/Deliverables/${orderNumber}`);
        return response.data;
    }

    async uploadDeliverableFile(projectId, orderNumber) {
        const response = await http.post(`/Projects/${projectId}/Deliverables/${orderNumber}/Upload`);
        return response.data;
    }

    async approveDeliverable(projectId, deliverableId) {
        const response = await http.put(`/Projects/${projectId}/Deliverables/${deliverableId}/Approve`);
        return response.data;
    }

    async rejectDeliverable(projectId, deliverableId) {
        const response = await http.put(`/Projects/${projectId}/Deliverables/${deliverableId}/Reject`);
        return response.data;
    }

    async reviewDeliverable(projectId, deliverableId) {
        const response = await http.get(`/Projects/${projectId}/Deliverables/${deliverableId}/Review`);
        return response.data;
    }

}
