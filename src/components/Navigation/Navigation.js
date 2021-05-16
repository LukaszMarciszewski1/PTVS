import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Avatar, Card, TextField, CardHeader, CardContent, Button} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SvgIcon from '@material-ui/core/SvgIcon';
import Tech from '../Carousel/Tech'
import img1 from '../../assets/images/pic01.jpg'
import img2 from '../../assets/images/pic02.jpg'
import img3 from '../../assets/images/pic03.jpg'
import img4 from '../../assets/images/pic04.jpg'
import img5 from '../../assets/images/pic05.jpg'
import img6 from '../../assets/images/pic06.jpg'
import img7 from '../../assets/images/pic08.jpg'
import img8 from '../../assets/images/pic09.jpg'
import img9 from '../../assets/images/pic10.jpg'
import img10 from '../../assets/images/pic11.jpg'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}
const StyledTabs = withStyles({
    root: {
        padding: 20,
        backgroundColor: '#10171d',
        "& .MuiTabScrollButton-root:first-child": {
            backgroundColor: '#1f2c3885',
        },
        "& .MuiTabScrollButton-root:last-child": {
            backgroundColor: '#1f2c3885',
        },
    },
    indicator: {
        display: 'none',
    },

  })((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

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
    },
  }))((props) => <Tab disableRipple {...props} />);


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },

}));

const  Navigation = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

// const renderImg = () => {
//   const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9]
//   const index = Math.floor(Math.random() * images.length)
//   const image = images[index]
//   return(
//     image
//   )
// }  

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" elevation={3}>
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
      <TabPanel value={value} index={0}>
        <Tech name={'Nauka i technika - '} img={img1} category={'Nauka i technika'}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Tech name={'Kultura i sztuka'} img={img2} category={'Kultura i sztuka'}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Tech name={'Przedsiębiorczośc i praca'} img={img3} category={'Przedsiębiorczośc i praca'}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Tech name={'Zdrowie i ekologia'} img={img4} category={'Zdrowie i ekologia'}/>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <Tech name={'Turystyka i rekreacja'} img={img9} category={'Turystyka i rekreacja'}/>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <Tech name={'Kanał sprzedażowy'} img={img10} category={'Kanał sprzedażowy'}/>
      </TabPanel>
    </div>
  );
}
 
export default Navigation;