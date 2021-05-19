import React, { useState } from 'react';
import { makeStyles, Avatar, Card, TextField, CardHeader, CardContent, Button} from '@material-ui/core'


const useStyles = makeStyles({
    footer: {
         width: '100%',
         minHeight: 100,
         backgroundColor: 'rgb(33, 44, 61)',
         marginTop: 200
    },
  })

const Patronite = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.footer}></div>
     );
}
 
export default Patronite;