import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    items: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items = [...state.items, action.payload];
        },
        removeFromCart: (
            state,
            action
        ) => {
            const index = state.items.findIndex(
                (item) => item._id === action.payload.id
            );

            let newCart = [...state.items];

            if (index >= 0) {
                newCart.splice(index, 1);
            } else {
                console.log(
                `Cant remove product (id: ${action.payload.id}) as its not in cart!`
                );
            }

            state.items = newCart;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

// Selectors -> retrieving items in state to use in different components
export const selectCartItems = (state) => state.cart.items;
export const selectCartItemsWithId = (state, id) => {
    state.cart.items.filter((item) => item._id === id);
};
export const selectCartTotal = (state) =>
    state.cart.items.reduce(
        (total, item) => (total += item.price),
        0
    );
export default cartSlice.reducer;
