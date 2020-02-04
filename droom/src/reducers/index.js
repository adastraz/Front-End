import {
    FETCHING_START,
    FETCHING_SUCCESS,
    FETCHING_FAILURE,
    NEW_JOBSEEKER,
    NEW_COMPANY,
    NEW_USER,
    LOGIN
  } from '../actions'

  const initialState = {
    isLoading: false,
    user: {},
    company:{},
    jobseeker:{},
    error: null
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case NEW_USER:
            return {
                ...state,
                user: action.payload
            }
        case NEW_JOBSEEKER:
            return {
                ...state,
                jobseeker: [...state.user, ...action.payload]
            }
        case NEW_COMPANY:
            return{
                ...state,
                company:[...state.user, ...action.payload]
            }
        case LOGIN: 
        return{
            ...state,
            user: action.payload
        }
        default:
            return state
    }
}

