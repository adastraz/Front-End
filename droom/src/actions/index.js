import axios from 'axios'
import history from '../utils/history'
export const FETCHING_START = 'FETCHING_START';
export const FETCHING_ERROR = 'FETCHING_ERROR';
export const NEW_EMPLOYEE = 'NEW_EMPLOYEE';
export const LOGIN = 'LOGIN';
export const NEW_EMPLOYER = 'NEW_EMPLOYER';


export const newEmployee = (thing) => dispatch => {
    dispatch({ type: FETCHING_START })
    axios.post('https://dry-mesa-00229.herokuapp.com/api/register', thing)
        .then(res => {
            dispatch ({ type: NEW_EMPLOYEE, payload: res.data })
            history.push('/')
            console.log('Response', res.data)
        })
        .catch(err => {
            dispatch ({ type: FETCHING_ERROR, payload: err.data })
           console.log('Error', err)
        })
}
export const newEmployer = (thing) => dispatch => {
    dispatch({ type: FETCHING_START })
    axios.post('https://dry-mesa-00229.herokuapp.com/api/register', thing)
        .then(res => {
            dispatch ({ type: NEW_EMPLOYER, payload: res.data })
            history.push('/')
            console.log('Response', res.data)
        })
        .catch(err => {
            dispatch ({ type: FETCHING_ERROR, payload: err.data })
           console.log('Error', err)
        })
}
 export const login = (thing) => dispatch => {
     dispatch ({ type: FETCHING_START })
     axios.post('https://droom3.herokuapp.com/employer/auth/droom/api/login', thing)
        .then(res => {
            dispatch({ type: LOGIN, payload: res.data})
            localStorage.setItem('token', res.data)
            history.push('/')
            console.log('Login response', res.data)
        })
        .catch(err => {
            dispatch({ type: FETCHING_ERROR, payload: err.data })
        })
 }