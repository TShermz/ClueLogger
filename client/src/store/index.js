import { configureStore } from "@reduxjs/toolkit";

import clueLogReducer from "./clueLog.js";

const store = configureStore({
  reducer: { clueLog: clueLogReducer },
});

export default store;