import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../assets/images/logo.svg'
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
    zIndex: 999
  },
  appBar: {
    backgroundColor: '#10171d',
    backgroundColor: '#121a21',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    maxHeight: 40
  }
}));

const Navbar = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
        <AppBar position="static" className={classes.appBar} elevation={2}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              {/* <img src={logo} alt="logo" className={classes.logo}/> */}
              PTVS
            </Typography>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
          </Toolbar>
        </AppBar>
      </div>
     );
}
 
export default Navbar;