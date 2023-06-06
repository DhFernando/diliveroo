import React, { useEffect, useState } from 'react'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { Button, Card, CardContent, Typography } from '@mui/material';

function Cart() {

  const [ applystyles, setApplystyles ] = useState({})

  const handleScroll = () => {
    if( window.location.pathname === '/'){
      const el = document.getElementById('cartEl') 
      console.log(window.location.pathname)
      if(el.getBoundingClientRect().y <= 100){
        setApplystyles({position: 'fixed', top: 200, minWidth: 450})
      }else {
        setApplystyles({})
    }
    }
    
  }

  useEffect(()=>{ 
      window.addEventListener('scroll', handleScroll);  
  }, []) 

    return (
      <>
        <div id="cartEl"></div>
        <Card sx={{ minWidth: 420, ml: 4, pb: 5, textAlign: 'center', ...applystyles }}> 
            <CardContent>
              <ProductionQuantityLimitsIcon sx={{ fontSize: 50, color:'text.secondary' }}  /> 
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Your bucket is empty
              </Typography>
            </CardContent> 
              <Button  sx={{ backgroundColor: 'gray', color: '#ffffff', textTransform: 'none', width: '90%' }} size="large">Go to checkout</Button> 
          </Card>
      </>
        
      );
}

export default Cart