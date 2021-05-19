import React, { useState } from 'react';
import { makeStyles, Avatar, Card, TextField, CardHeader, CardContent, Button} from '@material-ui/core'


const useStyles = makeStyles({
    footer: {
         width: '100%',
         minHeight: 300,
         backgroundColor: 'black',
    },
  })

const Footer = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.footer}></div>
     );
}
 
export default Footer;