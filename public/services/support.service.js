import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:5127/api/v1',
   /* headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }

    */
});

export default {
    async createSupportRequest(supportRequest) {
        try {
            console.log(supportRequest); // Imprime los datos de la solicitud
            const response = await http.post('/SupportRequest', supportRequest, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error creating support request:', error);
            console.log(error.response); // Imprime la respuesta de error para obtener más detalles
            throw error; // Propaga el error para que pueda ser manejado en el componente Vue
        }
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
