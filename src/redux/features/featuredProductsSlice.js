import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {featuredProducts} from "@/data/products";

const initialState = { loading: false, list: [] };

const featuredProductsSlice = createSlice({
  name: "featuredProducts",
  initialState,
  reducers: {
    startFetch(state) {
      state.loading = true;
    },
    save(state, action) {
      const { payload } = action;
      state.loading = false;
      state.list = payload;
    }
  }
});

export const { startFetch, save } = featuredProductsSlice.actions;

export const fetchFeaturedProducts = () => async (dispatch) => {
  dispatch(save([]));
  dispatch(startFetch());

  const fproducts = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(featuredProducts);
    }, 800);
  });

  dispatch(save(fproducts));
};

// export const fetchProducts = createAsyncThunk(
//   "products/fetch", 
//   async () => {
//     const res = await fetch("https://fakestoreapi.com/products");
//     dispatch(save([]));
//     dispatch(startFetch());
//     console.log(res);
//     const data = await res.json();
//     return data;
// });

const featuredProductsReducer = featuredProductsSlice.reducer;

export default featuredProductsReducer;
