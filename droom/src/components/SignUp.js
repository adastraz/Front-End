import React, {useState} from "react";
import {connect} from 'react-redux'
import {newUser} from './actions'

function SignUp(props) {


    const [user, setUser] = useState({
        username: '',
        password: '',
        employer: false
    });

    //handle any changes made to inputs username/password in the form
    const handleChanges = event => {
        console.log("User: ", user);
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };

    //handle changes made to employer checkbox in the form
    const handleCheckboxChanges = event => {
        console.log("User: ", user);

        setUser({
            ...user,
            [event.target.name]: event.target.checked
        });
    }


    //on submit
    const submitForm = e => {
        e.preventDefault();
        props.newUser(user)
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

            <label htmlFor="employer">Are you an employer?</label>
            <input
                id="employer"
                type="checkbox"
                name="employer"
                onChange={handleCheckboxChanges}
                checked={user.employer}
            />
            
            <button type="submit">Sign Up</button>

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

export default connect(mapStateToProps, {newUser})(SignUp)