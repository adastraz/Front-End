import React from 'react'
import {Card} from 'reactstrap'

const EmployeeCard = props => {
    return (
        <div className='profile profilecolor'>
            <Card body inverse className='text-center profileCard'>
                <div className='imgname'>
                    <img src={props.item.imgUrl} alt='employee profile'/>
                    <h1>{props.item.name}</h1>
                </div> 
                <div>
                    <h2>{props.item.industry}</h2>
                    <h2>{props.item.experience}</h2>
                </div>
            </Card>
        </div>
    )
}

export default EmployeeCard