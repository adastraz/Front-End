import React from 'react'
import {connect} from 'react-redux'

        // "company_name": "Apple Inc.",
        // "description": "Creating the best products for you"

const EmployerProfile = props => {
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

 export default connect(mapStateToProps, {})(EmployerProfile)