import React from 'react'
import {connect} from 'react-redux'

<<<<<<< HEAD
// company_name: "Some Company", // string (required), must be unique
// description: "This is a placeholding company" // string (required)
// industry: "", // string (optional)
// mission_statement: "", //string (optional)
// imgUrl: "" // string (optional),
// openPositions: "" // string (optional)

=======
>>>>>>> c7d483e33ad4e9bc5940042d80a9684d9c92ebee
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