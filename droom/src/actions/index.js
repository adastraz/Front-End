import axios from 'axios'
export const FETCHING_START = 'FETCHING_START';
export const FETCHING_ERROR = 'FETCHING_ERROR';
export const NEW_EMPLOYEE = 'NEW_EMPLOYEE';
export const LOGIN = 'LOGIN';
export const NEW_EMPLOYER = 'NEW_EMPLOYER';

export const newMember = (thing) => dispatch => {
    dispatch({ type: FETCHING_START })
    axios.post('https://shrouded-taiga-50423.herokuapp.com/api/register', thing)
        .then(res => {
            dispatch ({ type: NEW_EMPLOYER, payload: res.data })
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
            console.log('Login response', res.data)
        })
        .catch(err => {
            dispatch({ type: FETCHING_ERROR, payload: err.data })
        })
 }