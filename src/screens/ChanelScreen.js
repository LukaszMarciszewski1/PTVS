import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Video from '../components/Video/Video'
import data from '../data'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      minHeight: '100vh',
      color: 'white',
      display: 'flex',
      alignItems: 'center'
    },
    }));
const ChanelScreen = (props) => {
    const classes = useStyles()
    const chanel = data.find((x) => x.category == props.match.params.category)
    
    if(!chanel){
        return <div>Wideo nie istnieje</div>
    }

    return ( 
        <div
        className={classes.root} 
        >
        <h2>Kanal-sprzedazowy</h2>
        <Grid 
        justify="flex-start"
        alignItems="center"
        container 
        spacing={0}
        >
        {data.map( card => (
          card.category === "Kanał sprzedażowy" ? 
            <Grid item xs={12} sm={5} md={4} lg={3}>
              <Video key={card.id} card={card} className={classes.cards}></Video> 
            </Grid>
          : []
        ))}
        </Grid>
      </div>
     );
}
 
export default ChanelScreen;