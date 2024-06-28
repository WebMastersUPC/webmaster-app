import axios from "axios";

const token = localStorage.getItem('token');

const http = axios.create({
    baseURL: 'https://webmasterapi.azurewebsites.net/api/v1'
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
        const response = await http.get(`/Project/by-developer/${developerId}`)
        return response.data;
    }
    async getProjectByEnterprise(enterpriseId){
        const response = await  http.get(`/Project/by-enterprise/${enterpriseId}`)
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
    async assignDeveloper(project_id, Project){
        const response = await http.post(`/Project/assign-developer/${project_id}`, Project);
        return response.data;
    }
    async addApplicant(project_id, Project){
        const response = await http.post(`/Project/add-applicant/${project_id}`, Project);
        return response.data;
    }
    async deleteDeveloper(project_id, Project) {
        const response = await http.delete(`/Project/delete-developer/${project_id}`, Project);
        return response.data;
    }
    async deleteApplicant(project_id, Project) {
        const response = await http.delete(`/Project/delete-applicant/${project_id}`, Project);
        return response.data;
    }
}