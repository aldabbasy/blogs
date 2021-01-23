import React, { Fragment, useState } from 'react';

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Alert from '@material-ui/lab/Alert'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { connect } from 'react-redux'

import { handleAuthenticateUser } from '../../actions/shared'

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}))

const Login = ({dispatch, isLogged}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [openError, setOpenError] = useState(false)
    const classes = useStyles()
    const handleSubmit = (e) => {
        e.preventDefault()
        let _user = {
            username,
            password
        }
        dispatch(handleAuthenticateUser(_user))
        setOpenError(true)
    }

    return (
        <Fragment>
        <Collapse in={openError}>
            <Alert severity="error" action={
                <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                    setOpenError(false);
                }}
                >
                <CloseIcon fontSize="inherit" />
                </IconButton>
            }>
                invalid username/password
            </Alert>
        </Collapse>
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="off"
                    autoFocus
                    value={username}
                    onInput={ e => setUsername(e.target.value.trim())}
                />
                <TextField
                value={password}
                onChange={(e) => {setPassword(e.target.value.trim())}}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="off"
                />
                <Button onClick={(e) => {handleSubmit(e)}} className={classes.submit} type="submit" disabled={username === '' || password === ''} fullWidth variant="contained" color="primary">
                    Log in
                </Button>
            </div>
        </Container>
        </Fragment>
        
    )
}
function mapStateToProps ({ authedUser }) {
    return {
      isLogged: authedUser !== null
    }
  }
  
  
export default connect(mapStateToProps)(Login)
