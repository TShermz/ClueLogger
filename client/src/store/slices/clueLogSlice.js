import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { currentTier: "general", isEditing: false };
const clueLogSlice = createSlice({
  name: "clueLog",
  initialState: initialCounterState,
  reducers: {
    filter(state, action) {
      state.currentTier = action.payload.filterValue;      
    },
    toggleEdit(state){
      state.isEditing = !state.isEditing;
    }
  },
});

export const clueLogActions = clueLogSlice.actions;
export default clueLogSlice;
