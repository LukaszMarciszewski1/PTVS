import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { makeStyles, withStyles } from '@material-ui/core'
////////////////////////////////////////////////////

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { blue } from '@material-ui/core/colors';
import CardCarousel from './CardCarousel'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  card: {
    color: 'white',
    margin: 10,
    backgroundColor: '#272b44',
    backgroundColor: 'rgb(31, 41, 56)',
  },
  media: {
    height: 200,
    '@media (max-width: 550px)' : {
      height: 150,
    },
  },
  container: {
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
  titleContent: {
    display: 'flex',
    opacity: .8,
    alignItems: 'flex-end',
    margin: 15,
    maxWidth: 700,
    '@media (max-width: 1100px)' : {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justyContent: 'flex-end',
      margin: 10
    },
  },
  titleText: {
    margin: '0 20px',
    '@media (max-width: 1100px)' : {
      margin: '15px 0 0',
    },
  },
  cardContent: {
    marginBottom: 30,
    position: 'relative',
    '@media (max-width: 550px)' : {
      marginBottom: 10,
    },
  },
  titleCategory: {
    fontSize: 13,
    fontWeight: 'lighter',
    letterSpacing: 1
  },
  avatar: {
    position: 'absolute',
    top: -25,
    right: 25,
    width: 60,
    height: 60,
    backgroundColor: blue[900],
    '&:hover' : {
      backgroundColor: blue[600],
    },
  },
  cardBottomBar: {
    padding: '10px 16px',
    opacity: .5
  },
  goToButton : {
    padding: '8px 25px',
    border: '1px solid grey',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 5
  },

  //carousel
  carouselContainer: {
    position: 'relative',
    '@media (max-width: 550px)' : {
      marginTop: 70
    },
  },
  carouselButtonGroup: {
    position: 'absolute',
    top: -50,
    right: 0,
    '@media (max-width: 550px)' : {
      left: 10,
    },
  },
  carouselButton: {
    backgroundColor: 'rgb(33, 44, 61)',
    marginRight: 20,
    '@media (max-width: 1100px)' : {
      marginRight: 10,
    },
    "&:disabled" : {
      opacity: .4,
      color: 'inherit',
      backgroundColor: 'rgb(33, 44, 61)',
    }
  },

}));

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1500 },
    items: 4,
    paritialVisibilityGutter: 40,
  },
  laptop: {
    breakpoint: { max: 1500, min: 1100 },
    items: 3,
    paritialVisibilityGutter: 40
  },
  tablet: {
    breakpoint: { max: 1100, min: 550 },
    items: 2,
    paritialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: { max: 550, min: 0 },
    items: 1,
    paritialVisibilityGutter: 40
  }
};

const ButtonGroup = ({ next, previous, ...rest }) => {
  const classes = useStyles();
  const { carouselState: { currentSlide, totalItems, slidesToShow } } = rest;
  return (
    <div className={classes.carouselButtonGroup}>
      <Button 
        variant="contained" 
        color="primary"
        className={classes.carouselButton}
        disabled ={ currentSlide === 0 ? true : false}
        onClick={() => previous()}
      >
        <KeyboardArrowLeftIcon/>
      </Button>
      <Button 
        className={classes.carouselButton}
        disabled ={ currentSlide === totalItems - slidesToShow ? true : false}
        variant="contained" 
        color="primary"
        onClick={() => next()}>
        <KeyboardArrowRightIcon/>
      </Button>
    </div>
  );
};



const Tech = ({data, category, link}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    return ( 
      <div className={classes.container}>
        <div className={classes.titleContent}>
          <Link to={link} className={classes.goToButton}>
            Przejdź
            <KeyboardArrowRightIcon style={{paddingLeft: "10px"}}/>
          </Link>
          <Typography variant="h6" component="h2" className={classes.titleText}>
            {category}
          </Typography>
          <Typography variant="subtitle1" style={{fontWeight:'lighter', opacity: .7}}>
            lorem ipsum dolor text example
          </Typography>
        </div>
        <div className={classes.carouselContainer}>
        <Carousel
          arrows={false}
          responsive={responsive}
          ssr={true}
          partialVisible={true}
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup/>}
        >
              {data.map( card => (
                <CardCarousel 
                 key={card.id}
                 category={card.category}
                 title={card.title}
                 description={card.description}
                 time={card.time}
                 img={card.img}
                 />
          ))}
        </Carousel>
        </div>
      </div>
     );
}
 
export default Tech;