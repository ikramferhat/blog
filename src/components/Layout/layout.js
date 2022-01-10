import React from 'react'
import Footer from '../Sections/FooterSection/footer'
import Navbar from '../Sections/NavbarSection/navbar1'
import { Container } from './layoutStyle'
import Hero from '../../components/Sections/HeroSection/hero'

export const Layout = ({children}) => {
  return ( 
    <Container>
     <Navbar />
     <main>{children}</main> 
     <Footer /> 
    </Container>

  )
}