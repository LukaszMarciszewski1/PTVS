import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { makeStyles, withStyles, Link } from '@material-ui/core'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
////////////////////////////////////////////////////

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded';
// Import Swiper styles
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

const data = [
  {
    id: 0,
    name: 'Lukasz',
    text: 'Lorem Ipsum - dolor text'
  },
  {
    id: 1,
    name: 'Marek',
    text: 'Lorem Ipsum - dolor text'
  },
  {
    id: 2,
    name: 'Kasztan',
    text: 'Lorem Ipsum - dolor text'
  },
  {
    id: 3,
    name: 'Wojtek',
    text: 'Lorem Ipsum - dolor text'
  },  
  {
    id: 4,
    name: 'Marta',
    text: 'Lorem Ipsum - dolor text'
  },
  {
    id: 5,
    name: 'Marta',
    text: 'Lorem Ipsum - dolor text'
  },
  {
    id: 6,
    name: 'Marta',
    text: 'Lorem Ipsum - dolor text'
  },
]

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'white',
    margin: 10,
    backgroundColor: '#202438'
  },
  media: {
    height: 200,
  },
  swiper: {
    marginTop: 60,
    maxWidth: '90%',
  },
  container: {
    marginLeft: '8%',
    marginTop: '4%'
  },
  titleContent: {
    display: 'flex',
    opacity: .8,
    alignItems: 'flex-end',
    margin: 15
  },
  titleText: {
    margin: '0 20px',
  },
  cardContent: {
    marginBottom: 30,
    position: 'relative'
  },
  titleCategory: {
    fontSize: 13,
    fontWeight: 'lighter',
    letterSpacing: 1
  },
  iconPlay: {
    position: 'absolute',
    top: -25,
    right: 25,
    width: 60,
    height: 60,
    // color: '#2962ff',
    color: 'white',
  },
}));

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1500 },
    items: 4,
    paritialVisibilityGutter: 50,
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
    paritialVisibilityGutter: 50
  }
};

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}));

const Tech = ({name, img, category}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    return ( 
      <div className={classes.container}>
        <div className={classes.titleContent}>
        <Button 
          component='a'
          href="#"
          variant="outlined" 
          color="inherit"
          endIcon={<ChevronRightIcon/>}
          >
          Przejdź
        </Button>
        <Typography variant="h6" component="h2" className={classes.titleText}>
          {name}
        </Typography>
        <Typography variant="subtitle1" style={{fontWeight:'lighter', opacity: .7}}>
          lorem ipsum dolor text
        </Typography>
        </div>
        <Carousel
          // draggable={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          partialVisible={true}
          containerClass="carousel-container"
          // deviceType={deviceType}
        >
              {data.map( card => (
                <Card className={classes.root} key={card.id}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={img}
                      title="Contemplative Reptile"
                    />
                    <CardContent className={classes.cardContent}>
                    <PlayCircleFilledRoundedIcon className={classes.iconPlay} fontSize='large'/>
                    <Typography className={classes.titleCategory} gutterBottom style={{opacity: .5}}>
                       {category}
                    </Typography>
                      <Typography gutterBottom variant="h6" component="h3" color="inherit">
                        Lizard
                      </Typography>
                      <Typography variant="body2" component="p" style={{opacity: .5}}>
                        Lizards are a widespread group of squamate 
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
          ))}
        </Carousel>
      </div>
     );
}
 
export default Tech;