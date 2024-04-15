import { createSlice } from "@reduxjs/toolkit";
import { filterLog } from "../../data/clueLogHelper";

const initialCounterState = { currentTier: "general", currentItem: "all" };
const clueLogSlice = createSlice({
  name: "clueLog",
  initialState: initialCounterState,
  reducers: {
    filter(state, action) {
      if (action.payload.filterType === "item") {
        state.currentItem = action.payload.filterValue;
      }

      if (action.payload.filterType === "tier") {
        state.currentTier = action.payload.filterValue;
      }

      return filterLog(state);
    
    },
  },
});

export const clueLogActions = clueLogSlice.actions;
export default clueLogSlice;
