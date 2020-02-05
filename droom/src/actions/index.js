import axios from 'axios'
import history from '../utils/history'
import axiosWithAuth from '../utils/axiosWithAuth'
export const FETCHING_START = 'FETCHING_START';
export const FETCHING_ERROR = 'FETCHING_ERROR';
export const NEW_EMPLOYEE = 'NEW_EMPLOYEE';
export const LOGIN = 'LOGIN';
export const NEW_EMPLOYER = 'NEW_EMPLOYER';
export const FETCHING_COMPANY_FAILURE = 'FETCHING_COMPANY_FAILURE'
export const FETCHING_USER_FAILURE = 'FETCHING_USER_FAILURE'
export const FETCHING_COMPANY_SUCCESS = 'FETCHING_COMPANY_SUCCESS'
export const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS'
export const FETCHING_USER = 'FETCHING_USER'
export const FETCHING_COMPANY = 'FETCHING_COMPANY'
export const FETCHING_COMPANYARRAY = 'FETCHING_COMPANYARRAY'
export const FETCHING_COMPANYARRAY_SUCCESS = 'FETCHING_COMPANYARRAY_SUCCESS'
export const FETCHING_USERARRAY_SUCCESS = 'FETCHING_USERARRAY_SUCCESS'
export const FETCHING_USERARRAY = 'FETCHING_USERARRAY'
export const FETCHING_COMPANYARRAY_FAILURE = 'FETCHING_COMPANYARRAY_FAILURE'
export const FETCHING_USERARRAY_FAILURE = 'FETCHING_USERARRAY_FAILURE'

export const newEmployee = (thing) => dispatch => {
    dispatch({ type: FETCHING_START })
    console.log(thing)
    axios.post('https://dry-mesa-00229.herokuapp.com/api/register/user', thing)
        .then(res => {
            dispatch ({ type: NEW_EMPLOYEE, payload: res.data })
            history.push(`/users/${res.data.id}`)
            console.log('Response', res.data)
        })
        .catch(err => {
            dispatch ({ type: FETCHING_ERROR, payload: err.data })
           console.log('Error', err)
        })
}
export const newEmployer = (thing) => dispatch => {
    dispatch({ type: FETCHING_START })
    axios.post('https://dry-mesa-00229.herokuapp.com/api/register/company', thing)
        .then(res => {
            dispatch ({ type: NEW_EMPLOYER, payload: res.data })
            history.push(`/companies/${res.data.id}`)
            console.log('Response', res.data)
        })
        .catch(err => {
            dispatch ({ type: FETCHING_ERROR, payload: err.data })
           console.log('Error', err)
        })
}
 export const login = (thing) => dispatch => {
     dispatch ({ type: FETCHING_START })
     axios.post('https://dry-mesa-00229.herokuapp.com/api/login', thing)
        .then(res => {
            dispatch({ type: LOGIN, payload: res.data})
            localStorage.setItem('token', res.data.token)
            res.data.user.user_type ? history.push(`users/${res.data.user.id}`) : history.push(`/companies/${res.data.company.id}`)
        })
        .catch(err => {
            dispatch({ type: FETCHING_ERROR, payload: err.data })
        })
 }
 export const fetchUser = (id) => dispatch => {
    dispatch({ type: FETCHING_USER})
    axios.get(`https://dry-mesa-00229.herokuapp.com/api/users/${id}`)
        .then(res => {
            console.log(res)
            dispatch({ type: FETCHING_USER_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch ({ type: FETCHING_USER_FAILURE, payload: err.response})
        })
}

export const fetchCompany= (company) => dispatch => {
    dispatch({ type: FETCHING_COMPANY})
    axios.get(`https://dry-mesa-00229.herokuapp.com/api/companies/${company.id}`)
        .then(res => {
            console.log(res)
            dispatch({ type: FETCHING_COMPANY_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch ({ type: FETCHING_COMPANY_FAILURE, payload: err.response})
        })
}

export const fetchCompanyArray = () => dispatch => {
    dispatch({ type: FETCHING_COMPANYARRAY})
    axios.get(`https://dry-mesa-00229.herokuapp.com/api/companies`)
        .then(res => {
            console.log(res)
            dispatch({ type: FETCHING_COMPANYARRAY_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch ({ type: FETCHING_COMPANYARRAY_FAILURE, payload: err.response})
        })
}

export const fetchUserArray = () => dispatch => {
    dispatch({ type: FETCHING_USERARRAY})
    axiosWithAuth()
        .get(`/api/users`)
            .then(res => {
                console.log(res)
                dispatch({ type: FETCHING_USERARRAY_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch ({ type: FETCHING_USERARRAY_FAILURE, payload: err.response})
            })
}