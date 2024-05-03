import axios from 'axios';

const http= axios.create({
    baseURL:'http://localhost:3000',
})

export class AuthService{
    getUsers(){
        return http.get('/users')
    }

    getEnterpriseInfoByID(id){
        return http.get(`/enterprises/${id}`)
    }

    getDeveloperList(){
        return http.get('/developers');
    }
}