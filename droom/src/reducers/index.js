import {
    FETCHING_START,
    FETCHING_SUCCESS,
    FETCHING_FAILURE
  } from '../actions'

  const initialState = {
    isLoading: false,
    user:{},
    error: null
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_START:
            return {
                ...state,
                isLoading: true
            }
        default:
            return state
    }
}

