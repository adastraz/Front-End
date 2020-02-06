import React, {useState} from 'react'
import {connect} from 'react-redux'
import {newEmployer} from '../../actions'
import HeaderWelcome from '../HeaderWelcome'

const EmployerRegForm = props => {

    const [employerUser, setEmployerUser] = useState({
        company_name: "",
        description: "",
        industry: "",
        mission_statement: "",
        imgUrl: "",
        openPositions: ""
    });

    const handleChanges = event => {
        console.log("User: ", employerUser);
        setEmployerUser({
            ...employerUser,
            [event.target.name]: event.target.value
        });
    };

    const submitForm = event => {
        event.preventDefault();
        props.newEmployer({...employerUser, ...props.location.state})
        console.log("User to submit: ", employerUser);
    }

    return (
        <div>
            <HeaderWelcome />
            <form onSubmit={submitForm}>
                <label htmlFor="companyName">Company Name: </label>
                <input 
                    id="companyName"
                    type="text"
                    name="company_name"
                    onChange={handleChanges}
                    value={employerUser.company_name}
                    />
                <label htmlFor="description">Company Description: </label>
                <input 
                    id="description"
                    type="textarea"
                    name="description"
                    onChange={handleChanges}
                    value={employerUser.description}
                    />
                <label htmlFor="industry">Industry: </label>
                <input 
                    id="industry"
                    type="text"
                    name="industry"
                    onChange={handleChanges}
                    value={employerUser.industry}
                    />
                <label htmlFor="missionStatement">Mission Statement: </label>
                <input 
                    id="missionStatement"
                    type="text"
                    name="mission_statement"
                    onChange={handleChanges}
                    value={employerUser.mission_statement}
                    />
                <label htmlFor="imgUrl">Image: </label>
                <input 
                    id="imgUrl"
                    type="text"
                    name="imgUrl"
                    onChange={handleChanges}
                    value={employerUser.imgUrl}
                    />
                <label htmlFor="openPositions">Open Positions: </label>
                <input 
                    id="openPositions"
                    type="text"
                    name="openPositions"
                    onChange={handleChanges}
                    value={employerUser.openPositions}
                    />
                <button type="submit">Create Account</button>
            </form>
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

export default connect (mapStateToProps, {newEmployer})(EmployerRegForm)