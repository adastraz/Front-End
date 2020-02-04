// this was for testing delete when you want

import React from 'react'

const EmployerRegForm = (props) => {
    console.log('location', props.location)
    return (
        <>{props.location.state.username}</>
    )
}

export default EmployerRegForm