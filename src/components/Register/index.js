
import { useState, Fragment } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Alert from '@material-ui/lab/Alert'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

import { handleRegisterUser } from "../../actions/shared"
import { connect } from 'react-redux'

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const Register = ({ dispatch }) => {
    const classes = useStyles()

    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)
    const [openError, setOpenError] = useState(false)
    const [openSucces, setOpenSuccess] = useState(false)

    const checkIfValid = () => {
        setOpenError(false)
        if(firstname === '' || lastname === '' || username === '' || password === '')
        {
            setOpenError(true)
            return false
        }
        return true
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setOpenSuccess(false)
        if(!checkIfValid()){
            return false
        }

        let _user = {
            id:0,
            firstname,
            lastname,
            username,
            password,
            isAdmin
        }

        dispatch(handleRegisterUser(_user))
        setOpenSuccess(true)
        
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
              kindly fill all required fields
            </Alert>
        </Collapse>
        <Collapse in={openSucces} >
            <Alert severity="success" action={
                <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                    setOpenSuccess(false);
                }}
                >
                <CloseIcon fontSize="inherit" />
                </IconButton>
            }>
              Success - User Registerd Successfuly
            </Alert>
        </Collapse>
        <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Sign up
            </Typography>
            <form className={classes.form} noValidate>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <TextField
                    value={firstname}
                    onChange={(e) => {setFirstName(e.target.value.trim())}}
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    value={lastname}
                    onChange={(e) => {setLastName(e.target.value.trim())}}
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    value={username}
                    onChange={(e) => {setUserName(e.target.value.trim())}}
                    variant="outlined"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="uname"
                />
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12}>
                <FormControlLabel
                    control={<Checkbox value={isAdmin} onChange={() => {setIsAdmin(!isAdmin)}} color="primary" />}
                    label="is Admin?"
                />
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={(e) => {handleSubmit(e)}}
            >
                Sign Up
            </Button>
            <Grid container justify="flex-end">
                <Grid item>
                <Link to={`/login`} variant="body2">
                    Already have an account? Sign in
                </Link>
                </Grid>
            </Grid>
            </form>
        </div>
        </Container>
    </Fragment>
    )
}

export default connect()(Register)