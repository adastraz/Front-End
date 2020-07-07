import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { editCompany, fetchCompany, deleteCompany } from '../../actions'
import { useParams } from 'react-router-dom'
import { Card, Button } from 'reactstrap'
import EmployerHeader from './EmployerHeader'

const EmployerProfile = props => {
    console.log("I AM A PROPS FROM EMPLOYER PROFILE", props)

    const [editing, setEditing] = useState(false)
    const [userToEdit, setUserToEdit] = useState({})

    let {id} = useParams();
    
    useEffect(() => {
        props.fetchCompany(id)
    }, [])
    
    const editCompany = () => {
        setEditing(true)
    }
    
    const saveEdit = e => {
        e.preventDefault()
        props.editCompany(userToEdit, id)
        setEditing(false)
    }
    
    const handleChange = e => {
        setUserToEdit({...userToEdit, [e.target.name]: e.target.value})
    }
    
    const deleteU = () => {
        props.deleteCompany(id)
    }

    return (
        <>
            <EmployerHeader />
            <div className='profile profileimage'>
                <h2 className='profiletext'>Your Profile</h2>
                <Card body inverse className='text-center profileCard'>
                    <div className='imgname'>
                        <img src={props.user.imgUrl} alt='employee profile'/>
                        <h1>{props.user.company_name}</h1>
                    </div> 
                    <div>
                        <h2>{props.user.mission_statement}</h2>
                        <h2>{props.user.industry}</h2>
                        <h2>{props.user.description}</h2>
                    </div>
                    <div>
                        <h3>{props.user.openPositions}</h3>
                    </div>
                    <div>
                        <Button className='button' onClick={editCompany}>Edit</Button>
                        <Button className='button' onClick={deleteU}>Delete</Button>
                    </div>
        
                    {editing && (
                        <form onSubmit={saveEdit}>
                            <legend>edit user</legend>
                            <label>
                                Company Name:
                                <input
                                    onChange={handleChange}
                                    value={userToEdit.name}
                                    name="company_name"
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
                                Mission Statement:
                                <input
                                    onChange={handleChange}
                                    name="mission_statement"
                                    value={userToEdit.mission_statement}
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
                                    Description:
                                    <input
                                        onChange={handleChange}
                                        name="description"
                                        value={userToEdit.description}
                                    />
                                </label>
                            <div className="button-row">
                                <button type="submit">save</button>
                                <button onClick={() => setEditing(false)}>cancel</button>
                            </div>
                        </form>
                    )}
                </Card>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        user: state.user,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchCompany, editCompany, deleteCompany })(EmployerProfile)