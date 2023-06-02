import React from 'react'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import MenueBar from '../components/menuebar/menue_bar'
import Project from '../components/project/project'
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
          <Project /> 
        </Container>
        <Footer />
    </>
  )
} 

export default MenuePage
