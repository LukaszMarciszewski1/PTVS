import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
// import logo from '/logo.svg';
//darken - #10171d
//dark - #121A21
//violet - #22263B
//blue btn - #1322FF
//violet light - #2D304A

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    width: '100%',
    zIndex: 999,
    top: 0,
    marginBottom: 80
  },
  appBar: {
    backgroundColor: '#0f151b',
  },
  menuButton: {
    fontSize: 30
  },
  menuIcon: {
   fontSize: 35
  },
  logo: {
    maxHeight: 50
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  toolBar:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 80

  }
}));

const Navbar = () => {
    const classes = useStyles();
    return ( 
      <div className={classes.root}>
          <AppBar position="static" className={classes.appBar} elevation={2}>
            <Toolbar className={classes.toolBar}>
                    <Link to="/" className={classes.logoContainer}>
                      <img src='/logo.svg' alt="logo" className={classes.logo}/>
                    </Link>
                {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon className={classes.menuIcon}/>
                </IconButton> */}
            </Toolbar>
          </AppBar>
          </div>
     );
}
 
export default Navbar;