import {
    FETCHING_START,
    FETCHING_ERROR,
    NEW_EMPLOYEE,
    NEW_EMPLOYER,
    FETCHING_USER_SUCCESS,
    FETCHING_USER,
    FETCHING_COMPANY,
    FETCHING_COMPANY_SUCCESS,
    FETCHING_USER_FAILURE,
    FETCHING_COMPANY_FAILURE,
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
        case FETCHING_USER:
            return{
                ...state,
                isLoading: true,
            }
        case FETCHING_COMPANY:
            return{
                ...state,
                isLoading: true,
            }
        case FETCHING_COMPANY_FAILURE:
            return{
                ...state,
                error: action.payload,
                isLoading: false
            }
        case FETCHING_USER_FAILURE:
            return{
                ...state,
                error: action.payload,
                isLoading: false
            }
        case NEW_EMPLOYEE:
            return {
                ...state,
                user: action.payload,
                isLoading: false
                }
        case FETCHING_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoading: false
            }
            case FETCHING_COMPANY_SUCCESS:
                return{
                    ...state,
                    user:action.payload,
                    isLoading: false
                }
        case LOGIN: 
        return{
            ...state,
            user: action.payload,
            isLoading: false
        }
        default:
            return state
    }
}

