import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Video from '../../components/Video/Video'
import data from '../../data'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    marginBottom: 50
  },
  container: {
    maxWidth: 1600
  },
  cards: {
    minWidth: 320
  }
}));

const EntrepreneurshipAndWork = ({category}) => {
   const classes = useStyles()
   const dataFromTheNewest = [...data].reverse()
    return ( 
      <div
      className={classes.root} 
      category={category}
      >
      <Grid 
      className={classes.container}
      justify="flex-start"
      alignItems="center"
      container 
      spacing={1}
      >
      {dataFromTheNewest.map( card => (
        card.category === "Przedsiębiorczość i praca" ? 
          <Grid item xs={12} sm={5} md={4} lg={3}  key={card.id}>
            <Video card={card} className={classes.cards}></Video> 
          </Grid>
        : []
      ))}
      </Grid>
    </div>
     );
}
 
export default EntrepreneurshipAndWork;