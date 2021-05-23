import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import { makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  card: {
    color: 'white',
    margin: 10,
    // minWidth: 280,
    // maxWidth: 400,
    backgroundColor: '#272b44',
    backgroundColor: 'rgb(31, 41, 56)',
  },
  media: {
    height: 200,
    '@media (max-width: 550px)' : {
      height: 150,
    },
  },
  cardContent: {
    marginBottom: 30,
    position: 'relative',
    '@media (max-width: 550px)' : {
      marginBottom: 10,
    },
  },
  titleCategory: {
    fontSize: 13,
    fontWeight: 'lighter',
    letterSpacing: 1
  },
  avatar: {
    position: 'absolute',
    top: -30,
    right: 20,
    width: 60,
    height: 60,
    backgroundColor: blue[900],
    '&:hover' : {
      backgroundColor: blue[600],
    },
  },
  cardBottomBar: {
    padding: '10px 16px',
    opacity: .5
  },
}));

const CardCarousel = ({img, category, title, description, time, click}) => {
  const classes = useStyles();
    return ( 
    <Card className={classes.card} elevation={3}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
        />
        <CardContent className={classes.cardContent}>
          <Avatar
            aria-label="play"
            color="primary"
            className={classes.avatar}
          >
          <PlayArrowIcon style={{ fontSize: 40 }}/>
          </Avatar>
          <Typography className={classes.titleCategory} gutterBottom style={{opacity: .5}}>
            {category}
          </Typography>
          <Typography gutterBottom variant="h6" component="h3" color="inherit">
            {title}
          </Typography>
          <Typography variant="body2" component="p" style={{opacity: .5}}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardBottomBar}>
        <Typography variant="body2" size="small" color="inherit">
          {time}
        </Typography>
        <Button size="small" color="inherit" onClick={click}>
          info
        </Button>
      </CardActions>
    </Card>
  );
}
 
export default CardCarousel;