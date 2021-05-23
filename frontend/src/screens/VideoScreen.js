import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
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
              <ActiveVideo video={video} file={video}/>
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


{/* <Paper className={classes.card} elevation={2}>
<img src={video.img} className={classes.img}></img>
</Paper>
<List className={classes.list}>
<ListItem>
    <ListItemAvatar>
    <Avatar>
        <ImageIcon />
    </Avatar>
    </ListItemAvatar>
    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
</ListItem>
<ListItem>
    <ListItemAvatar>
    <Avatar>
        <WorkIcon />
    </Avatar>
    </ListItemAvatar>
    <ListItemText primary="Work" secondary="Jan 7, 2014" />
</ListItem>
<ListItem>
    <ListItemAvatar>
    <Avatar>
        <BeachAccessIcon />
    </Avatar>
    </ListItemAvatar>
    <ListItemText primary="Vacation" secondary="July 20, 2014" />
</ListItem>
</List> */}


{/* <div className={classes.container}>
<Grid container justify="center" spacing={5} alignItems="stretch" className={classes.content}>
  <Grid item xs={8}>
    <div className={classes.paper}>
      <img src={video.img} alt={'video'} className={classes.img}/>
    </div>
  </Grid>
  <Grid item xs={4}>
    <div className={classes.paper}>item</div>
  </Grid>
</Grid>
</div> */}


{/* <Paper className={classes.paper} elevation={2}>
<Grid container spacing={2}>
  <Grid item>
    <ButtonBase className={classes.image}>
      <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
    </ButtonBase>
  </Grid>
  <Grid item xs={12} sm container>
    <Grid item xs container direction="column" spacing={2}>
      <Grid item xs>
        <Typography gutterBottom variant="subtitle1">
          Standard license
        </Typography>
        <Typography variant="body2" gutterBottom>
          Full resolution 1920x1080 • JPEG
        </Typography>
        <Typography variant="body2" color="textSecondary">
          ID: 1030114
        </Typography>
      </Grid>
    </Grid>
  </Grid>
</Grid>
</Paper> */}