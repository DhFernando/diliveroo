import { configureStore } from '@reduxjs/toolkit'
import restaurantReducer from './slices/restaurant'
import userReducer from './slices/user'
export const store = configureStore({
  reducer: {
    restaurant: restaurantReducer,
    user: userReducer
  },
})