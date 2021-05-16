import React from 'react';
import { makeStyles, Link, Paper, Typography, Avatar, Card, TextField, CardHeader, CardContent, Button} from '@material-ui/core'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import IconButton from '@material-ui/core/IconButton';
//images
import img from '../../assets/images/banner.jpg'
const useStyles = makeStyles((theme) => ({
  banner: {
    position: 'relative',
    flexGrow: 1,
    height: '350px',
    overflow: 'hidden',
    paddingTop: '60px',
    display: 'flex',
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
    letterSpacing: 2
  },
  p: {
    opacity: .6
  },
  playContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
}));

const Baner = () => {
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
            <PlayArrowIcon style={{ fontSize: 150, color: 'white' }}/>
          </IconButton>
        </div>
      </div>
     );
}
 
export default Baner;