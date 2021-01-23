import { Switch, Route } from "react-router-dom"
import { connect } from 'react-redux'
import NavBar from "./NavBar";
import Register from './Register'
import Login from './Login'
import Logout from './Logout'
import BlogsList from './Blog'
import { Redirect } from 'react-router-dom'

const Routes = ({ isLogged }) => {
    return (
        <div>
            <NavBar isLogged={isLogged}/>
            <Switch>
            <Route exact path='/' render={() => (<BlogsList />)} />
            {isLogged ? (
                <>
                <Route exact path='/register' render={() => (<Redirect to='/' />)} />
                <Route exact path='/login' render={() => (<Redirect to='/' />)} />
                <Route exact path='/logout' render={() => (<Logout />)} />
                </>
            ):(
                <>
                <Route exact path='/register' render={() => (<Register />)} />
                <Route exact path='/login' render={() => (<Login />)} />
                </>
            )}
                
            </Switch>
        </div>
    )
}

export default Routes
