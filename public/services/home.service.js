import axios from 'axios';

// Obtén el token del local storage
const token = localStorage.getItem('token');

const http= axios.create({
    baseURL:'https://webmasterapi.azurewebsites.net/api/v1',
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
   getDeveloperList() {
       return http.get('/Profile/Developers');
   }

    getDevInfoByID(id){
        return http.get(`Profile/Developers/${id}`)
    }
    getApplicantInfoById(developer_id){
        return http.get(`Profile/Profile/Developers/${developer_id}`)
    }
    getEnterpriseInfoByEnterpriseId(enterprise_id){
        return http.get(`Profile/Profile/Enterprises/${enterprise_id}`)
    }

    updateDevInfo(id, data){
        return http.put(`Profile/Developers/${id}`, data)
    }

    updateEnterpriseInfo(id, data){
        return http.put(`Profile/Enterprises/${id}`, data)
    }

    updateDevProfileImg(id, data){
        return http.put(`Profile/Developers/${id}/img`, data)
    }

    updateEnterpriseProfileImg(id, data){
        return http.put(`Profile/Enterprises/${id}/img`, data)
    }

}