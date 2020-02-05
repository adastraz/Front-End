import React from 'react'
import {connect} from 'react-redux'
import {fetchUser} from '../../actions'

//         "user_id": 1,
//         "first_name": "Jonathan",
//         "last_name": "Chen",
//         "occupation": "Student",
//         "experience": "Years of Java programming",
//         "interest": "Coding, cooking, backpacking"



const EmployeeProfile = props => {

    console.log(props.user.user)

    const user = props.user.user
    
    return (
        <>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
            <div>
                <img src={user.imgurl}/>
                <h1>{user.name}</h1>
           </div> 
           <div>
                <h2>{user.industry}</h2>
                <h2>{user.experience}</h2>
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

 export default connect(mapStateToProps, {fetchUser})(EmployeeProfile)