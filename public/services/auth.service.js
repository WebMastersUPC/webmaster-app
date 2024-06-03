import axios from 'axios';

const http= axios.create({
    baseURL:'http://localhost:5127/api/v1',
})

export class AuthService{
    // getUsers(){
    //     return http.get('/users')
    // }
    //
    // getEnterpriseInfoByID(id){
    //     return http.get(`/enterprises/${id}`)
    // }
    //
    //
    // getDeveloperList() {
    //     return http.get('/developers');
    // }
    //
    // getDevInfoByID(id){
    //     return http.get(`/developers/${id}`)
    // }

    async authenticate(Mail, Password) {
        const response = await http.get(`/Auth/sign-in/${Mail}&${Password}`);
        return response.data;
    }
}