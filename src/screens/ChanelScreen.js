import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../components/TabPanel/TabPanel'
import Grid from '@material-ui/core/Grid';
import Video from '../components/Video/Video'
import data from '../data'
import { Link } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { SubjectOutlined } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: 90,
  },
  appBar: {
    marginBottom: 30,
    width: '100%',
    zIndex: 0,
    minHeight: 80,
    borderBottom: '1px solid rgba(150, 150, 150, 0.4)'
  },

  tab: {
   opacity: .6,
   cursor: 'pointer',
   textTransform: 'none',
   fontWeight: theme.typography.fontWeightLight,
   fontSize: theme.typography.pxToRem(16),
   marginRight: theme.spacing(1),
   transition: '.2s',
    '&:focus': {
      opacity: 1,

    },
    '&:selected': {
      opacity: 1,
      background: 'transparent',
    },
    '@media (max-width: 550px)' : {
      marginRight: theme.spacing(0),
    },
  },

}));

const StyledTabs = withStyles({
  root: {
      padding: '15px 20px',
      // margin: '0 auto',
      "& .MuiTabScrollButton-root:first-child": {
          backgroundColor: '#1f2c3885',
      },
      "& .MuiTabScrollButton-root:last-child": {
          backgroundColor: '#1f2c3885',
      },
  },
  indicator: {
      display: 'none',
  },

})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const ChanelScreen = ({children}) => {
  const menuItems = [
    {
        name: 'Nauka i technika',
        path: '/Nauka-i-Technika'
    },
    {
        name: 'Kultura i sztuka',
        path: '/Kultura-i-sztuka'
    },
    {
      name: 'Praca i przedsiębiorczość',
      path: '/Przedsiebiorczosc-i-praca'
    },
    {
      name: 'Zdrowie i ekologia',
      path: '/Zdrowie-i-ekologia'
    },
    {
      name: 'Turystyka i rekreacja',
      path: '/Turystyka-i-rekreacja'
    },
    {
      name: 'Kanał sprzedażowy',
      path: '/Kanal-sprzedazowy'
    },
]

   const classes = useStyles()
   const history = useHistory()
   const location = useLocation()

   const currentTab = menuItems.findIndex(tab => tab.path === location.pathname);

   const [value, setValue] = useState(currentTab);
   const handleChange = (event, newValue) => {
     setValue(newValue);
   };

    return ( 
      <div className={classes.root}>
      <AppBar position="static" color="transparent" elevation={1} className={classes.appBar}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
         {menuItems.map(item => (
          <Tab
            key={item.name} 
            onClick={()=> history.push(item.path)}
            disableRipple={true}
            // className={location.pathname === item.path ? classes.active : classes.listItem}
            label={item.name}
            className={classes.tab}
            >
          </Tab>
         ))}
        </StyledTabs>
      </AppBar>
      {children}
      </div>
  );
}
 
export default ChanelScreen;



{/* <div className={classes.root}>
<AppBar position="static" color="transparent" elevation={1} className={classes.appBar}>
 <Toolbar
  className={classes.toolBar}
 >
     <List className={classes.list}>
        {menuItems.map(item => (
          <ListItem 
            key={item.name} 
            onClick={()=> history.push(item.path)}
            className={location.pathname === item.path ? classes.active : classes.listItem}
            >
             <ListItemText primary={item.name} className={classes.listItemText}/>
          </ListItem>
        ))}
     </List>
 </Toolbar>
</AppBar>
{children}
</div> */}