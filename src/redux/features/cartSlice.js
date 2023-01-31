import { createSlice, createSelector } from "@reduxjs/toolkit";

// const initialState = [];

// get cart state from Local storage
const getCartLS = typeof window !== "undefined" && localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart' || [])) : []


const cartSlice = createSlice({
  name: "cart",
  initialState: getCartLS ? getCartLS : [],
  reducers: {
    addToCart(state, { payload }) {
      const { id } = payload;

      const find = state.find((item) => item.id === id);

      if (find) {
        return state.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        );
      } else {
        state.push({
          ...payload,
          quantity: 1
        });
      }
    },
    increament(state, { payload }) {
      return state.map((item) =>
        item.id === payload
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      );
    },
    decrement(state, { payload }) {
      return state.map((item) =>
        item.id === payload
          ? {
              ...item,
              quantity: (item.quantity >= 1 ? (item.quantity - 1) : 0 )
            }
          : item
          // : (item.quantity > 0) ? item : clear(state)
      );
    },
    clear(state) {
      return [];
    }
  }
});

const cartSelector = (state) => state.cart;

export const cartTotalSelector = createSelector([cartSelector], (cart) =>
  cart.reduce((total, current) => (total += current.quantity), 0)
);

export const cartTotalPriceSelector = createSelector([cartSelector], (cart) =>
  cart.reduce(
    (total, current) => (total += current.salePrice * current.quantity),
    0
  )
);

export const { addToCart, increament, decrement, clear } = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer;