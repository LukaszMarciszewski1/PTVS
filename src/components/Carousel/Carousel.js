import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { makeStyles } from '@material-ui/core'
import ButtonsGroup from './ButtonsGroup'
import Title from './Title'
import Video from '../Video/Video';

const useStyles = makeStyles((theme) => ({
  container: {
    marginLeft: '9%',
    marginTop: '3%',
    '@media (max-width: 1100px)' : {
      marginLeft: '5%',
    },
    '@media (max-width: 550px)' : {
      marginTop: '8%',
      marginLeft: '3%',
    },
  },
  carouselContainer: {
    position: 'relative',
    '@media (max-width: 550px)' : {
      marginTop: 70
    },
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

const CarouselContent = ({ toCategory, category, data }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
    return ( 
      <div className={classes.container}>
         <Title toCategory={toCategory} category={category}/>
        <div className={classes.carouselContainer}>
        <Carousel
          arrows={false}
          responsive={responsive}
          ssr={true}
          partialVisible={true}
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonsGroup/>}
        >
        {data.map( card => (
          card.category === category ? <Video key={card.id} card={card}></Video> : []
        ))}
        </Carousel>
        </div>
      </div>
     );
}
 
export default CarouselContent;