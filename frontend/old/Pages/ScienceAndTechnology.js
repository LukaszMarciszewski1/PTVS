import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import { makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { blue } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import CardCarousel from '../components/Carousel/CardCarousel'
import data from '../data'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
    padding: "10%"
  },
  cards: {
    minWidth: 400
  }
}));
const dataCard = data.ScienceAndTechnology
//  const DataList = ()=> {
//    const dataCard = data.ScienceAndTechnology
//    const classes = useStyles()
//    return(
//     dataCard.map( card => (
//          <CardCarousel 
//          className={classes.cards}
//          key={card.id}
//          category={card.category}
//          title={card.title}
//          description={card.description}
//          time={card.time}
//          img={card.img}
//          />
//      ))
//    )
//  }

const ScienceAndTechnology = () => {
   const classes = useStyles()
    return ( 
      <div className={classes.root}>
      <Grid 
        justify="flex-start"
        alignItems="center"
        container 
        spacing={0}
      >
      {
        dataCard.map( card => (
        <Grid item xs={12} sm={5} md={4} lg={3}>
        <CardCarousel 
         className={classes.cards}
         key={card.id}
         category={card.category}
         title={card.title}
         description={card.description}
         time={card.time}
         img={card.img}
         />
        </Grid>
        ))
      }
      </Grid>
    </div>
     );
}
 
export default ScienceAndTechnology;





// const ElevatedCardHeader = () => {
//   return(
//     <Grid container spacing={2}>
//     {
//       rows.map(row => (
//         <Grid item xs={6}>
//           <Card className={"MuiElevatedCard--01"}>
//             <CardHeader
//               className={"MuiCardHeader-root"}
//               title={row.id}
//               subheader={row.email}
//               classes={{
//                 title: "MuiCardHeader-title",
//                 subheader: "MuiCardHeader-subheader"
//               }}
//             />
//             <CardContent className={"MuiCardContent-root"}>
//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={6}>
//                   <Grid container>
//                     <Grid container justify="space-evenly">
//                       <label>first_name:</label>
//                       <label>{row.first_name}</label>
//                     </Grid>
//                   </Grid>
//                   <Divider light />
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                   <Grid container>
//                     <Grid container justify="space-evenly">
//                       <label>last_name:</label>
//                       <label>{row.last_name}</label>
//                     </Grid>
//                   </Grid>
//                   <Divider light />
//                 </Grid>
//               </Grid>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))
//     }
//     </Grid>
//   )
// }
