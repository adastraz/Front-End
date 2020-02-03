import {
    FETCHING_START,
    FETCHING_SUCCESS,
    FETCHING_FAILURE
  } from '../actions'

  const initialState = {
    isLoading: false,
    username:'',
    password:'',
    user_type: null,
    employee: {
        first_name: '',
        last_name: '',
        occupation: '',
        experience: '',
        interest: ''
    },
    employer:{
        company_name: '',
        description:'',
        jobs:[]
    }
}

export const reducer = (state = initalState, action) => {
    switch(action.type){
        default:
            return state
    }
}

