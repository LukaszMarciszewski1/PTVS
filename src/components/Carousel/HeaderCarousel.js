import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { makeStyles, withStyles, Link } from '@material-ui/core'
////////////////////////////////////////////////////

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { blue } from '@material-ui/core/colors';
import CardCarousel from './CardCarousel'


const useStyles = makeStyles((theme) => ({
  titleContent: {
    display: 'flex',
    opacity: .8,
    alignItems: 'flex-end',
    margin: 15,
    maxWidth: 700,
    '@media (max-width: 1100px)' : {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justyContent: 'flex-end',
      margin: 10
    },
  },
  titleText: {
    margin: '0 20px',
    '@media (max-width: 1100px)' : {
      margin: '15px 0 0',
    },
  },
  goToButton : {
    padding: '8px 20px',
  },

}));

const HeaderCarousel = (category) => {
  const classes = useStyles();
  return ( 
    <div className={classes.titleContent}>
      <Button 
        // component='a'
        // href="#"
        // variant="outlined" 
        // color="inherit"
        // className={classes.goToButton}
        // endIcon={<KeyboardArrowRightIcon/>}
      >
        Przejdź
      </Button>
      <Typography variant="h6" component="h2" className={classes.titleText}>
        {category}
      </Typography>
      <Typography variant="subtitle1" style={{fontWeight:'lighter', opacity: .7}}>
        lorem ipsum dolor text example
      </Typography>
    </div>
  );
}
 
export default HeaderCarousel;