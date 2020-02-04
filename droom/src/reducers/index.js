import {
    FETCHING_START,
    FETCHING_ERROR,
    NEW_EMPLOYEE,
    NEW_EMPLOYER,
    LOGIN
  } from '../actions'

  const initialState = {
    isLoading: false,
    user: {},
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
            isLoading: false, 
        }
        default:
            return state
    }
}

