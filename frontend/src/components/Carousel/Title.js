import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import { makeStyles, withStyles } from '@material-ui/core'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';


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
    padding: '6px 25px',
    border: '1px solid grey',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 5,
    transition: '.2s',
    '&:hover':{
      backgroundColor: 'rgb(31, 41, 56)',
    }
  },

}));

const Title = ({ toCategory, category}) => {
  const classes = useStyles();
  return (
    <div className={classes.titleContent}>
    <Link to={toCategory} className={classes.goToButton}>
      Przejdź
      <KeyboardArrowRightIcon style={{paddingLeft: "10px", fontSize: 30}}/>
    </Link>
    <Typography variant="h6" component="h2" className={classes.titleText}>
      {category}
    </Typography>
    <Typography variant="subtitle1" style={{fontWeight:'lighter', opacity: .7}}>
      lorem ipsum dolor text example
    </Typography>
  </div>
  );
};
 
export default Title;