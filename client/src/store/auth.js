import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { type: "register", isAuthenticating: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
    reducers: {
        showAuth(state) {
            return true;
        },
        hideAuth(state){
            return false;
        },

    }
});
