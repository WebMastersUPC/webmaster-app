import axios from 'axios';

// Obtén el token del local storage
const token = localStorage.getItem('token');

const http= axios.create({
    baseURL:'http://localhost:5127/api/v1',
    headers: {
        'Authorization': `Bearer ${token}`
    }
})

export class HomeService{
    // getUsers(){
    //     return http.get('/users')
    // }
    //
    getEnterpriseInfoByID(id){
        return http.get(`Profile/Enterprises/${id}`)
    }
    //
    //
    // getDeveloperList() {
    //     return http.get('/developers');
    // }
    //
    getDevInfoByID(id){
        return http.get(`Profile/Developers/${id}`)
    }
    getApplicantInfoById(developer_id){
        return http.get(`Profile/Developers/${developer_id}`)
    }
    getEnterpriseInfoByEnterpriseId(enterprise_id){
        return http.get(`Profile/Profile/Enterprises/${enterprise_id}`)
    }

}