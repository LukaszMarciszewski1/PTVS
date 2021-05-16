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
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  swiper: {
    marginTop: 60,
    maxWidth: '90%',
  },
}));

const Tech = ({name, img}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    return ( 
      <div>
      <h2>{name}</h2>
          <Swiper
          className={classes.swiper}
          spaceBetween={20}
          breakpoints={{
              // when window width is >= 640px
              640: {
                width: 640,
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 2,
              },
            }}
          // slidesPerView={5}
          navigation
          // pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {data.map( card => (
            <SwiperSlide key={card.id} className={classes.slide}>
              <Card className={classes.root}>
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
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
     );
}