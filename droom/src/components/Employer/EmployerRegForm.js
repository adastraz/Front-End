import React, {useState} from 'react'

const EmployerRegForm = () => {


    const [employerUser, setEmployerUser] = useState({
        company_name: "",
        description: ""
    });


    //handle any changes made to inputs in the form
    const handleChanges = event => {
        console.log("User: ", employerUser);
        setEmployerUser({
            ...employerUser,
            [event.target.name]: event.target.value
        });
    };


    //on submit
    const submitForm = event => {
        event.preventDefault();
        setEmployerUser({company_name: "", description: ""});
        console.log("User to submit: ", employerUser);
        
        //react 2 handle posting/etc
    }

    return (
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
            <button type="submit">Create Account</button>
        </form>
    )
}

export default EmployerRegForm