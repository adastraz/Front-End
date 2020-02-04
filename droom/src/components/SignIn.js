import React, {useState} from "react";

function SignIn(props) {


    const [user, setUser] = useState({
        username: '',
        password: '',
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
    const submitForm = event => {
        event.preventDefault();
        console.log("User to submit: ", user);
        setUser({username:  "", password: ""})

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

        </form>

    );


}

export default SignIn