import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    user: null,
    isAuthenticated: false
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = [...state.user, action.payload];
        }
    },
});

// Action creators are generated for each case reducer function
export const {  } = authSlice.actions;
export default authSlice.reducer;
