import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    // padding: 40,
    width: '100%',
    backgroundColor: '#0f151b',
    marginTop: 100,
    textTransform: 'uppercase',
    // display: 'flex',
    // justyfiContent: 'center'
    // borderTop: '1px solid rgba(150, 150, 150, 0.4)',
  },
  textContainer: {
    marginLeft: '9%',
    maxWidth: 1400,
    // margin: '0 auto',
    padding: '30px 10px',
    // textAlign: 'center'
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
