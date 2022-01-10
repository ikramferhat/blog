import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import RecipeReviewCard from '../../material/CardPosts';
import pasta from '../../Image/Posts-image/pasta.jpg';
import pizza from '../../Image/Posts-image/pizza.jpeg';
import pancake from '../../Image/Posts-image/pancake.jpeg';
import madlen from '../../Image/Posts-image/madlen.jpeg';
import vid1 from '../../Image/Posts-image/vid4.mp4';
import vid2 from '../../Image/Posts-image/vid2.mp4';
import vid3 from '../../Image/Posts-image/vid3.mp4';
import ButtonArow from '../../material/ButtonArow';
import Slider from "react-slick";



const useStyles = makeStyles((theme) => ({
  root: {
   marginTop:"50px",
   marginBottom:"50px", 
   padding:"0px 50px"
  }
  ,
  carousel: {
    margin:"0 auto",
     marginBottom:"50px",
     
  },
  slider:{
    height:"100px"
  }

  }));

export default function Posts() {
  const classes = useStyles();

  return (
    <Grid  container xs={12} spacing={1} align="center" justifyContent="space-between" className={classes.root}>
        <Grid  item sm={12} xs={12} align="right">
         <ButtonArow
         title={"share your recipes"}
          />
        </Grid> 
        <Grid  item sm={4} xs={12} elevation={7} >
            <RecipeReviewCard
            component={"img"}
            src={pasta}
            />   
        </Grid>
        <Grid  item sm={4} xs={12}>
        <RecipeReviewCard
            component={"img"}
            src={madlen}
            /> 
        </Grid> 
        <Grid  item sm={4} xs={12}>
        <RecipeReviewCard
            component={"img"}
            src={pancake}
            /> 
        </Grid> 
        <Grid  item sm={4} xs={12}>
        <RecipeReviewCard
            component={"img"}
           src={pizza}
            />  
        </Grid> 
        <Grid  item sm={4} xs={12}>
        <RecipeReviewCard
            component={"video"}
            src={vid1}
            />  
        </Grid> 
        <Grid  item sm={4} xs={12}>
        <RecipeReviewCard
            component={"img"}
            src={pasta}
            />  
        </Grid> 
        <Grid  item sm={12} xs={12} align="right"style={{marginTop:"30px"}}>
         <ButtonArow
         title={"Show more"}
          />
        </Grid> 

   </Grid>

     
  );
}
