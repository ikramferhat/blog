import React from 'react';
import Hero from '../../components/Sections/HeroSection/hero';
import MiddleBar from '../../components/Sections/MiddleBarSection/middleBar';
import Carousel from '../../components/material/Carousel' ;
import { Container } from '@material-ui/core';
import './homeStyle.css';
import Search from '../../components/Sections/NavbarSection/search';
import Posts from '../../components/Sections/PostSection/posts';
import CarouselBottom from '../../components/Sections/PostSection/carouselBottom';

const Home = () => {
  return (
    <div className="Home">
      <Hero />
    <Container maxWidth="lg">
    <Search  />
    <MiddleBar />
    <Carousel />
    <Posts />
    <CarouselBottom />
    </Container>
     </div>
    
  )
}
export default Home;