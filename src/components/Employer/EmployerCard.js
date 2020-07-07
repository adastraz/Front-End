import React from 'react'
import { Card }from 'reactstrap'

const EmployerCard = props => {
    return (
        <div className='profile profilecolor'>
                <Card body inverse className='text-center profileCard'>
                    <div className='imgname'>
                        <img src={props.item.imgUrl} alt='employee profile'/>
                        <h1>{props.item.company_name}</h1>
                    </div> 
                    <div>
                        <h2>{props.item.mission_statement}</h2>
                        <h2>{props.item.industry}</h2>
                        <h2>{props.item.description}</h2>
                    </div>
                    <div>
                        <h3>{props.item.openPositions}</h3>
                    </div>
                </Card>
        </div>
    )
}

export default EmployerCard