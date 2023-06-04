import React from 'react'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import MenueBar from '../components/menuebar/menue_bar'
import Dishes from '../components/dishes/dishes'
import Hero from '../components/hero/hero'
import SideDrawer from '../components/drawer/drawer' 
import { Container } from '@mui/material'

function MenuePage() {
  return (
    <>
        <Header />
        <Container maxWidth="xl">
          <SideDrawer />
          <Hero />
          <MenueBar />
          <Dishes /> 
        </Container>
        <Footer />
    </>
  )
} 

export default MenuePage
