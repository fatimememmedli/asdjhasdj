import { configureStore } from '@reduxjs/toolkit'
import productReducer from "./../slices/slice"
export const store = configureStore({
  reducer: {
    products: productReducer,
  },
})