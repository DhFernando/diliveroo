import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import logo from './../../images/Deliveroo-logo.png';
import { useSelector, useDispatch } from 'react-redux'
import { toggleDrawer } from '../../store/slices/restaurant';

export default function SideDrawer() {
  const { sideDrawerOpen } = useSelector(state=> state.restaurant) 
  const dispatch = useDispatch()
   
  const handleToggleDrawer = () => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    dispatch(toggleDrawer())
  };

  const list = (
    <Box
      sx={{ width: 370 }}
      onClick={handleToggleDrawer()}
      onKeyDown={handleToggleDrawer()}
    >
      <Box sx={{ padding: 1, pl: 5 }}>
        <img src={logo} alt="Logo" style={{ height: 55 }} />
      </Box>
      <Divider />
      <Button
        sx={{ background: '#00ccbc', color: '#ffff' , width: '94%', margin: '30px 10px 10px 10px', padding: 2 }}
      ><strong>Sign up or Log in</strong></Button>
       <List> 
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <HelpOutlineIcon />
              </ListItemIcon>
              <ListItemText primary={'FAQs'} />
            </ListItemButton>
          </ListItem> 
      </List>
    </Box>
  );

  return (
    <>
      <Drawer
        anchor="right"
        open={sideDrawerOpen}
        onClose={handleToggleDrawer()}
      >
        {list}
      </Drawer>
    </>
  );
}
