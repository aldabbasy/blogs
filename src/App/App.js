import { Fragment, useEffect, useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { setAuthedUser } from '../actions/authedUser'
import Routes from "../components/Routes"
import { handleInitialData } from '../actions/shared'

const App = ({dispatch, isLogged}) => {

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    dispatch(handleInitialData())
    const _user = sessionStorage.getItem('loggedUser')
    if(_user) {
      dispatch(setAuthedUser(_user))
    }
    setLoaded(true)
  }, [])

  return (
    <Fragment>
      <CssBaseline />
      <LoadingBar />
      {loaded && (<Routes isLogged={isLogged}/>)}
      
    </Fragment>
  )
}
function mapStateToProps ({ authedUser }) {
  return {
    isLogged: authedUser !== null
  }
}


export default connect(mapStateToProps)(App)