import React, { useEffect } from 'react'
import ItemCard from '../../atoms/item_card'
import { Box, Grid, Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux' 
import DishModal from '../dish_modal/dish_modal'
import Cart from '../cart/cart'
import { getMenuByResturantId, toggleDishMoal } from '../../store/slices/restaurant'

function Dishes() {
  const dispatch = useDispatch()  
  const { openDishModal, menu } = useSelector(state=> state.restaurant) 
  useEffect(()=>{
    dispatch(getMenuByResturantId())
  }, [])
  // const openDishModal = useSelector((state)=> state.openDishModal)
  
  const handleDishModalToggle = () => {
    dispatch(toggleDishMoal())
  }
  if (menu === null){ return <>loading...!</>}
  return (
    <Box sx={{ mt: 5, mb: 5 }}>
      <Grid container >
        <Grid item xs={8}> 
          {menu.map((_menu)=> (
            <>
              <Typography variant='h5' sx={{ mb: 2, mt: 2 }}><strong>{_menu.name}</strong></Typography>
              <Grid container spacing={2} >  
                {_menu.dishes.map((dish,index)=>(
                  <Grid item xs={6} onClick={()=> handleDishModalToggle() } key={index}>
                    <ItemCard dish={dish} /> 
                  </Grid>
                ))} 
              </Grid> 
            </> 
            ))}
          
        </Grid>
        <Grid item xs={4}> 
        <Cart />
        </Grid>
      </Grid>
      <DishModal openDishModal={openDishModal} handleDishModalToggle={handleDishModalToggle}/>
    </Box>
  )
}

export default Dishes
