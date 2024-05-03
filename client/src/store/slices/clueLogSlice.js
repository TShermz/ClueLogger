import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  currentLogFilter: "general",
  currentBroadcastFilter: "hard",
  isEditing: false,
};
const clueLogSlice = createSlice({
  name: "clueLog",
  initialState: initialCounterState,
  reducers: {
    filterLog(state, action) {
      state.currentLogFilter = action.payload.filterValue;
    },
    filterBroadcasts(state, action) {
      state.currentBroadcastFilter = action.payload.filterValue;
    },
    toggleEdit(state) {
      state.isEditing = !state.isEditing;
    },
  },
});

export const clueLogActions = clueLogSlice.actions;
export default clueLogSlice;
