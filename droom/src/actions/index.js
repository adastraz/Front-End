import axios from 'axios'
export const FETCHING_START = 'FETCHING_START';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';
export const NEW_USER = 'NEW_USER'
export const NEW_JOBSEEKER = 'NEW_JOBSEEKER'
export const NEW_COMPANY = 'NEW_COMPANY'
export const LOGIN = 'LOGIN'

export const newMember = (thing) => dispatch => {
    dispatch({ type: NEW_USER })
    axios.post('https://shrouded-taiga-50423.herokuapp.com/api/register', thing)
        .then(res => {
            console.log('Response', res)
        })
        .catch(err => {
           console.log('Error', err)
        })
}
 export const login = (thing) => dispatch => {
     dispatch ({ type: LOGIN })
     axios.post('https://shrouded-taiga-50423.herokuapp.com/api/login', thing)
        .then(res => {
            localStorage.setItem('token', res.data.payload)
        })
 }