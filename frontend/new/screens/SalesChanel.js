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
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Video from '../components/Video/Video'
import data from '../data'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
    padding: "10%"
  },
  cards: {
    minWidth: 400
  }
}));
// const dataCard = data.ScienceAndTechnology

const SalesChanel = () => {
   const classes = useStyles()
    return ( 
      <div className={classes.root}>
      <h2>Kanal-sprzedazowy</h2>
      <Grid 
        justify="flex-start"
        alignItems="center"
        container 
        spacing={0}
      >
      {
        <Grid item xs={12} sm={5} md={4} lg={3}>
        {data.map( card => (
          <Video key={card.id} card={card}></Video>
        ))}
        </Grid>
      }
      </Grid>
    </div>
     );
}
 
export default SalesChanel;