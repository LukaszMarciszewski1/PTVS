import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    minHeight: 500,
  },
  title: {
    fontWeight: 500,
    color: theme.colors.lightGrey,
  },
  description: {
    padding: '15px 0',
    borderBottom: theme.border,
    color: theme.colors.grey,
  },
}))

const ActiveVideo = ({ video, children }) => {
  const classes = useStyles()

  const countryProduction = video.production_countries
    ?.map((country) => country.name)
    .join(', ')

  return (
    <div className={classes.root}>
      <div className={classes.video}>{children}</div>
      <div className={classes.description}>
        <Typography
          gutterBottom
          variant='h5'
          component='h3'
          className={classes.title}
        >
          {video.title}
        </Typography>
        <Typography variant='subtitle2'>
          {`Release date: ${video.release_date}`}
        </Typography>
        <Typography
          variant='subtitle2'
          gutterBottom
          styles={{ marginBottom: '10px' }}
        >
          Production: {countryProduction}
        </Typography>
      </div>
    </div>
  )
}

export default ActiveVideo
