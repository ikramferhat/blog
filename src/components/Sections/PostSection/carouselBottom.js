import React from "react";
import Slider from "react-slick";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import PaperCarouselBottom from "./PaperCarouselBottom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../Image/Posts-image/img1.jpg';
import img2 from '../../Image/Posts-image/img2.jpg';
import img3 from '../../Image/Posts-image/img3.jpg';
import img4 from '../../Image/Posts-image/img4.jpg';
import img5 from '../../Image/Posts-image/img5.jpg';
import img6 from '../../Image/Posts-image/img6.jpg';
import img7 from '../../Image/Posts-image/img7.jpg';
import img8 from '../../Image/Posts-image/img8.jpg';
const videoMp4 = 'https://www.w3schools.com/html/mov_bbb.mp4';
const videoOgg = 'https://www.w3schools.com/html/mov_bbb.ogg';



const useStyles = makeStyles((theme) => ({
    carousel: {
        margin:"0 auto",
        marginBottom:"50px",
      },
    }));

export default function CarouselBottom() {
    const classes = useStyles();
    return (  
      <Grid xs={12} sm={10} className={classes.carousel} >
  <Slider autoplay={true} dots={true} infinite={false} speed={500} slidesToScroll={1} arrows={false} slidesToShow={1}>
       <div>
      <PaperCarouselBottom 
      image={img5}
      title={"What should I eat to be healthy?"}
      description={"It’s easy to wonder which foods are healthiest. A vast number of foods are both healthy and tasty. By filling your plate with fruits, vegetables, quality protein, and other whole foods, you’ll have meals that are colorful, versatile, and good for you."}
      />
      </div>
      <div>
      <PaperCarouselBottom 
      image={img8}
      title={"Harmful Effects of Junk Food"}
      description={"Eating junk food on a regular basis can lead to an increased risk of obesity and chronic diseases like cardiovascular disease, type 2 diabetes, non-alcoholic fatty liver disease and some cancers....."}
      />
      </div>
  </Slider>
  </Grid>
        
    );
  }
   