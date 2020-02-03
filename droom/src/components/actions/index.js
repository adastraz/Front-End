import axios from 'axios'
export const FETCHING_START = 'FETCHING_START';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';

export const fetchApi = () => {
    dispatch({ type: FETCHING_ACTIVITY_START })
    axios.get()
        .then(res => {
            console.log('Response', res)
           
        })
        .catch(err => {
           console.log('Error', err)
        })
}