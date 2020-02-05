import {
    FETCHING_START,
    FETCHING_ERROR,
    NEW_EMPLOYEE,
    NEW_EMPLOYER,
    FETCHING_COMPANYARRAY_SUCCESS,
    FETCHING_USERARRAY_SUCCESS,
    LOGIN
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
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case FETCHING_ERROR:
            return{
                ...state,
                error: action.payload,
                isLoading: false
            }
        case NEW_EMPLOYER:
            return {
                ...state,
                user: action.payload,
                isLoading: false
            }
        case NEW_EMPLOYEE:
            return {
                ...state,
                user: action.payload,
                isLoading: false
                }
        case LOGIN: 
        return{
            ...state,
            user: action.payload,
            isLoading: false
            }
        case FETCHING_USERARRAY_SUCCESS:
            return{
                ...state,
                array: action.payload,
                isLoading: false
            }
        case FETCHING_COMPANYARRAY_SUCCESS:
            return {
                ...state,
                array: action.payload
            }
        default:
            return state
    }
}

