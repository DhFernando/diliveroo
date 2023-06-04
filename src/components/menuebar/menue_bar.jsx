import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box'; 
import { Divider } from '@mui/material'; 
import { useSelector } from 'react-redux';

export default function MenueBar() {
  const { menu } = useSelector(state=> state.restaurant) 
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if(menu === null) { return <>loading...!</> }

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
      {menu.map((el)=>(
        <Tab key={el.id} label={el.name} />
      ) )} 
      </Tabs>
      <Divider />
    </Box>
  );
}