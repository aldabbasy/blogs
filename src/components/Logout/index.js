import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { unsetAuthedUser } from '../../actions/authedUser'
const Logout = ({dispatch}) => {
    useEffect(() => {
        dispatch(unsetAuthedUser())
        sessionStorage.removeItem('loggedUser')
      }, [])

    return (
        <Redirect to='/login' />
    )
}

export default connect()(Logout)
