import React from 'react'
import MenueBar from '../components/menuebar/menue_bar'
import Dishes from '../components/dishes/dishes'
import Hero from '../components/hero/hero'
import SideDrawer from '../components/drawer/drawer' 
import { Container } from '@mui/material'

function MenuePage() {
  return ( 
      <Container maxWidth="xl">
        <SideDrawer />
        <Hero />
        <MenueBar />
        <Dishes /> 
      </Container> 
  )
} 

export default MenuePage
