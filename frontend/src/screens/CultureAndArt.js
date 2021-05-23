import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Video from '../components/Video/Video'
import data from '../data'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  container: {
    maxWidth: 1600
  },
  cards: {
    minWidth: 320
  }
}));

const CultureAndArt = ({category}) => {
   const classes = useStyles()
   const dataFromTheNewest = [...data].reverse()
    return ( 
      <div
      className={classes.root} 
      category={category}
      >
      <h2>Kultura i sztuka</h2>
      <Grid 
      className={classes.container}
      justify="flex-start"
      alignItems="center"
      container 
      spacing={2}
      >
      {dataFromTheNewest.map( card => (
        card.category === "Kultura i sztuka" ? 
          <Grid item xs={12} sm={5} md={4} lg={3} key={card.id}>
            <Video card={card} className={classes.cards}></Video> 
          </Grid>
        : []
      ))}
      </Grid>
    </div>
     );
}
 
export default CultureAndArt;