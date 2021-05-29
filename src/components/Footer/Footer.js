import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core'
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Link,
  List,
  Divider,
} from "@material-ui/core";
import {
  Security,
  Info
} from "@material-ui/icons";
import ListItemText from '@material-ui/core/ListItemText';
import { SocialIcon } from 'react-social-icons';


const useStyles = makeStyles((theme)=> ({
  root: {
    color: 'white',
  },
    footer: {
      backgroundColor: '#0a0c0f',
    },
    container: {
      minHeight: "100px",
      padding: 20,
      paddingTop: 70,
      paddingBottom: 70,
      '@media (max-width: 550px)' : {
        paddingTop: 30,
        paddingBottom: 30,
      },
    },
    appBar: {
      backgroundColor: 'transparent'
    },
    logo: {
      maxHeight: 50,
      marginTop: 20,
      marginBottom: 20,
    },
    divider: {
      borderTop: '1px solid rgba(150, 150, 150, 0.4)',
      margin: '20px 0',
      width: '80%',
      '@media (max-width: 550px)' : {
        width: '100%'
      },
    },

  }))


  function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }  

const Footer = () => {
    const classes = useStyles();

    return ( 
      <footer className={classes.footer}>
      <Grid className={classes.container} container justify="center">
          <Grid container item lg={10} md={12} sm={12} xs={12} justify="space-between" spacing={2}>
            {/* <Grid item lg={2} sm={12} xs={12}>
              <Link to="/">
                <img src='/logo-white.svg' alt="logo" className={classes.logo}/>
              </Link>
            </Grid> */}
            <Grid item lg={2} sm={6} xs={12}>
              <Typography variant='h6' component='h4'>
                Adres
              </Typography>
              <div className={classes.demo}>
                <List>
                  <Typography variant='body2' gutterBottom>ul. Nowy Świat 33/13</Typography>
                  <Typography variant='body2'>00-029 Warszawa </Typography>
                </List>
              </div>
            </Grid>
            <Grid item lg={2} sm={6} xs={12}>
            <Typography variant='h6' component='h4'>
                Kontakt
              </Typography>
              <List>
               <Typography  gutterBottom>
                <Link key="Email" component="a" href="mailto:office@ptvs.pl" color="inherit">
                  office@ptvs.pl 
                </Link>
               </Typography>
               <Typography variant='body2'>tel. +48 503 806 535</Typography>
              </List>
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <Typography variant='h6' component='h4'>
                  Konto
              </Typography>
              <Typography variant='body2' gutterBottom>mBank 46 1140 2004 0000 3902 7971 7412</Typography>
              <Divider className={classes.divider}/>
              <Link key="Email" component="a" href="mailto:office@ptvs.pl" color="inherit">
                  polityka prywatnosci
                </Link>
            </Grid>
            <Grid item lg={2} sm={6} xs={12}>
              <Typography variant='h6' component='h4' justify="center" gutterBottom >
                  Śledz nas na
              </Typography>
                <SocialIcon network="twitter" url="https://linkedin.com/in/jaketrent" style={{marginRight: 20, marginTop: 10}} />
                <SocialIcon network="facebook" url="https://linkedin.com/in/jaketrent" style={{marginRight: 20, marginTop: 10}}/>
            </Grid>
          </Grid>
        </Grid>
        <AppBar className={classes.appBar} position="static" elevation={0} component="footer">
          <Toolbar style={{ justifyContent: "center", borderTop: '1px solid rgba(150, 150, 150, 0.4)' }}>
            <Typography variant="caption">©2021 ptvs.pl</Typography>
          </Toolbar>
        </AppBar>
      </footer>
     );
}
 
export default Footer;


        {/* <Grid container justify="center" style={{minHeight: "212px"}}>
        <Grid container item sm={6} xs={11} justify="space-between">
            <Grid item sm={5} xs={12}>
                <Security color="action" />
                <Typography paragraph>
                    The donations made on this site are sent through a secured connection and processed by Stripe. This site is compliant with the Payment Card Industry and Data Security Standard. Read more about Stripe security <Link href="https://stripe.com/docs/security/stripe" target="_blank" alt="Stripe">here</Link>.
                </Typography>
            </Grid>
            <Grid item sm={5} xs={11}>
                <Info color="action" />
                <Typography paragraph>
                    This Web App is fully responsive. Made in <Link href="https://reactjs.org/" target="_blank">ReactJS</Link>, using <Link href="https://material-ui.com" target="_blank">Material-UI</Link> and <Link href="https://stripe.com/docs/stripe-js/react" target="_blank">React Stripe</Link>. It's given free of use by <Link href="https://angeloron.com" target="_blank">Ange loron</Link>. react-material-ui-stripe-payment is under the MIT license and can be dowloaded <Link href="https://gitlab.com/angeloron/react-material-ui-stripe-payment" target="_blank">here</Link>.
                </Typography>
            </Grid>
        </Grid>
        </Grid>
        <AppBar className={classes.appBar} position="static" elevation={0} component="footer">
            <Toolbar style={{ justifyContent: "center" }}>
                <Typography variant="caption">©2020 ptvs.pl</Typography>
            </Toolbar>
        </AppBar> */}