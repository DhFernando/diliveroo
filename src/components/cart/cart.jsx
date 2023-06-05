import React from 'react'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { Button, Card, CardContent, Typography } from '@mui/material';

function Cart() {
    return (
        <Card sx={{ minWidth: 275, ml: 4, pb: 5, textAlign: 'center' }}>
          <CardContent>
            <ProductionQuantityLimitsIcon sx={{ fontSize: 50, color:'text.secondary' }}  />
            
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Your bucket is empty
            </Typography>
          </CardContent> 
            <Button  sx={{ backgroundColor: 'gray', color: '#ffffff', textTransform: 'none', width: '90%' }} size="large">Go to checkout</Button> 
        </Card>
      );
}

export default Cart