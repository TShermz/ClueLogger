import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  currentLogFilter: "general",
  isEditing: false,
};
const myLogsSlice = createSlice({
  name: "myLogs",
  initialState: initialCounterState,
  reducers: {
    filterLog(state, action) {
      state.currentLogFilter = action.payload.filterValue;
    },
    toggleEdit(state) {
      state.isEditing = !state.isEditing;
    },
  },
});

export const myLogsActions = myLogsSlice.actions;
export default myLogsSlice;
