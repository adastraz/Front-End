import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import HeaderWelcome from './HeaderWelcome'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

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


    useEffect (() => {

    }, props.error)
    return (
        <div>
        <HeaderWelcome />    
        <div className="formContainer">
            <div className="signFormImage">
                
            </div>
            <div className="signForm">
                <h1>Sign Up</h1>
                <Form className="form" onSubmit={submitForm}>
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
                    <p>* 8-20 total characters | min. 1 special character | min. 1 digit | min. 1 letter</p>
                    <FormGroup check>
                        <Label check htmlFor="user_type">
                        <Input
                            id="user_type"
                            type="checkbox"
                            name="user_type"
                            onChange={handleCheckboxChanges}
                            checked={user.user_type}
                            />Are you looking for a job?
                        </Label>
                    </FormGroup>
                    
                    <Button className="signButton"
                        type="submit"
                        onClick={() => 
                            user.user_type ? props.history.push('/employeereg', user) : props.history.push('/employerreg', user)}>
                                Sign Up
                    </Button>
                </Form>
            </div>
        </div>
    </div>
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

