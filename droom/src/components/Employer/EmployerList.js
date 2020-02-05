import React, {useEffect} from 'react' 
import {connect} from 'react-redux'
import {fetchUserArray} from '../../actions'
import EmployeeCard from '../Employee/EmployeeCard'

const EmployerList = props => {
    useEffect(() => {
        props.fetchUserArray()
    },[])
    console.log(props.array)
    return(
        <>
            {props.array.map(item => {
                return <EmployeeCard key={item.id} item={item} />
            })}
        </>
    )
}

const mapStateToProps = state => {
    return {
        isLocation: state.isLocation,
        user: state.user,
        error: state.error,
        array: state.array
    }
}

export default connect(mapStateToProps, {fetchUserArray})(EmployerList)
