import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { makeStyles } from '@material-ui/core'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
////////////////////////////////////////////////////

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
    // maxWidth: 345,
    margin: 10
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
  title: {
    display: 'flex',
    opacity: .8,
    alignItems: 'flex-end'
  }
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

const Tech = ({name, img}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    return ( 
      <div className={classes.container}>
      <div className={classes.title}><h2>{name}</h2><p style={{marginLeft: 10}}>lorem ipsum doler text across all continents</p></div>
        <Carousel
          additionalTransfrom={0}
          arrows
          swipeable={true}
          draggable={true}
          responsive={responsive}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          partialVisible={true}
          slidesToSlide={1}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="carousel-item-padding-40-px"
                    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    // deviceType={this.props.deviceType}
          // dotListClass="custom-dot-list-style"
        >
              {data.map( card => (
                <Card className={classes.root} key={card.id}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={img}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
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