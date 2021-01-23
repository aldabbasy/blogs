import { showLoading, hideLoading } from 'react-redux-loading'
import { recieveUsers, registerUser } from './users'
import { recieveBlogs } from './blogs'
import { setAuthedUser } from './authedUser'
import { registerUser as registerUserAPI, authenticateUser, getInitialData } from "../utils/callingAPI"

export function handleInitialData() {
    
    return (dispatch, getState) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, blogs })=> {
                dispatch(recieveUsers(users))
                dispatch(recieveBlogs(blogs))
                dispatch(hideLoading())
        })
    }
}

export const handleRegisterUser = (user) => {
    return(dispatch, getState) => {
        dispatch(showLoading())
        registerUserAPI(user).then((res) => {
            user.id = res.id
            user.password = res.password
            dispatch(registerUser(user))
            dispatch(setAuthedUser(user.id))
            dispatch(hideLoading())
        })
        
    }
}

export const handleAuthenticateUser = (user) => {
    return(dispatch, getState) => {
        dispatch(showLoading())
        authenticateUser(user).then((res) => {
            dispatch(setAuthedUser(res))
            dispatch(hideLoading())
            sessionStorage.setItem('loggedUser', res)
            
        }).catch((error) => {
            dispatch(hideLoading())
        })
    }
}