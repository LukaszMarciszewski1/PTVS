import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import data from '../data'
import CardList from '../components/ListCard/ListCard'
import ActiveVideo from '../components/ActiveVideo/ActiveVideo'
import Card from '@material-ui/core/Card';

import {Link} from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      // minHeight: '100vh',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      // justifyContent: 'center',
      alignItems: 'center',
      maxWidth: 1650,
      margin: '90px auto 40px',
      '@media (max-width: 1500px)' : {
        // padding: '20px 0',
      }
    },
    container: {
        background: '#121a21',
        padding: 20,
        minWidth: '100%',
        display: 'flex',
        // // justifyContent: 'space-bee',
        // marginTop: 70,
        // maxHeight: '80vh',
        '@media (max-width: 1100px)' : {
          maxHeight: '100%',
          height: 'auto',
          padding: 15,
          flexDirection: 'column'
        }
    },

    videoContainer: {
       flex: 1,
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
    listContainer: {
        // width: '30%',
        maxHeight: '82vh',
        overflowY: 'scroll',
        // padding: '0 2% 0 4%',
        // backgroundColor: '#0f151b',
        // borderTop: '1px solid rgba(150, 150, 150, 1)',
        padding: '0 10px 0 30px',
        '@media (max-width: 1500px)' : {
          maxHeight: '72vh',
        },
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
      arrowContainer: {
        marginTop: 70,
      },
      arrow: {
        padding: 20,
        borderRadius: 0,
        borderRight: '1px solid grey',
        '@media (max-width: 550px)' : {
          padding: 10,
          marginRight: 20,
    
        },
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
          {/* <div className={classes.arrowContainer}>
            <Link to="/">
              <IconButton color="inherit" aria-label="back" className={classes.arrow}>
                <ArrowBackIosIcon />
              </IconButton>
            </Link>
            </div> */}
          <Card className={classes.container} elevation={0}>
            <div className={classes.videoContainer}>
              <ActiveVideo video={video} move={video}/>
            </div>
            <div className={classes.listContainer}>
              {dataFromTheNewest.map( card => (
              <CardList key={card.id} card={card}></CardList> //wstawic odwrotnosc wyswietlania
              ))}
            </div>
         </Card>
        </div>
     );
}
 
export default VideoScreen;

