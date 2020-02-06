import React, {useState} from "react";
import {connect} from 'react-redux'

function SignUp(props) {

    const [user, setUser] = useState({
        username: '',
        password: '',
        user_type: false
    });

    //handle any changes made to inputs username/password in the form
    const handleChanges = event => {
        console.log("User handle changes: ", user);
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };

    //handle changes made to employer checkbox in the form
    const handleCheckboxChanges = event => {
        console.log("User checkbox: ", user);
        setUser({
            ...user,
            [event.target.name]: event.target.checked
        });
    }


    //on submit
    const submitForm = e => {
        e.preventDefault();
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="username">Username: </label>
            <input 
                id="username"
                type="text"
                name="username"
                onChange={handleChanges}
                value={user.username}
            />
            <label htmlFor="password">Password: </label>
            <input 
                id="password"
                type="password"
                name="password"
                onChange={handleChanges}
                value={user.password}
            />
            <label htmlFor="user_type">Are you looking for a job?</label>
            <input
                id="user_type"
                type="checkbox"
                name="user_type"
                onChange={handleCheckboxChanges}
                checked={user.user_type}
            />
            <button 
                type="submit"
                onClick={() => 
                    user.user_type ? props.history.push('/employeereg', user) : props.history.push('/employerreg', user)}>
                        Sign Up
            </button>
        </form>

    );
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        user: state.user,
        error:state.error
    }
}

export default connect(mapStateToProps, {})(SignUp)

