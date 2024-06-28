import axios from 'axios';

const http= axios.create({
    baseURL:'https://webmasterapi.azurewebsites.net/api/v1',
})

export class AuthService{


    async authenticate(mail, password) {
        try {
            const response = await http.get(`/Auth/sign-in/${mail}&${password}`);
            //const userId = response.data.user_id; // Obtener el id del usuario desde la respuesta
            //localStorage.setItem('userId', userId); // Guardar el userId en localStorage
            return response.data; 
        } catch (error) {
            console.error('Error en la autenticación:', error);
            throw error; // Propagar el error para que el manejador lo gestione
        }
    }

    async registerDeveloper(Developer) {
        const response = await http.post('/Auth/register-developer', Developer);
        return response.data;
    }

    async registerEnterprise(Enterprise) {
        const response = await http.post('/Auth/register-enterprise', Enterprise);
        return response.data;
    }


}