import React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import AtomicButton from '../../atoms/button'; 
import logo from './../../images/Deliveroo-logo.png';
import Divider from '@mui/material/Divider';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux' 
import { toggleDrawer } from '../../store/slices/restaurant';
import { logout } from '../../store/slices/user';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#F5F5F5',
  color: 'gray',
  marginRight: 'auto',
  marginLeft: 'auto',
  border: '1px solid #ccc', // Add the border style
  padding: '4px', // Adjust the padding as needed
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    minWidth: '500px',
  },
}));

const CustomAppBar = styled(AppBar)({
  boxShadow: 'none', // Remove the box shadow
});

export default function Header() {
  
  const dispatch = useDispatch() 
  const {userLoggedIn} = useSelector((state)=> state.user)
  const HandelToggleDrawer = (event) => { 
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    dispatch(toggleDrawer())
  };

  const loginaction = () => {
    if(userLoggedIn){
      dispatch(logout())
    }
  }

  return (
    <Box > 
      <Box sx={{ flexGrow: 1, paddingLeft: 10, paddingRight: 10,   }}>
        <CustomAppBar position="fixed" style={{ background: '#fff',borderBottom: '1px solid #dbdbdb' }}>
          <Toolbar sx={{ justifyContent: 'space-between', height: 75 }}>
            <img src={logo} alt="Logo" style={{ height: 55 }} />
            <Search className="header__search">
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search Tossed - St Martin's Lane"
                inputProps={{ 'aria-label': 'search' }}
                className="header__input"
              />
            </Search> 
            <Box sx={{ marginRight: 2 }}>
              <AtomicButton className="header__button" icon={<ShoppingCartIcon />} label='USD 4.29'/>
            </Box> 
            <Box sx={{ marginRight: 2 }} onClick={()=> {loginaction()}}>
              <AtomicButton className="header__button" icon={<HomeIcon />} label={userLoggedIn ? 'Logout' : 'Sign up or log in'}/>
            </Box> 
            <Box sx={{ marginRight: 2 }} onClick={(e)=> HandelToggleDrawer(e)}>
              <AtomicButton  className="header__button" icon={<MenuIcon />} label='Menu'/>
            </Box>  
          </Toolbar>
        </CustomAppBar>
        <Divider flexItem />  
      </Box>
      
    </Box>
  );
}
