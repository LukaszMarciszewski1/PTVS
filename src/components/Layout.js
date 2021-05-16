import React from 'react';
import { makeStyles, Drawer, Divider, AppBar, Toolbar, Typography} from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { SubjectOutlined } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router';


const drawerWidth = 250

const useStyles = makeStyles((theme) => (
  {
    root: {
        display: 'flex'
    },
    page: {
        backgroundColor: '#f9f9f9',
        width: '100%',
        minHeight: `100vh`,
        padding: theme.spacing(4)
    },
    drawer: {
        width: drawerWidth
    },
    drawerPaper: {
        width: drawerWidth
    },
    active: {
        background: '#f4f4f4'
    },
    logo: {
        padding: theme.spacing(2)
    },
    appbar: {
        width: `calc(100% - ${drawerWidth}px)`
    },
    toolbar: theme.mixins.toolbar ,
  }
))

const Layout = ({children}) => {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    //navigation items content
    const menuItems = [
        {
            name: 'Start',
            icon: <SubjectOutlined color= 'secondary' />,
            path: '/'
        },
        {
            name: 'Task list',
            icon: <SubjectOutlined color= 'secondary' />,
            path: '/to-do-list'
        }
    ]

    //appbar name
    return ( 
        <div className={classes.root}>
          <AppBar className={classes.appbar} elevation={1}>
              <Toolbar>
                  <Typography/>
              </Toolbar>
          </AppBar>

          {/* //sidebar nav */}
        
          <Drawer
            className={classes.drawer}
            variant='permanent'
            anchor='left'
            classes={{paper: classes.drawerPaper}}
          >
            {/* //logo */}
            <div>
                <Typography variant='h5' className={classes.logo}>
                    LOGO
                </Typography>
            </div>
            <Divider />
            <List>
               {menuItems.map(item => (
                 <ListItem 
                   key={item.name} 
                   button
                   onClick={()=> history.push(item.path)}
                   className={location.pathname === item.path ? classes.active : null}
                   >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name}/>
                 </ListItem>
               ))}
            </List>
            <Divider />
          </Drawer>

          {/* //pages */}
          <div className={classes.page}>
            <div className={classes.toolbar}></div>
            {children}
          </div>
        </div>
     );
}
 
export default Layout;