import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabScrollButton from '@material-ui/core/TabScrollButton';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SvgIcon from '@material-ui/core/SvgIcon';

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
        <Box p={3}>
          <Typography>{children}</Typography>
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
      opacity: .5,
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
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
    </div>
  );
}
 
export default Navigation;