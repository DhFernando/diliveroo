import * as React from 'react'; 
import CardHeader from '@mui/material/CardHeader'; 
import IconButton from '@mui/material/IconButton';  
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box } from '@mui/material';
 

export default function BasicCard({icon, title, subheader, titleTypography = 'none'}) {

  return (
    <Box sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={icon}
        action={
          <IconButton aria-label="settings">
            <KeyboardArrowRightIcon />
          </IconButton>
        } 
        titleTypographyProps={{variant: titleTypography }}
        title={title}
        subheader={subheader}
      />
    </Box>
  );
}