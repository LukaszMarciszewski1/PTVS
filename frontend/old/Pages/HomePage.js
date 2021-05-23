import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Baner from '../components/Baner/Baner'
import TabPanel from '../components/TabPanel/TabPanel'
import Carousel from '../components/Carousel/Carousel'
import img from '../assets/images/banner.jpg'
import data from '../data'

const StyledTabs = withStyles({
  root: {
      padding: '15px 20px',
      backgroundColor: '#1b262f',
      backgroundColor: 'rgb(33, 44, 61)',
      backgroundColor: 'rgb(31, 41, 56)',
      "& .MuiTabScrollButton-root:first-child": {
          backgroundColor: '#1f2c3885',
      },
      "& .MuiTabScrollButton-root:last-child": {
          backgroundColor: '#1f2c3885',
      },
      '@media (max-width: 550px)' : {
        padding: 10,
      },
  },
  indicator: {
      display: 'none',
  },

})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

//style nav item
const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    letterSpacing: 1,
    fontWeight: theme.typography.fontWeightLight,
    fontSize: theme.typography.pxToRem(16),
    marginRight: theme.spacing(1),
    opacity: .6,
    transition: '.2s',
    '@media (max-width: 550px)' : {
      marginRight: theme.spacing(0),
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
root: {
  flexGrow: 1,
  width: '100%',
},
tabPanelContent: {
  marginLeft: '9%',
  marginTop: '4%',
  '@media (max-width: 1100px)' : {
    marginLeft: '5%',
  },
  '@media (max-width: 550px)' : {
    marginTop: '10%',
    marginLeft: '3%',
  },
},
carouselContent: {
  position: 'relative',
  '@media (max-width: 550px)' : {
    marginTop: 70
  },
},
}));

const HomePage = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const a11yProps = (index) => {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }
    return ( 
      <div >
        <Baner img={img}/>
        <AppBar position="static" color="transparent" elevation={2}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <StyledTab label="Nauka i Tehnika" {...a11yProps(0)} />
          <StyledTab label="Kultura i sztuka" {...a11yProps(1)} />
          <StyledTab label="Przedsiębiorczość i praca" {...a11yProps(2)} />
          <StyledTab label="Zdrowie i ekologia" {...a11yProps(3)} />
          <StyledTab label="Turystyka i rekreacja" {...a11yProps(4)} />
          <StyledTab label="Kanał sprzedażowy" {...a11yProps(5)} />
        </StyledTabs>
      </AppBar>
        <TabPanel index={0} value={value}>
          <Carousel 
            category={'Nauka i technika'} 
            data={data.ScienceAndTechnology} 
            to={`/Nauka i technika`} 
            toCategory={'/Nauka-i-technika'}/>
        </TabPanel>
        <TabPanel index={1} value={value}>
          <Carousel 
            category={'Kultura i sztuka'} 
            data={data.CultureAndArt} 
            to={'/Kultura-i-sztuka'} 
            toCategory={'/Kultura-i-sztuka'}/>
        </TabPanel>
        <TabPanel index={2} value={value}>
          <Carousel 
            category={'Przedsiębiorczośc i praca'} 
            data={data.EntrepreneurshipAndWork}  
            to={'/Przedsiebiorczosc-i-praca'} 
            toCategory={'/Przedsiebiorczosc-i-praca'}/>
        </TabPanel>
        <TabPanel index={3} value={value}>
          <Carousel  
            category={'Zdrowie i ekologia'} 
            data={data.HealthAndEcology} 
            to={'/Zdrowie-i-ekologia'} 
            toCategory={'/Zdrowie-i-ekologia'}/>
        </TabPanel>
        <TabPanel index={4} value={value}>
          <Carousel 
           category={'Turystyka i rekreacja'} 
           data={data.TourismAndRecreation} 
           to={'/Turystyka-i-rekreacja'} 
           toCategory={'/Turystyka-i-rekreacja'}/>
        </TabPanel>
        <TabPanel index={5} value={value}>
          <Carousel 
           category={'Kanał sprzedażowy'} 
           data={data.SalesChannel} 
           to={'/Kanal-sprzedazowy'} 
           toCategory={'/Kanal-sprzedazowy'}/>
        </TabPanel>
      </div>
     );
}
 
export default HomePage;
