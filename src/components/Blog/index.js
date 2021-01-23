import React, {Fragment} from 'react'
import { connect } from 'react-redux'
import Blog from "./Blog"
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        justifyContent: 'center'
        
    },
    tabs: {
        color: '#40a9ff',
    },
    list: {
    }
}))

const BlogsList = ({ blogs }) => {
    const classes = useStyles()
    return (
        <Fragment>
            <List className={classes.root}>
                {blogs.map((bid) => (
                    <Fragment key={bid}>
                        <Blog bid={bid}/>
                    </Fragment>
                ))}
            </List>
        </Fragment>
    )
}

function mapStateToProps ({ blogs }) {
    let _blogs = Object.keys(blogs)
    return {
        blogs: _blogs
    }
  }

  export default connect(mapStateToProps)(BlogsList)
