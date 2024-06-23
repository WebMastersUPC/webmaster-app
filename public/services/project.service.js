import axios from "axios";
const http = axios.create({
    baseURL: 'http://localhost:5127/api/v1',
});
export class ProjectService {
    async getAllProjects() {
        const response = await http.get('/Project');
        return response.data;
    }
    async getProjectById(id) {
        const response = await http.get(`/Project/${id}`);
        return response.data;
    }
    async getAvailableProjects(){
        const response = await http.get('/Project/available-projects')
        return response.data;
    }
    async getProjectByDeveloper(developerId){
        const response = await http.get(`/Project/by-enterprise/${developerId}`)
        return response.data;
    }
    async getProjectByEnterprise(enterpriseId){
        const response = await  http.get(`/Project/by-developer/${enterpriseId}`)
        return response.data;
    }
    async createProject(Project){
        const response = await http.post(`/Project`, Project);
        return response.data;
    }
    async updateProject(id, Project){
        const response = await http.put(`/Project/${id}`, Project);
        return response.data;
    }
    async deleteProject(id) {
        const response = await http.delete(`/Project/${id}`);
        return response.data;
    }
    async assignDeveloper(id, Project){
        const response = await http.put(`/Developer/${id}`, Project);
        return response.data;
    }
    async addApplicant(id, Project){
        const response = await http.post(`/Applicant/${id}`, Project);
        return response.data;
    }
    async deleteDeveloper(id, Project) {
        const response = await http.delete(`/Developer/${id}`, Project);
        return response.data;
    }
    async deleteApplicant(id, Project) {
        const response = await http.delete(`/Applicant/${id}`, Project);
        return response.data;
    }
}