import { combineReducers } from 'redux'
import users from './users'
import blogs from './blogs'
import authedUser from './authedUser'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
    authedUser,
    users,
    blogs,
    loadingBar: loadingBarReducer
})