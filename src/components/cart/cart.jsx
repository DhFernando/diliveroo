import React, { useEffect, useState } from 'react'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';

function Cart() {

  const [ applystyles, setApplystyles ] = useState({})

  const handleScroll = () => {
    if( window.location.pathname === '/'){
      const el = document.getElementById('cartEl')
      if(el.getBoundingClientRect().y <= 100){
        setApplystyles({position: 'fixed', top: 200})
      }else {
        setApplystyles({})
    }
    }
    
  }

  useEffect(()=>{ 
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };  
  }, []) 

    return (
        <Box id="cartEl">
          <Grid item sm={12} md={6} lg={4}  sx={{ textAlign: 'center', ...applystyles }}>
            <Card sx={{ width: "260%" , ml: 4, pb: 5,}}> 
              <CardContent>
                <ProductionQuantityLimitsIcon sx={{ fontSize: 50, color:'text.secondary' }}  /> 
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Your bucket is empty
                </Typography>
              </CardContent> 
                <Button  sx={{ backgroundColor: 'gray', color: '#ffffff', textTransform: 'none', width: '90%' }} size="large">Go to checkout</Button> 
            </Card>
          </Grid>
        </Box>
        
      );
}

export default Cart