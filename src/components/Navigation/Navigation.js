import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Avatar, Card, TextField, CardHeader, CardContent, Button, Typography, Paper} from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { shadows } from '@material-ui/system';
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 70,
    // flexGrow: 1,
    width: '70%',
    padding: 20,
    display: 'flex',
    alignItems: 'center'
  },
  arrow: {
    marginRight: 30,
    padding: 20,
    borderRight: '1px solid grey',
    '@media (max-width: 550px)' : {
      padding: 10,
      marginRight: 20,

    },
  },
  title: {
    paddingLeft: 30,
    borderLeft: '1px solid grey',
    opacity: .7,
    letterSpacing: 2,
    '@media (max-width: 550px)' : {
      padding: 10,
      paddingLeft: 20,
      fontSize: 16
    },
  }
}));

const  Navigation = ({categoryName}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }; 

  return (
    <div className={classes.root}>
        <Link to="/">
          <IconButton color="inherit" aria-label="back" className={classes.arrow}>
            <ArrowBackIcon />
          </IconButton>
        </Link>
      <Typography variant="h6" component="h2" className={classes.title}>{categoryName}</Typography>
    </div>
  );
}
 
export default Navigation;