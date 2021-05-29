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
  titleText: {
    margin: '0 20px',
    // fontSize: '1.8rem',
    '@media (max-width: 1100px)' : {
      margin: '15px 0 0',
    },
  },
  goToButton : {
    padding: 0,
    letterSpacing: 1,
    // border: '1px solid grey',
    // borderLeft: '1px solid grey',
    fontSize: '1.3rem',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 5,
    transition: '.2s',
    // opacity: .9,
    borderRadius: 0,
    '&:hover':{
      opacity: 1
      // backgroundColor: 'rgba(31, 41, 56, .2)',
    }
  },

}));


const Title = ({ toCategory, category}) => {
  const classes = useStyles();
  return (
    <div className={classes.titleContent}>
    <Link to={toCategory} className={classes.goToButton}>
     {category}
      <KeyboardArrowRightIcon style={{paddingLeft: "10px", fontSize: 40}}/>
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