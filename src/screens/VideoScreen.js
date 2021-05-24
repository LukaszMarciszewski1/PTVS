import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import data from '../data'
import CardList from '../components/ListCard/ListCard'
import ActiveVideo from '../components/ActiveVideo/ActiveVideo'
import Card from '@material-ui/core/Card';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      minHeight: '100vh',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      padding: '20px 4%',
      '@media (max-width: 1500px)' : {
        padding: '20px 0',
      }
    },
    container: {
        background: '#10161d',
        padding: 30,
        minWidth: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 100,
        // maxHeight: '80vh',
        '@media (max-width: 1100px)' : {
          maxHeight: '100%',
          height: 'auto',
          padding: 20,
          flexDirection: 'column'
        }
    },

    videoContainer: {
       width: '70%',
       '@media (max-width: 1100px)' : {
        width: '100%',
      }
    },
    image: {
      width: 128,
      height: 60,
    },
    img:{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block', 
    },
    list: {
        width: '30%',
        maxHeight: 700,
        overflowY: 'scroll',
        padding: '0 2% 0 4%',
        '@media (max-width: 1100px)' : {
          marginTop: 40,
          maxHeight: '100%',
          padding: 0,
          width: '100%',
          overflowY: 'auto',
        }
      },
      paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: '100%',
        backgroundColor: 'transparent',
        color: 'grey'
      },
}));

// const handleVideoClick = () => {
//   history.push(`/watch/${_videoId}`)
// }

const VideoScreen = (props) => {
    const classes = useStyles()
    const video = data.find((x) => x.id == props.match.params.id)
    
    if(!video){
        return <div>Wideo nie istnieje</div>
    }
    const dataFromTheNewest = [...data].reverse()

    return ( 
        <div className={classes.root}>
          <Card className={classes.container} elevation={3}>
            <div className={classes.videoContainer}>
              <ActiveVideo video={video} move={video}/>
            </div>
            <div className={classes.list}>
              {dataFromTheNewest.map( card => (
              <CardList key={card.id} card={card}></CardList> //wstawic odwrotnosc wyswietlania
              ))}
            </div>
         </Card>
        </div>
     );
}
 
export default VideoScreen;

