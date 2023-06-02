import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import img from '../images/hero-image.png';

export default function ItemCard() {
  return (
    <Card sx={{ display: 'flex', maxWidth: 550, minHeight: 132, alignItems: 'center' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <CardContent sx={{ flex: '1 0 auto', width: 300 }}>
          <Typography component="div" variant="h6">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" component="div">
            $17.89
          </Typography>
        </CardContent>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
        <CardMedia
          component="img"
          src={img}
          alt=""
          sx={{ width: 100, height: 100, paddingRight: 4 }}
        />
      </Box>
    </Card>
  );
}
