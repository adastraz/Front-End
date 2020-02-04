import React from 'react'
import {connect} from 'react-redux'

//         "user_id": 1,
//         "first_name": "Jonathan",
//         "last_name": "Chen",
//         "occupation": "Student",
//         "experience": "Years of Java programming",
//         "interest": "Coding, cooking, backpacking"

const EmployeeProfile = props => {
    console.log(props.user)
    return (
        <>
        
        </>
    )
}

 const mapStateToProps = state => {
     return {
         isLoading: state.isLoading,
         user: state.user,
         error: state.error
     }
 }

 export default connect(mapStateToProps, {})(EmployeeProfile)