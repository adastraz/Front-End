import React from 'react'
import {connect} from 'react-redux'

<<<<<<< HEAD
// name: "Test User",
// experience: "",
// industry: "",
// imgUrl: "
=======
>>>>>>> c7d483e33ad4e9bc5940042d80a9684d9c92ebee

const EmployeeProfile = props => {
    console.log(props.user)
    return (
        <>
           <div>
                <img src={props.user.imgUrl}/>
                <h1>{props.user.name}</h1>
           </div> 
           <div>
                <h2>{props.user.industry}</h2>
                <h2>{props.user.experience}</h2>
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

 export default connect(mapStateToProps, {})(EmployeeProfile)