import {Fragment} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  link: {
    flexGrow: 1,
    margin: 1
  },
}))

function NavBar({ isLogged }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Link to={`/`} style={{ textDecoration: 'none', color:'white' }} > 
                blogs
              </Link>
            </Typography>
            {isLogged ? (
            <Fragment>
                <Link to={`/logout`} style={{ textDecoration: 'none', color:'white' }} >
                  <Button color="inherit" >
                    Logout
                  </Button>
                </Link>
            </Fragment>
            ) : (
              <Fragment>
                <Link to={`/login`} style={{ textDecoration: 'none', color:'white' }} >
                  <Button color="inherit" >
                    Login
                  </Button>
                </Link>
                <Link to={`/register`} style={{ textDecoration: 'none', color:'white' }} >
                  <Button color="inherit" >
                    Register
                  </Button>
                </Link>
              </Fragment>
            )}
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default NavBar
