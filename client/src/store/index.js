import { configureStore } from "@reduxjs/toolkit";

import clueLogSlice from "./slices/clueLogSlice.js";
import authSlice from "./slices/authSlice.js";

const store = configureStore({
  reducer: { clueLog: clueLogSlice.reducer, auth: authSlice.reducer },
});

export default store;
