import React from 'react'
import { Link } from 'react-router-dom'
import {
  makeStyles,
  ButtonBase,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  imgContainer: {
    width: 100,
    height: 60,
    padding: 0,
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  paper: {
    padding: 10,
    marginTop: 8,
    margin: 'auto',
    width: 350,
    backgroundColor: 'transparent',
    color: grey[400],
    transition: '.2s',
    borderRadius: 4,
    '@media (max-width: 1100px)': {
      width: '100%',
    },
    '&:hover': {
      backgroundColor: theme.colors.cardListBg,
      color: grey[200],
    },
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
  },
  caption: {
    fontSize: 11,
  },
  active: {
    color: grey[200],
    backgroundColor: theme.colors.colorSTactive,
  },
}))

const CardList = ({ data, active, category }) => {
  const classes = useStyles()
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/w342'
  return (
    <div>
      {data.map((card) =>
        card.genre_ids[0] === category ? (
          <div
            className={card.id === active ? classes.active : null}
            key={card.id}
          >
            <Link to={`/video/${card.id}`}>
              <Paper elevation={0} className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase className={classes.imgContainer}>
                      <img
                        className={classes.img}
                        alt='img'
                        src={IMAGE_PATH + card.poster_path}
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={8} sm container>
                    <Grid item xs container direction='column' spacing={2}>
                      <Grid item xs>
                        <Typography
                          variant='caption'
                          component='p'
                          gutterBottom
                          className={classes.caption}
                        >
                          {`Release date: ${card.release_date}`}
                        </Typography>
                        <Typography
                          gutterBottom
                          variant='subtitle1'
                          component='p'
                          className={classes.title}
                        >
                          {card.title}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Link>
          </div>
        ) : (
          []
        )
      )}
    </div>
  )
}

export default CardList
