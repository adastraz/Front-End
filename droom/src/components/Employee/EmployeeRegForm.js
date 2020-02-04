import React, {useState} from 'react'

const EmployeeRegForm = () => {


    const [employeeUser, setEmployeeUser] = useState({
        name: "",
        industry: "",
        experience: "",
        imgUrl: ""
    });


    //handle any changes made to inputs in the form
    const handleChanges = e => {
        console.log("User: ", employeeUser);
        setEmployeeUser({
            ...employeeUser,
            [e.target.name]: e.target.value
        });
    };


    //on submit
    const submitForm = e => {
        e.preventDefault();
        console.log("User to submit: ", employeeUser);
        
        //react 2 handle posting/etc
    }

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

export default EmployeeRegForm