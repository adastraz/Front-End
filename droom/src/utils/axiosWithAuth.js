import axios from 'axios';


const axiosWithAuth = () => {
    return axios.create({
        //config object
        baseURL: 'https://dry-mesa-00229.herokuapp.com/',
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
}
export default axiosWithAuth