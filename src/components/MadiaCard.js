import React, { useState } from 'react';
import { makeStyles, Avatar, Card, TextField, CardHeader, CardContent, Button} from '@material-ui/core'
import ReactPlayer from 'react-player'
import { Player } from 'video-react';
// import '~video-react/dist/video-react.css';
const useStyles = makeStyles({
    card: {
         width: '100%',
         maxWidth: 700,
         minHeight: 400,
         backgroundColor: '#121a21',
         backgroundColor: 'rgb(31, 41, 56)',
         marginTop: 30,
         marginLeft: 30
    },
  })

const MediaCard = (video) => {
    const classes = useStyles();
    return ( 
        <Card className={classes.card} elevation={3}>
        </Card>
     );
}
 
export default MediaCard;