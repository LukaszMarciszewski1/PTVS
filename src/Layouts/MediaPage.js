import React, { useState } from 'react';
import { makeStyles, Avatar, Card, TextField, CardHeader, CardContent, Button} from '@material-ui/core'
import MediaCard from '../components/MadiaCard'
import { ReactVideo } from "reactjs-media";
import { ReactAudio } from "reactjs-media";
import video from '../assets/video/SpotPTVS2.mp4'
// import videoFile from "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"

const useStyles = makeStyles({
    container: {
         width: '70%',
         padding: 30,
        //  minHeight: 500,
         display: 'flex',
         justifyContent: 'center',
         '@media (max-width: 550px)' : {
            padding: 20,
            width: '100%',
          },
    },
    media: {
        maxWidth: 1000,
        minWidth: 300,
        maxHeight: 500
    }
  })

const MediaContainer = () => {
    const classes = useStyles();
    const [videoFilePath, setVideoFilePath] = useState(null);
    // const handleVideoUpload = (event) => {
    // setVideoFilePath(URL.createObjectURL(video))};
    return ( 
        <div className={classes.container}>
            <ReactVideo
            className={classes.media}
                src={video}
                poster="ptvs"
                primaryColor="red"
                // other props
            />
        </div>
     );
}
 
export default MediaContainer;