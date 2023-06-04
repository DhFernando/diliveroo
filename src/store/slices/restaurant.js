import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
    currentResturentInformation: null,
    sideDrawerOpen: false, 
    openReviewModal: false,
    openDishModal: false
}

export const getRestaurants = createAsyncThunk(
    'restaurant/fetch',
    async () => {
        console.log ('response calling')
        const response = await axios.get('http://localhost:8080/api/v1/restaurant/1')
        console.log (response.data)
        return response.data; 
      }
)

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    toggleReviewModal: (state) => {state.openReviewModal = !state.openReviewModal},
    toggleDrawer: (state) => {state.sideDrawerOpen = !state.sideDrawerOpen}
  },
  extraReducers: (builder) => { 
    builder.addCase(getRestaurants.fulfilled, (state, action) => { 
      state.currentResturentInformation = action.payload.data;  
    })
  },
})

export const { toggleReviewModal, toggleDrawer } = restaurantSlice.actions
export default restaurantSlice.reducer