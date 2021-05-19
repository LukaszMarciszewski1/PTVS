import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Tech from '../components/Carousel/Tech'
import TabContent from '../components/Tabs/TabPanelContainer'
import data from '../data'
import {Link} from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
//style nav container
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
}));


const  TabsCategory = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  // const history = useHistory()
  // const location = useLocation()
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
    <div className={classes.container}>
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
       <TabContent value={value} index={0}>
         <Tech category={'Nauka i technika'} data={data.ScienceAndTechnology} link={'/Nauka-i-technika'}/>
       </TabContent>
       <TabContent value={value} index={1}>
         <Tech category={'Kultura i sztuka'} data={data.CultureAndArt} link={'/Kultura-i-sztuka'}/>
       </TabContent>
       <TabContent value={value} index={2}>
          <Tech category={'Przedsiębiorczośc i praca'} data={data.EntrepreneurshipAndWork} link={'/Przedsiębiorczośc-i-praca'}/>
       </TabContent>
       <TabContent value={value} index={3}>
         <Tech category={'Zdrowie i ekologia'} data={data.HealthAndEcology} link={'/Zdrowie-i-ekologia'}/>
       </TabContent>
       <TabContent value={value} index={4}>
         <Tech category={'Turystyka i rekreacja'} data={data.TourismAndRecreation} link={'/Turystyka-i-rekreacja'}/>
       </TabContent>
       <TabContent value={value} index={5}>
         <Tech category={'Kanał sprzedażowy'} data={data.SalesChannel} link={'/Kanał-sprzedażowy'}/>
       </TabContent>
    </div>
  );
}

export default TabsCategory;