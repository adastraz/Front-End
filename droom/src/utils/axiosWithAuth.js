import axios from 'axios';


export const axiosWithAuth = () => {
    return axios.create({
        //config object
        baseURL: 'https://shrouded-taiga-50423.herokuapp.com/',
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
}