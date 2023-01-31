import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import _products from "@/data/products";

const initialState = { loading: false, list: [] };

const productsSlice = createSlice({
  name: "products",
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

export const { startFetch, save } = productsSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  dispatch(save([]));
  dispatch(startFetch());

  const products = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(_products);
    }, 800);
  });

  dispatch(save(products));
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

const productsReducer = productsSlice.reducer;

export default productsReducer;
