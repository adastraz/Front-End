import React, {useState} from "react";
import {connect} from 'react-redux'
import {login} from '../actions'
import {Link} from 'react-router-dom'

function SignIn(props) {

    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    //handle any changes made to inputs username/password in the form
    const handleChanges = event => {
        console.log("User: ", user);
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };

    //on submit
    const submitForm = e => {
        e.preventDefault();
        console.log("User to submit: ", user);
        props.login(user)
        //react 2 handle posting/etc
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
            <button type="submit">Sign In</button>
            <Link to='/signup' >I don't have an account</Link> 
        </form>
    );
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        user: state.user,
        error: state.error
    }
}

export default connect(mapStateToProps, {login})(SignIn)