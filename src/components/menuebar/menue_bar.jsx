import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box'; 
import { Divider } from '@mui/material';
 

export default function MenueBar() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: '100%', bgcolor: 'background.paper' }} >
      <Divider />
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        TabIndicatorProps={{ sx: { display: 'none' }}}
        sx={{
          marginTop: 2,
          "& button": { borderRadius: 5  },
          "& button.MuiTab-root": {
            minHeight: '30px', 
            padding: "0px 20px"
           },
           "& button.Mui-selected": {
            backgroundColor: '#00ccbc',
            color: '#FFFFFF'
           },

        }}
      > 
        <Tab  label="Item One" /> 
        <Tab label="Item Two" />  
        <Tab label="Item Three" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" />
      </Tabs>
      <Divider />
    </Box>
  );
}