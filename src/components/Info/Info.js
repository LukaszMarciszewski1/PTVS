import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    backgroundColor: '#0f151b',
    marginTop: 100,
    textTransform: 'uppercase',
    '@media (max-width: 1100px)' : {
      marginTop: 60,
    },
    '@media (max-width: 550px)' : {
      marginTop: 40,
    },
  },
  textContainer: {
    marginLeft: '9%',
    maxWidth: 1400,
    padding: '30px 10px',
    '@media (max-width: 1500px)' : {
      marginLeft: '5%',
    },
    '@media (max-width: 1100px)' : {
      marginLeft: '3%',
    },
    '@media (max-width: 550px)' : {
      marginLeft: 15,
    },
  },
  span: {
   fontWeight: '700',
   fontSize: '1.8rem',
  }
}));


export default function Info() {
  const classes = useStyles()
    return (
        <div className={classes.container}>
        <div className={classes.textContainer}>
        <Typography variant='subtitle1' component='h3' gutterBottom>
            Polska Telewizja Społeczna
        </Typography>
        <Typography variant='h5' component='h3'>
            <span className={classes.span}>bez reklam i bez polityki</span>
        </Typography>
        </div>
        </div>
    )
}
