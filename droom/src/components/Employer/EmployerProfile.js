import React from 'react'
import {connect} from 'react-redux'

const EmployerProfile = props => {

    console.log(props.user)

    const user = props.user.user;

    return (
        <>
           <div>
                <img src={user.imgUrl}/>
                <h1>{user.company_name}</h1>
           </div> 
           <div>
                <h2>{user.mission_statement}</h2>
                <h2>{user.industry}</h2>
                <h2>{user.description}</h2>
           </div>
           <div>
                <h3>{user.openPositions}</h3>
           </div>
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