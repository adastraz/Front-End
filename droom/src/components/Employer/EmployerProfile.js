import React from 'react'
import {connect} from 'react-redux'

const EmployerProfile = props => {
    console.log(props.user)
    return (
        <>
           <div>
                <img src={props.user.imgUrl}/>
                <h1>{props.user.company_name}</h1>
           </div> 
           <div>
                <h2>{props.user.mission_statement}</h2>
                <h2>{props.user.industry}</h2>
                <h2>{props.user.description}</h2>
           </div>
           <div>
                <h3>{props.user.openPositions}</h3>
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