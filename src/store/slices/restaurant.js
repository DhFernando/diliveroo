import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
    sideDrawerOpen: false, 
    openReviewModal: false,
    openDishModal: false,
    currentResturentInformation: null,
    menu: null,
    reviews: null
}

export const getRestaurants = createAsyncThunk(
    'restaurant/fetch',
    async () => { 
        const response = await axios.get('http://localhost:8080/api/v1/restaurant/1') 
        return response.data; 
      }
)

export const getMenuByResturantId = createAsyncThunk(
  'restaurant/menu',
  async () => { 
    const response = await axios.get('http://localhost:8080/api/v1/restaurant/1/menu') 
    return response.data; 
  },
)

export const getReviewsByResturantId = createAsyncThunk(
  'restaurant/reviews',
  async () => { 
    const response = await axios.get('http://localhost:8080/api/v1/reviews/1') 
    return response.data; 
  },
)

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    toggleReviewModal: (state) => {state.openReviewModal = !state.openReviewModal},
    toggleDrawer: (state) => {state.sideDrawerOpen = !state.sideDrawerOpen},
    toggleDishMoal: (state) => {state.openDishModal = !state.openDishModal}
  },
  extraReducers: (builder) => { 
    builder.addCase(getRestaurants.fulfilled, (state, action) => { 
      state.currentResturentInformation = action.payload.data;  
    })

    builder.addCase(getMenuByResturantId.fulfilled, (state, action) => { 
      state.menu = action.payload.data;  
    });

    builder.addCase(getReviewsByResturantId.fulfilled, (state, action) => { 
      state.reviews = action.payload.data;  
    });
  },
})

export const { toggleReviewModal, toggleDrawer, toggleDishMoal } = restaurantSlice.actions
export default restaurantSlice.reducer