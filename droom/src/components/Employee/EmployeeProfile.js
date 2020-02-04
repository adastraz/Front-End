import React from 'react'
import {connect} from 'react-redux'

// name: "Test User",
// experience: "",
// industry: "",
// imgUrl: "

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