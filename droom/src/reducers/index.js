import {
    FETCHING_START,
    FETCHING_SUCCESS,
    FETCHING_FAILURE,
    NEW_USER
  } from '../actions'

  const initialState = {
    isLoading: false,
    user: {},
    error: null
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case NEW_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}

