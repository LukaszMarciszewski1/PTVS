import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import { makeStyles } from '@material-ui/core'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  titleContent: {
    display: 'flex',
    opacity: .9,
    alignItems: 'flex-end',
    margin: 10,
    maxWidth: 700,
    '@media (max-width: 1100px)' : {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justyContent: 'flex-end',
      margin: 10
    },
  },
  goToButton : {
    padding: 0,
    letterSpacing: 1,
    fontSize: '1.3rem',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 5,
    transition: '.2s',
    borderRadius: 0,
    '&:hover':{
      opacity: 1
    },
    '&:hover > *':{
      transform: 'translateX(10px)',
    }
  },
  icon: {
    fontSize: 40,
    transition: '.2s'
  }
}));


const Title = ({ toCategory, category}) => {
  const classes = useStyles();
  return (
    <div className={classes.titleContent}>
    <Link to={toCategory} className={classes.goToButton}>
     {category}
      <KeyboardArrowRightIcon className={classes.icon}/>
    </Link>
    {/* <Typography variant="h5" component="h2" className={classes.titleText}>
      {category}
    </Typography> */}
    {/* <Typography variant="subtitle1" style={{fontWeight:'lighter', opacity: .7}}>
      lorem ipsum dolor text example
    </Typography> */}
  </div>
  );
};
 
export default Title;