import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
// import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    image: {
      width: 128,
      height: 80,
      '@media (max-width: 550px)' : {
        width: '100%',
        height: 150
      },
    },
    img:{
        width: '100%',
        height: '100%',
        // objectFit: 'cover',
        display: 'block', 
    },
    list: {
        width: '30%',
        maxHeight: '100%',
        overflowY: 'scroll',
        paddingLeft: 20,
      },
      paper: {
        padding: 5,
        margin: 'auto',
        width: 400,
        // minWidth: 320,
        // border: '1px solid rgba(150, 150, 150, 0.1)',
        backgroundColor: '#151f27',
        color: 'grey',
        transition: '.2s',
        marginBottom: 10,
        '@media (max-width: 1100px)' : {
          width: '100%',
        },
        '@media (max-width: 550px)' : {
          backgroundColor: 'transparent',
          padding: 5
        },
        '&:hover':{
          backgroundColor: 'rgba(31, 41, 56, 0.6)',
          // border: '1px solid rgba(150, 150, 150, 0.2)',
        }
      },
      title: {
        fontWeight: '600'
      }
}));

export default function CardList(props) {
    const classes = useStyles();
    const { card } = props
    // let history = useHistory()

    // const handleVideoClick = () => {
    //   history.push(`/video/${card.id}`)
    // }

    return ( 
      <Link key={card.id} to={`/video/${card.id}`} >      
            <Paper className={classes.paper} elevation={3}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={card.img} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1" className={classes.title}>
                        {card.title}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {card.description}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
      </Link>
  );
}