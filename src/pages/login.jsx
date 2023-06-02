 
import { GoogleLogin } from '@react-oauth/google';
import React, { useEffect } from 'react'
import axios from 'axios'

function Login() {
  return (
    <div>
      <GoogleLogin
            onSuccess={credentialResponse => {
                console.log(credentialResponse);
                
            }}
            onError={() => {
                console.log('Login Failed');
            }}
        />;
    </div>
  )
}

export default Login
