import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
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
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';


const useStyles = makeStyles((theme) => ({
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
        maxHeight: '100%',
        overflowY: 'scroll',
        paddingLeft: 20
      },
      paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
        backgroundColor: 'rgba(31, 41, 56, 0.2)',
        color: 'grey',
        transition: '.2s',
        marginBottom: 10,
        '&:hover':{
          backgroundColor: 'rgb(31, 41, 56)'
        }
      },
}));

export default function CardList(props) {
    const classes = useStyles();
    const { card } = props
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
                      <Typography gutterBottom variant="subtitle1">
                        {card.title}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {card.description}
                      </Typography>
                      <Typography variant="body2">
                        {card.time}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
      </Link>
  );
}