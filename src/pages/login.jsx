import React, { useEffect, useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import {
  Container,
  Typography,
  TextField,
  Button, 
  Divider,
} from '@mui/material';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { login, singin } from '../store/slices/user'
import { useNavigate } from 'react-router';

const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { userLoggedIn } = useSelector(state=> state.user) 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loginOrSingin, setLoginOrSingin] = useState('singin');

  useEffect(()=>{
    if(userLoggedIn){
      navigate('/');
    }
  },[userLoggedIn])

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const reset = () => {
    setEmail('')
    setPassword('')
    setName('')
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if(loginOrSingin === 'login') {
      dispatch(login({email, password})) 
    } else {
      dispatch(singin({email, password, name}))
      setLoginOrSingin('login')
    }
    reset()
  };
 
  const handleFacebookLogin = () => {
    // Handle login with Facebook
    // You can implement the Facebook authentication logic here
  };

  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: '10%',marginBottom: '10%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}> 
      <Typography component="h1" variant="h5" style={{ marginBottom: '16px' }}>
        <strong>Sign up or log in</strong>
      </Typography>
      <form style={{ width: '100%', marginTop: '8px' }} onSubmit={handleFormSubmit}>
        {loginOrSingin === 'singin' && (
          <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          autoFocus
          value={name}
          onChange={handleNameChange}
        />
        )}
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={handleEmailChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained" 
          sx={{ margin: '24px 0 16px', padding: '10px', backgroundColor: '#00ccbc'}}
        >
         <strong> Sign In</strong>
        </Button>
        <Box sx={{ color:'#00ccbc' }}>
          {loginOrSingin === 'login' ? (
            <Typography variant='body2' onClick={()=>{setLoginOrSingin('singin'); reset();}}>Create new account ?</Typography>
          ) : ( 
            <Typography variant='body2' onClick={()=>{setLoginOrSingin('login'); reset(); }}>Do you have an account ?</Typography> 
          )}
        </Box>
        
        
        <Divider style={{ margin: '16px 0' }} />
        <Box sx={{  mb: 1 }}>
          <GoogleLogin
              onSuccess={credentialResponse => {
                  console.log(credentialResponse);
                  
              }}
              onError={() => {
                  console.log('Login Failed');
              }}
          />
        </Box>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleFacebookLogin}
          disabled
        >
          Sign In with Facebook
        </Button>
        
      </form>
    </Container>
  );
};

export default LoginPage;
