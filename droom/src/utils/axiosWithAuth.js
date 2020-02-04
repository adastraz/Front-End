import axios from 'axios';


export const axiosWithAuth = () => {
    return axios.create({
        //config object
        baseURL: 'https://dry-mesa-00229.herokuapp.com/',
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
}