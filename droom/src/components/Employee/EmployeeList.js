import React, {useEffect} from 'react';
import {fetchCompanyArray} from '../../actions'
import {connect} from 'react-redux'
import EmployerCard from '../Employer/EmployerCard'

const EmployeeList = props => {
    useEffect(() => {
        props.fetchCompanyArray()
    }, [])

    console.log(props.array)

    return (
        <div>
            {props.array.map(item => {
                return <EmployerCard item={item} key={item.id}/>
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        user: state.user,
        array: state.array,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchCompanyArray})(EmployeeList)