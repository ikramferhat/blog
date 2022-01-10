import React from "react";
import Slider from "react-slick";
import { makeStyles } from '@material-ui/core/styles';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import junkfood from "../Image/Carousel-images/junkfood.png";
import cake from "../Image/Carousel-images/cake.png";
import salad from "../Image/Carousel-images/salad.png";
import dinner from "../Image/Carousel-images/dinner.png";
import juice from "../Image/Carousel-images/juice.png";
import CarouselCard from "./CarouselCard";
import { Grid } from "@material-ui/core";




  const carouselProperties = {
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          centerMode: false,
          slidesToScroll: 2,
        },
      },
    ],
  };
  
const useStyles = makeStyles((theme) => ({

    slider: {
      width:"70%"    
    },
    }));

export default function SimpleSlider() {
    const classes = useStyles();

    return (
      <Grid  sm={8} xs={12} align="center" style={{margin:"0 auto", marginBottom:"50px"}}>
      <Slider {...carouselProperties} className={classes.slider}>
         <div>
         <CarouselCard
         image={juice}
         title={"Juice"}
        >
        </CarouselCard>
        </div>

        <div>
        <CarouselCard
         image={dinner}
         title={"Dinner"}
        >
        </CarouselCard>
        </div>

        <div>
        <CarouselCard
         image={salad}
         title={"Salads"}
        >
        </CarouselCard>
        </div>

        <div>
        <CarouselCard
         image={junkfood}
         title={"Junk food"}
        >
        </CarouselCard>
        </div>

        <div>
        <CarouselCard
         image={cake}
         title={"Cake"}
        >
        </CarouselCard>
        </div>      
      </Slider>
      </Grid>
    );
  }