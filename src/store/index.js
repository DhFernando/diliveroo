import { configureStore } from '@reduxjs/toolkit'
import restaurantReducer from './slices/restaurant'
export const store = configureStore({
  reducer: {restaurant: restaurantReducer},
})