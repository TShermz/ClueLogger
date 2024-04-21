import { configureStore } from "@reduxjs/toolkit";

import clueLogSlice from "./slices/clueLogSlice.js";

const store = configureStore({
  reducer: { clueLog: clueLogSlice.reducer },
});

export default store;
