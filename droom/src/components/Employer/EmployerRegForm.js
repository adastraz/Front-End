import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { newEmployer, clearError } from '../../actions'
import HeaderWelcome from '../HeaderWelcome'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

const EmployerRegForm = props => {

    const [employerUser, setEmployerUser] = useState({
        company_name: "",
        description: "",
        industry: "",
        mission_statement: "",
        imgUrl: "",
        openPositions: ""
    })

    const handleChanges = event => {
        console.log("User: ", employerUser);
        setEmployerUser({
            ...employerUser,
            [event.target.name]: event.target.value
        })
    }

    const submitForm = event => {
        event.preventDefault();
        props.newEmployer({...employerUser, ...props.location.state})
        console.log("User to submit: ", employerUser);
    }

    useEffect(() => {
        if(props.error != null){
            props.clearError()
        }
        console.log('look herer for error props', props.error)
    }, [props.error])

    return (
        <div>
            <HeaderWelcome />
            <div className="formContainer">
                <div className="signFormImagePage2">

                </div>
                <div className="signForm">
                    <h1>Registration</h1>
                    <Form className="form" onSubmit={submitForm}>
                        <Label htmlFor="companyName">Company Name: </Label>
                        <Input 
                            id="companyName"
                            type="text"
                            name="company_name"
                            onChange={handleChanges}
                            value={employerUser.company_name}
                            />
                        <Label htmlFor="description">Company Description: </Label>
                        <Input 
                            id="description"
                            type="textarea"
                            name="description"
                            onChange={handleChanges}
                            value={employerUser.description}
                            />
                        <Label htmlFor="industry">Industry: </Label>
                        <Input 
                            id="industry"
                            type="text"
                            name="industry"
                            onChange={handleChanges}
                            value={employerUser.industry}
                            />
                        <Label htmlFor="missionStatement">Mission Statement: </Label>
                        <Input 
                            id="missionStatement"
                            type="text"
                            name="mission_statement"
                            onChange={handleChanges}
                            value={employerUser.mission_statement}
                            />
                        <Label htmlFor="imgUrl">Image (link): </Label>
                        <Input 
                            id="imgUrl"
                            type="text"
                            name="imgUrl"
                            onChange={handleChanges}
                            value={employerUser.imgUrl}
                            />
                        <Label htmlFor="openPositions">Open Positions: </Label>
                        <Input 
                            id="openPositions"
                            type="text"
                            name="openPositions"
                            onChange={handleChanges}
                            value={employerUser.openPositions}
                            />
                        <Button className="signButton" type="submit">Create Account</Button>
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

export default connect (mapStateToProps, { newEmployer, clearError })(EmployerRegForm)