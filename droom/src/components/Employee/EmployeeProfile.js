import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchUser} from '../../actions'

// name: "Test User",
// experience: "",
// industry: "",
// imgUrl: "



const EmployeeProfile = props => {
    console.log(props.user.user.name)
    // useEffect(() => {fetchUser(props.match.params.id)},[])
    const user= props.user.user
    return (
        <>
           <h1>{user.name}</h1>
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

 export default connect(mapStateToProps, {fetchUser})(EmployeeProfile)