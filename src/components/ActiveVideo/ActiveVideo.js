import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    container: {
       width: '100%',
       fontWeight: 'lighter'
    },
    video: {
      width: '100%',
      maxWidth: 1000
      // maxHeight: 500,
      // overflow: 'hidden'
    },
    img: {
      width: '100%'
    },
    description: {
      padding: '20px 0 40px',
      color: 'grey',
      borderBottom: '1px solid rgb(31, 41, 56)',
      '@media (max-width: 1100px)' : {
        borderBottom: '1px solid grey'
      }
    }

}));

const ActiveVideo = (props) => {
  const classes = useStyles()
  const { video } = props
  return ( 
    <div className={classes.container}>
      <div className={classes.video}>
        <video controls className={classes.img}>
          <source src={video.move} type='video/mp4'/>
        </video>
        {/* <img src={video.img} alt={'video'} className={classes.img}/> */}
      </div>
      <div className={classes.description}>
      <Typography gutterBottom variant="h5" component="h3">
        {video.title}
      </Typography>
      <Typography variant="body2" gutterBottom>
        {video.description}
      </Typography>
      <Typography variant="body2">
        {video.time}
      </Typography>
      </div>
    </div>
  );
}
 
export default ActiveVideo;