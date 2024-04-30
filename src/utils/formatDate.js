import { format } from 'date-fns' // Import date-fns

//Funcion para formatear la fecha
export function formatDate(value, formatString = 'dd/MM/yyyy HH:mm') {
    return format(new Date(value), formatString)
}