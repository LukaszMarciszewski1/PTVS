import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import { makeStyles, withStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles((theme) => ({
  carouselButtonGroup: {
    position: 'absolute',
    top: -50,
    right: 0,
    '@media (max-width: 550px)' : {
      left: 10,
    },
  },
  carouselButton: {
    backgroundColor: 'rgb(33, 44, 61)',
    marginRight: 20,
    '@media (max-width: 1100px)' : {
      marginRight: 10,
    },
    "&:disabled" : {
      opacity: .4,
      color: 'inherit',
      backgroundColor: 'rgb(33, 44, 61)',
    }
  },

}));

const ButtonGroup = ({ next, previous, ...rest }) => {
  const classes = useStyles();
  const { carouselState: { currentSlide, totalItems, slidesToShow } } = rest;
  return (
    <div className={classes.carouselButtonGroup}>
      <Button 
        variant="contained" 
        color="primary"
        className={classes.carouselButton}
        disabled ={ currentSlide === 0 ? true : false}
        onClick={() => previous()}
      >
        <KeyboardArrowLeftIcon/>
      </Button>
      <Button 
        className={classes.carouselButton}
        disabled ={ currentSlide === totalItems - slidesToShow ? true : false}
        variant="contained" 
        color="primary"
        onClick={() => next()}>
        <KeyboardArrowRightIcon/>
      </Button>
    </div>
  );
};
 
export default ButtonGroup;