import React, {useState, useEffect} from 'react' 
import {connect} from 'react-redux'
import {fetchUserArray} from '../../actions'

const EmployerList = props => {
    useEffect(() => {
        props.fetchUserArray()
    },[])
    console.log(props.array)
    return(
        <>

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
