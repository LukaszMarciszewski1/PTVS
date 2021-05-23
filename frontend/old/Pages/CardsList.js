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
import CardCarousel from '../components/Carousel/CardCarousel'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  card: {
    color: 'white',
    margin: 10,
    backgroundColor: '#272b44',
    backgroundColor: 'rgb(31, 41, 56)',
  },
}));

const CardList = ({math}) => {
  const classes = useStyles()
  return ( 
    <div id={math.params.id} className={classes}>okssdfddddd prodarccc</div>
   );
}
 
export default CardList;