import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice';

export const store = configureStore({
    reducer: {
        // auth:Reducer
        cart: cartReducer
    }
})