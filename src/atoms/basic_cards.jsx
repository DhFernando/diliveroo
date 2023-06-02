import * as React from 'react'; 
import CardHeader from '@mui/material/CardHeader'; 
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import IconButton from '@mui/material/IconButton';  
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box } from '@mui/material';
 

export default function BasicCard() {

  return (
    <Box sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <ErrorOutlineIcon  aria-label="recipe" /> 
        }
        action={
          <IconButton aria-label="settings">
            <KeyboardArrowRightIcon />
          </IconButton>
        }
        title="Info"
        subheader="Map, allergens and hygiene rating"
      />
    </Box>
  );
}