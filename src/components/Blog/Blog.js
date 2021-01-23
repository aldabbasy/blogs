import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 500,
    maxWidth: 500,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}))

const Blog = ({ blog, author }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {author.username[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <KeyboardArrowRightIcon />
          </IconButton>
        }
        title={blog.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {blog.description}
        </Typography>
      </CardContent>
    </Card>
  )
}

function mapStateToProps ({ blogs, users }, { bid }) {
    let blog = blogs[bid]
    let author = users[blog.author - 1]
    console.log(users)
    return {
        blog,
        author
    }
}

export default connect(mapStateToProps)(Blog)
