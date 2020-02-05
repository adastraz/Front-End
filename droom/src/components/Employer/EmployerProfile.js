import React from 'react'
import {connect} from 'react-redux'

// company_name: "Some Company", // string (required), must be unique
// description: "This is a placeholding company" // string (required)
// industry: "", // string (optional)
// mission_statement: "", //string (optional)
// imgUrl: "" // string (optional),
// openPositions: "" // string (optional)

const EmployerProfile = props => {
    const user = props.user.user 

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

 export default connect(mapStateToProps, {})(EmployerProfile)