import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios' 

const initialState = {
  userLoggedIn: localStorage.getItem('token') ? true : false, 
  userInfo: null
}
 
export const login = createAsyncThunk(
  'restaurant/login',
  async ({email, password}) => { 
    console.log(email, password)
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', { email, password})  
      return response.data; 
    }
)

export const singin = createAsyncThunk(
  'restaurant/singin',
  async ({email, password, name}) => {
      const response = await axios.post('http://localhost:8080/api/v1/auth/signup', { email, password, name})  
      return response.data; 
    }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token')
      state.userLoggedIn = false;
      state.userInfo = null;
    }
  },
  extraReducers: (builder) => { 
    builder.addCase(login.fulfilled, (state, action) => { 
      state.userInfo = {
        name: action.payload.data.name,
        email: action.payload.data.email
      };
      state.userLoggedIn = true;
      localStorage.setItem('token', 'Bearer ' + action.payload.data.token);   
    })

    builder.addCase(singin.fulfilled, (state, action) => { 
      console.log(action)
      state.userInfo = {  };  
    })
  },
})

export const { logout } = userSlice.actions
export default userSlice.reducer