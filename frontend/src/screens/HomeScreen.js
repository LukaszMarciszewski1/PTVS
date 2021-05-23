import React, { useEffect, useLayoutEffect, useState } from 'react';
import axios from 'axios'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../components/TabPanel/TabPanel'
import Baner from '../components/Baner/Baner'
// import img from '/images/banner.jpg'
import Video from '../components/Video/Video';
import Carousel from '../components/Carousel/Carousel';
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
 

const a11yProps = (index) => {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const HomePage = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0); //usunac prefix

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  // const [cards, setCards] = useState([])
  // useEffect(() => {
  // const fetchData = async () => {
  //   const { data } = await axios.get('/api/videos');
  //   setCards(data)

  // };
  // fetchData()
  // }, [])
  // const newVideo = [...data.pop()];
  return ( 
    <div>
      <Baner img={'/images/banner.jpg'} newVideo={`/video/${data.length}`}/>
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
          toCategory={'/Nauka-i-Tehnika'}
          category={'Nauka i Tehnika'}
          data = {data}
        />
      </TabPanel>
      <TabPanel index={1} value={value}>
        <Carousel
          toCategory={'/Kultura-i-sztuka'}
          category={'Kultura i sztuka'}
          data = {data}
        />
      </TabPanel>
      <TabPanel index={2} value={value}>
        <Carousel
          toCategory={'/Przedsiebiorczosc-i-praca'}
          category={'Przedsiębiorczość i praca'}
          data = {data}
        />
      </TabPanel>
      <TabPanel index={3} value={value}>
        <Carousel
          toCategory={'/Zdrowie-i-ekologia'}
          category={'Zdrowie i ekologia'}
          data = {data}
        />
      </TabPanel>
      <TabPanel index={4} value={value}>
        <Carousel
          toCategory={'/Turystyka-i-rekreacja'}
          category={'Turystyka i rekreacja'}
          data = {data}
        />
      </TabPanel>
      <TabPanel index={5} value={value}>
        <Carousel
          toCategory={'/Kanal-sprzedazowy'}
          category={'Kanał sprzedażowy'}
          data = {data}
        />
      </TabPanel>
    </div>
  );
}


export default HomePage;
