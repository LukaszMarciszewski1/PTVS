import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const SalesChanel = ({category}) => {
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
        card.category === "Kanał sprzedażowy" ? 
          <Grid item xs={12} sm={5} md={4} lg={3} key={card.id}>
            <Video card={card} className={classes.cards}></Video> 
          </Grid>
        : []
      ))}
      </Grid>
    </div>
     );
}
 
export default SalesChanel;



{/* <AppBar position="static" color="transparent" elevation={2} className={classes.appBar}>
<Toolbar
 className={classes.toolBar}
>
  <Link>Nauka i Technika</Link>
  <Link>Kultura i sztuka</Link>
  <Link>Przedsiębiorczość i praca</Link>
  <Link>Zdrowie i ekologia</Link>
  <Link>Turystyka i rekreacja</Link>
  <Link>Kanał sprzedażowy</Link>
</Toolbar>
</AppBar> */}