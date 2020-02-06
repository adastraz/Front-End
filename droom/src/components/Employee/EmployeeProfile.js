import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { editUser, fetchUser, deleteUser } from '../../actions'
import { useParams } from 'react-router-dom'
import { Card, Button, CardTitle, CardText } from 'reactstrap'


const EmployeeProfile = props => {
    console.log("I AM A PROPS FROM EMPLOYEE PROFILE", props.user)
   
    const [editing, setEditing] = useState(false)
    const [userToEdit, setUserToEdit] = useState({})
    
    
    let {id} = useParams();
    
    useEffect(() => {
        props.fetchUser(id);
    }, [])
    
    const userEdit = () => {
        setEditing(true);
    };
    
    const saveEdit = e => {
        e.preventDefault();
        props.editUser(userToEdit, id)
        setEditing(false)
    }
    
    const handleChange = e => {
        setUserToEdit({...userToEdit, [e.target.name]: e.target.value})
    }
    
    const deleteU = () => {
        props.deleteUser(id)
    }

    return (
        <div className='profile profileimage'>
            <h2 className='profiletext'>Your Profile</h2>
            <Card body inverse className='text-center profileCard'>
                <div className='imgname'>
                    <img src={props.user.imgUrl} alt='employee profile'/>
                    <h1>{props.user.name}</h1>
                </div> 
                <div>
                    <h2>{props.user.industry}</h2>
                    <h2>{props.user.experience}</h2>
                </div>
                <div>
                    <Button className='button' onClick={userEdit}>Edit</Button>
                    <Button className='button' onClick={deleteU}>Delete</Button>
                </div>
            </Card>

            {editing && (
                <form onSubmit={saveEdit}>
                    <legend>edit user</legend>
                    <label>
                        Name:
                        <input
                            onChange={handleChange}
                            value={userToEdit.name}
                            name="name"
                        />
                    </label>
                    <label>
                        Image:
                        <input
                            onChange={handleChange}
                            name="imgUrl"
                            value={userToEdit.imgUrl}
                        />
                    </label>
                    <label>
                        Industry:
                        <input
                            onChange={handleChange}
                            name="industry"
                            value={userToEdit.industry}
                        />
                    </label>
                    <label>
                        Experience:
                        <input
                            onChange={handleChange}
                            name="experience"
                            value={userToEdit.experience}
                        />
                    </label>
                    <div className="button-row">
                        <button type="submit">save</button>
                        <button onClick={() => setEditing(false)}>cancel</button>
                    </div>
                </form>
            )}
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

 export default connect(mapStateToProps, {deleteUser, fetchUser, editUser})(EmployeeProfile)