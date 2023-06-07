import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography'; 


export default function ItemCard({dish}) {
 
  return (
    <Card sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            {dish.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {dish.description}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" component="div">
            {`$ ${dish.price}`}
          </Typography>
        </CardContent>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
        <CardMedia
          component="img"
          src={dish.imageUrl}
          alt=""
          sx={{ width: 100, height: 100, paddingRight: 4 }}
        />
      </Box>
    </Card>
  );
}
