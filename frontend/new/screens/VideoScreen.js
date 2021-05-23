import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import data from '../data'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      minHeight: '100vh',
      color: 'white',
      display: 'flex',
      alignItems: 'center'
    },
    }));
const VideoScreen = (props) => {
    const classes = useStyles()
    const video = data.find((x) => x.id == props.match.params.id)
    
    if(!video){
        return <div>Wideo nie istnieje</div>
    }

    return ( 
        <div className={classes.root}>
           <img src={video.img}></img>
        </div>
     );
}
 
export default VideoScreen;