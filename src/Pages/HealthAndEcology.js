import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Navigation from '../components/Navigation/Navigation'
import MediaPage from '../Layouts/MediaPage'
//darken - #10171d
//dark - #121A21
//violet - #22263B
//blue btn - #1322FF
//violet light - #2D304A

const useStyles = makeStyles((theme) => ({
  culture: {
    // width:'100%',
    // minHeight: '100vh',
    // backgroundColor: 'yellow'
  },

}));

const HealthAndEcology = () => {
  const classes = useStyles();
    return ( 
        <div className={classes.culture}>
          <Navigation categoryName={"Zdrowie i ekologia"}/>
          <MediaPage/>
        </div>
     );
}
 
export default HealthAndEcology;