import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productSlice";
import featuredProductsReducer from "../features/featuredProductsSlice";
import cartReducer from "../features/cartSlice";
import authReducer from '../features/authSlice';


const store = configureStore({
  reducer: {
    products: productsReducer,
    featuredProducts: featuredProductsReducer,
    cart: cartReducer,
    auth: authReducer,
  },
});

export default store;
