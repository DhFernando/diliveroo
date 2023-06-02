import * as React from 'react';
import Button from '@mui/material/Button'; 

export default function AtomicButton({icon, label}) { 
  return ( 
  <> 
    <Button sx={{ color: '#00ccbc', borderColor: '#e0e0e0' }}  variant="outlined" startIcon={icon}>
        {label}
    </Button>   
  </>
  );
}
