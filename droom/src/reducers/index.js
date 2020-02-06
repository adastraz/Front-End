import {
    FETCHING_START,
    FETCHING_ERROR,
    EMPLOYEE,
    EMPLOYER,
    FETCHING_COMPANYARRAY_SUCCESS,
    FETCHING_USERARRAY_SUCCESS,
    LOGIN,
  } from '../actions'

  const initialState = {
    isLoading: false,
    user: {},
    array:[],
    error: null
}

export const reducer = (state = initialState, action) => {
    console.log("action.type: " + action.type);
    switch(action.type){
        case FETCHING_START:
            console.log("FETCHING START ACTION", action.payload)
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case FETCHING_ERROR:
            console.log("ERROR ACTION", action.payload)
            return{
                ...state,
                error: action.payload,
                isLoading: false
            }
        case EMPLOYER:
            console.log("EMPLOYER ACTION", action.payload)
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                error: null
            }
        case EMPLOYEE:
            console.log("EMPLOYEE ACTION", action.payload)
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                error: null
                }
        case LOGIN: 
            console.log("LOGIN ACTION", action.payload)
            return{
                ...state,
                user: action.payload,
                isLoading: false,
                error: null
            }
        case FETCHING_USERARRAY_SUCCESS:
            return{
                ...state,
                array: action.payload,
                isLoading: false,
                error: null
            }
        case FETCHING_COMPANYARRAY_SUCCESS:
            return {
                ...state,
                array: action.payload,
                error: null
            }
        default:
            return state
    }
}

