import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { newEmployee, clearError } from '../../actions'
import HeaderWelcome from '../HeaderWelcome'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

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
    useEffect (() => {
        if(props.error != null){
            props.clearError()
        }
        console.log('look herer for error props', props.error)
    }, props.error)

    return (
        <div>
            <HeaderWelcome />
            <div className="formContainer">
                <div className="signFormImagePage2">

                </div>
                <div className="signForm">
                    <h1>Registration</h1>
                    <Form  className="form" onSubmit={submitForm}>
                        <FormGroup>
                            <Label htmlFor="name">Name: </Label>
                            <Input 
                                id="name"
                                type="text"
                                name="name"
                                onChange={handleChanges}
                                value={employeeUser.name}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="industry">Industry: </Label>
                            <Input 
                                id="industry"
                                type="text"
                                name="industry"
                                onChange={handleChanges}
                                value={employeeUser.industry}
                                />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="experience">Experience: </Label>
                            <Input 
                                id="experience"
                                type="text" //may need to add textarea later
                                name="experience"
                                onChange={handleChanges}
                                value={employeeUser.experience}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="imgUrl">Image: </Label>
                            <Input 
                                id="imgUrl"
                                type="text"
                                name="imgUrl"
                                onChange={handleChanges}
                                value={employeeUser.imgUrl}
                            />
                        </FormGroup>
                        <Button className="signButton" type="submit">Create Account</Button>
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

export default connect(mapStateToProps, { newEmployee, clearError })(EmployeeRegForm)