  import React from 'react';
  import { makeStyles } from '@material-ui/core/styles';
  import Typography from '@material-ui/core/Typography';
  import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
  import Chip from '@material-ui/core/Chip';
  import Button from '@material-ui/core/Button';
  import Divider from '@material-ui/core/Divider';
  import Paper from '@material-ui/core/Paper';
  import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { blue } from '@material-ui/core/colors';
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      margin: '0 auto 0',
      display: 'flex',
      // justifyContent: 'center',
      backgroundColor: 'rgba(31, 41, 56)',
    },
    card: {
      color: 'whitesmoke',
      backgroundColor: 'transparent',
      padding: '20px 0',
      display: 'flex',
      justifyContent: 'space-between',
      zIndex: 3,
      maxWidth: 1300,
      marginLeft: '9%',
      // margin: '0 auto',
      '@media (max-width: 1100px)' : {
        flexDirection: 'column',
        // textAlign: 'center'
      },
    },
    cardContent: {
      padding: 10,
      display: 'flex',
      alignItems: 'center',

    },
    innerText: {
      fontWeight: 'lighter',
      lineHeight: '1.8rem',
      color: 'rgb(238, 238, 238)',
      letterSpacing: 1,
      display: 'inline',
      padding: 0,
    },
    cardAction: {
      display: 'flex',
      // flexDirection: 'column',
      paddingLeft: 40,
      borderLeft: '1px solid rgba(150, 150, 150, 0.4)',
      '@media (max-width: 1100px)' : {
        borderLeft: 'none',
        paddingLeft: 0,
      },
    },
    button: {
      padding: '20px 40px',
      minWidth: 200,
      backgroundColor: blue[900],
    },
  }));


const Subsidy = () => {
    const classes = useStyles();
    return ( 
      <div className={classes.root}>
          <Card className={classes.card} elevation={0}>
            <CardContent className={classes.cardContent}>
                <Typography className={classes.innerText} variant="subtitle1" component="p" gutterBottom>
                {/* Główną misją Polskiej Telewizji Społecznej jest: Mądrość i Kultura naszego Społeczeństwa.  */}
                W strukturach Polskiej Telewizji Społecznej nie ma prezesów ani rad 
                nadzorczych - role te pełni Społeczeństwo. 
                To wszystko wymaga dużych nakładów czasu, ale także finansowych, 
                dlatego zwracamy się do Was o wsparcie naszej działalności.
                </Typography>
            </CardContent>
              <CardActions className={classes.cardAction}>
                <Button className={classes.button} variant="contained" color="primary" disableElevation>
                  Wesprzyj nas
                </Button>
              </CardActions>
          </Card>
      </div>
     );
}
 
export default Subsidy;