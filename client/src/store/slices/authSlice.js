import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthenticated: false, username: '', email: '' };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
    reducers: {
        authenticate(state, action) {
            if(action.payload.username){
                state.isAuthenticated = true;
                state.username = action.payload.username;
                state.email = action.payload.email;
            } else {
                state.isAuthenticated = false;
            }
        },
    }
});

export const authActions = authSlice.actions;

export default authSlice;