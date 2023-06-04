import React from 'react'
import ItemCard from '../../atoms/item_card'
import { Box, Grid } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux' 
import DishModal from '../dish_modal/dish_modal'
import Cart from '../cart/cart'

function Project() {
  const dispatch = useDispatch() 
  const openDishModal = false
  // const openDishModal = useSelector((state)=> state.openDishModal)
  
  const handleDishModalToggle = () => {
    // dispatch({ type: 'TOGGLE_DISH_MODAL' })
  }
  return (
    <Box sx={{ mt: 5, mb: 5 }}>
      <Grid container >
        <Grid item xs={8}> 
          <Grid container spacing={2} >
          {[1,1,1,1].map((dish,index)=>(
            <Grid item xs={6} onClick={()=> handleDishModalToggle() } key={index}>
              <ItemCard /> 
            </Grid>
          ))} 
          </Grid> 
        </Grid>
        <Grid item xs={4}> 
        <Cart />
        </Grid>
      </Grid>
      <DishModal openDishModal={openDishModal} handleDishModalToggle={handleDishModalToggle}/>
    </Box>
  )
}

export default Project
