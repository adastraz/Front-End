import React, {useState} from 'react'
import {connect} from 'react-redux'
import {newEmployee} from '../../actions'

const EmployeeRegForm = props => {

    const [employeeUser, setEmployeeUser] = useState({
        name: "",
        industry: "",
        experience: "",
        imgUrl: ""
    });

    const handleChanges = e => {
        console.log("User handle changes: ", employeeUser);
        setEmployeeUser({
            ...employeeUser,
            [e.target.name]: e.target.value
        });
    };

    const submitForm = e => {
        e.preventDefault();
        console.log("User to submit: ", employeeUser);
        props.newEmployee({...employeeUser, ...props.location.state})
    }

    console.log('isloading', props.isLoading)
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name: </label>
            <input 
                id="name"
                type="text"
                name="name"
                onChange={handleChanges}
                value={employeeUser.name}
            />
            <label htmlFor="industry">Industry: </label>
            <input 
                id="industry"
                type="text"
                name="industry"
                onChange={handleChanges}
                value={employeeUser.industry}
            />
            <label htmlFor="experience">Experience: </label>
            <input 
                id="experience"
                type="text" //may need to add textarea later
                name="experience"
                onChange={handleChanges}
                value={employeeUser.experience}
            />
            <label htmlFor="imgUrl">Image: </label>
            <input 
                id="imgUrl"
                type="text"
                name="imgUrl"
                onChange={handleChanges}
                value={employeeUser.imgUrl}
            />
            <button type="submit">Create Account</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        user: state.user,
        error: state.error
    }
}

export default connect(mapStateToProps, {newEmployee})(EmployeeRegForm)