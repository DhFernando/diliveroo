import * as React from 'react';
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box'; 
import { Divider } from '@mui/material'; 
import { useSelector } from 'react-redux';

export default function MenueBar() {
  const { menu } = useSelector(state=> state.restaurant) 
  const [value, setValue] = React.useState(0);
  const [ applystyles, setApplystyles ] = useState({})
  
  const handleChange = (event, newValue) => {
    setValue(newValue); 
  };

  const handleScroll = () => {
    const el = document.getElementById('menuEL') 
    if(el.getBoundingClientRect().y <= 75){
      setApplystyles({position: 'fixed', top: 75})
    }else {
      setApplystyles({})
    }
  }

  React.useEffect(()=>{
    if(menu){
      window.addEventListener('scroll', handleScroll); 
    }
  }, [menu])

  const scrolTo = (section)=>{
    const toEl = document.getElementById(section.replace(/[^a-zA-Z ]/g, "")).offsetTop - 220
    window.scroll({ top: toEl, behavior: "smooth" })
  }

  if(menu === null) { return <>loading ...!</> }

  return (
    <div  > 
      <div id='menuEL'></div>
      <Box sx={{ minWidth: '100%', bgcolor: 'background.paper', ...applystyles }} >
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
          <Tab key={el.id} label={el.name} onClick={()=> scrolTo(el.name)} />
        ) )} 
        </Tabs>
        <Divider />
      </Box>
    </div>
  );
}