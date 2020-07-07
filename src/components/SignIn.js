import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { login } from '../actions'
import { Link } from 'react-router-dom'
import HeaderWelcome from './HeaderWelcome'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

function SignIn(props) {

    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    //handle any changes made to inputs username/password in the form
    const handleChanges = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };

    //on submit
    const submitForm = e => {
        e.preventDefault()
        props.login(user)
        //react 2 handle posting/etc
    }

    return (
        <div>
        <HeaderWelcome />
        <div className="formContainer">
            <div className="signFormImage">

            </div>
            <div className="signForm">
                <h1>Sign In</h1>
                <Form className="form"onSubmit={submitForm}>
                    <FormGroup>
                        <Label htmlFor="username">Username: </Label>
                        <Input 
                            id="username"
                            type="text"
                            name="username"
                            onChange={handleChanges}
                            value={user.username}
                            />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">Password: </Label>
                        <Input 
                            id="password"
                            type="password"
                            name="password"
                            onChange={handleChanges}
                            value={user.password}
                            />
                    </FormGroup>

                    <Button className="signButton" type="submit">Sign In</Button>

                    <Link className="noAccountLink" to='/signup' >I don't have an account</Link> 
                    {
                        props.error != null ? (<p className='incorrect'>Incorrect username or password</p>) : ''
                    }
                    {
                        props.isLoading ? (<p>Loading...</p>) : ''
                    }
                </Form>
            </div>
        </div>
    </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        user: state.user,
        error: state.error
    }
}

export default connect(mapStateToProps, { login })(SignIn)