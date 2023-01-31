import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authAPIService from './authAPIService';




const initialState = {
    userId: null,
    user: null,
    isAuthenticated: false,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
    isTxnID: false,
};


export const signupWithOTP = createAsyncThunk(
    "auth/signupWithOTP",
    async(userData, thunkAPI) => {
        try {
            return await authAPIService.signupWithOTP(userData);
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);


export const signupConfirmOTP = createAsyncThunk(
    "auth/signupConfirmOTP",
    async(otpData, thunkAPI) => {
        try {
            return await authAPIService.signupConfirmOTP(otpData);
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);


export const signupSetPassword = createAsyncThunk(
    "auth/signupSetPassword",
    async(signupSetPasswordData, thunkAPI) => {
        try {
            return await authAPIService.signupSetPassword(signupSetPasswordData);
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);


export const login = createAsyncThunk(
    "auth/login",
    async(userData, thunkAPI) => {
        try {
            return await authAPIService.login(userData);
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);


export const checkUserStatus = createAsyncThunk(
    "auth/status",
    async(thunkAPI) => {
        try {
            return await authAPIService.user_auth_status();
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);


export const getUser = createAsyncThunk(
    "auth/getUser",
    async(thunkAPI) => {
        try {
            return await authAPIService.getUser();
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);


export const logout = createAsyncThunk(
    "auth/logout",
    async() => {
        authAPIService.logout();
    }
);









export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.isAuthenticated = false;
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = '';
            state.isTxnID = false;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(signupWithOTP.pending, (state)=>{
                state.isLoading = true;
            })
            .addCase(signupWithOTP.fulfilled, (state, {payload})=>{
                state.isLoading = false;
                state.isSuccess = true;
                state.message = payload.message;
                state.isTxnID = true;
            })
            .addCase(signupWithOTP.rejected, (state, {payload})=>{
                state.isLoading = false;
                state.isError = true;
                state.message = payload.message;
                state.isTxnID  = true;
            })
            .addCase(signupConfirmOTP.pending, (state)=>{
                state.isLoading = true;
                state.isTxnID = true;
            })
            .addCase(signupConfirmOTP.fulfilled, (state, {payload})=>{
                state.isLoading = false;
                state.isSuccess = true;
                state.message = payload.message;
                state.isTxnID = true;
            })
            .addCase(signupConfirmOTP.rejected, (state, {payload})=>{
                state.isLoading = false;
                state.isError = true;
                state.message = payload.message;
                state.isTxnID = true;
            })
            .addCase(signupSetPassword.pending, (state)=>{
                state.isLoading = true;
                state.isTxnID = true;
            })
            .addCase(signupSetPassword.fulfilled, (state, {payload})=>{
                state.isLoading = false;
                state.isSuccess = true;
                state.message = payload.message;
                state.isTxnID = true;
            })
            .addCase(signupSetPassword.rejected, (state, {payload})=>{
                state.isLoading = false;
                state.isError = true;
                state.message = payload.message;
                state.isTxnID = true;
            })
            .addCase(login.pending, (state)=>{
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, {payload})=>{
                state.isLoading = false;
                state.isSuccess = true;
                state.message = payload.message;
                state.isAuthenticated = true;
                state.userId = payload.user_id;
                state.user = payload.user;
            })
            .addCase(login.rejected, (state, {payload})=>{
                state.isLoading = false;
                state.isError = true;
                state.message = payload.message;
                state.isAuthenticated = false;
                state.userId = null;
                state.user = null;
            })
            .addCase(logout.fulfilled, (state, {payload})=>{
                state.isSuccess = true;
                // state.message = payload.message;
                state.isAuthenticated = false;
                state.userId = null;
                state.user = null;
            })
            .addCase(checkUserStatus.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isAuthenticated = true;
            })
            .addCase(checkUserStatus.rejected, (state, {payload}) => {
                state.isLoading = false;
                state.isError = true;
                state.isAuthenticated = false;
                // state.message = payload.error;
                state.userId = null;
                state.user = null;
            })
            .addCase(getUser.pending, (state)=>{
                state.isLoading = true;
            })
            .addCase(getUser.fulfilled, (state, {payload})=>{
                state.isLoading = false;
                state.isSuccess = true;
                state.user = payload.user;
                state.userId = payload.user_id;
            })
            .addCase(getUser.rejected, (state, {payload})=>{
                state.isLoading = false;
                state.isError = true;
                // state.message = payload.error;
                state.userId = null;
                state.user = null;
            });
    }
});


export const {reset} = authSlice.actions;

export default authSlice.reducer;