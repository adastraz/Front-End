import {
    FETCHING_START,
    FETCHING_SUCCESS,
    FETCHING_FAILURE
  } from '../actions'

  const initialState = {
    isLoading: false,
    username:'',
    password:'',
    user_type: 0,
    employee: {

    },
    employer:{

    }
}

export const reducer = (state = initalState, action) => {
    switch(action.type){
        default:
            return state
    }
}

