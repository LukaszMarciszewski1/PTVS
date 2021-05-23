import React from 'react';
import { makeStyles } from '@material-ui/core'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import IconButton from '@material-ui/core/IconButton';
import img from '../../assets/images/banner.jpg'

const useStyles = makeStyles((theme) => ({
  banner: {
    position: 'relative',
    flexGrow: 1,
    height: '350px',
    overflow: 'hidden',
    display: 'flex',
    marginTop: 60,
  },
  img: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '100%',
    minHeight: '100%',
    zIndex: -1
  },
  textContainer: {
    position: 'relative',
    width: '60%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 1100px)' : {
      width: '80%'
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#121a21c4',
    }
  },
  text: {
    zIndex: 1,
    padding: 30,
    letterSpacing: 2,
    '@media (max-width: 550px)' : {
      padding: 20,
    },
  },
  h1: {
    '@media (max-width: 1100px)' : {
      fontSize: '2rem'
    },
    '@media (max-width: 550px)' : {
      fontSize: '1.8rem'
    },
  },
  p: {
    opacity: .6,
    '@media (max-width: 1100px)' : {
      fontSize: 14
    },
  },
  playContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  play : {
    fontSize: 150,
    color: 'white',
    '@media (max-width: 1100px)' : {
      fontSize: 100
    },
    '@media (max-width: 550px)' : {
      fontSize: 70
    },
  }
}));

const Baner = ({img}) => {
    const classes = useStyles();
    return ( 
      <div className={classes.banner}> 
        <img className={classes.img} src={img} alt='najnowsze video'/>
        <div className={classes.textContainer}>
          <div className={classes.text}>
            <h1 className={classes.h1}>Najnowsze video</h1>
            <p className={classes.p}>Lorem Ipsum is simply dummy text of the printing and typesetting. <br/> 
            It was popularised in the 1960s</p>
          </div>
        </div>
        <div className={classes.playContainer}>
          <IconButton aria-label="play arrow icon" color="primary">
            <PlayArrowIcon className={classes.play}/>
          </IconButton>
        </div>
      </div>
     );
}
 
export default Baner;