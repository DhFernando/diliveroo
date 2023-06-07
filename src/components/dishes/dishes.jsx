import React, { useEffect, useState } from 'react'
import ItemCard from '../../atoms/item_card'
import { Box, Grid, Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux' 
import DishModal from '../dish_modal/dish_modal'
import Cart from '../cart/cart'
import { getMenuByResturantId, toggleDishMoal } from '../../store/slices/restaurant'

function Dishes() {
  const dispatch = useDispatch() 
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); 
  const { openDishModal, menu } = useSelector(state=> state.restaurant) 

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  
  useEffect(() => {
    dispatch(getMenuByResturantId())
    window.addEventListener('resize', handleResize);
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const handleDishModalToggle = () => {
    dispatch(toggleDishMoal())
  }
  if (menu === null){ return <>loading...!</>}
  return (
    <Box sx={{ mt: 5, mb: 5 }}> 
      <Grid container >
        <Grid item sx={12} sm={12} lg={8} md={6}> 
          {menu.map((_menu, index)=> (
            <Box key={index}>
              <Typography variant='h5' sx={{ mb: 2, mt: 2 }} id={_menu.name.replace(/[^a-zA-Z ]/g, "")}><strong>{_menu.name}</strong></Typography>
              <Grid container spacing={2} >  
                {_menu.dishes.map((dish,index)=>(
                  <Grid item xs={12} sm={12} lg={6} md={12} onClick={()=> handleDishModalToggle() } key={index}>
                    <ItemCard dish={dish} /> 
                  </Grid>
                ))} 
              </Grid> 
            </Box> 
            ))}
          
        </Grid>
        {windowWidth > 900 && (
          <Grid  item sm={12} md={6} lg={4} > 
            <Cart />
          </Grid>
        )}
        
      </Grid>
      <DishModal openDishModal={openDishModal} handleDishModalToggle={handleDishModalToggle}/>
    </Box>
  )
}

export default Dishes
