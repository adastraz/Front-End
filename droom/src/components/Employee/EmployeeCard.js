import React from 'react'

const EmployeeCard = props => {
    return (
        <div>
            <div>
                <h1>{props.item.name}</h1>
                <img src={props.item.imgUrl}/>
            </div>
            <h1>{props.item.industry}</h1>
            <h1>{props.item.experience}</h1>
        </div>
    )
}

export default EmployeeCard