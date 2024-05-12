import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  myBroadcastsFilter: "hard",
};
const myBroadcastsSlice = createSlice({
  name: "myBroadcasts",
  initialState: initialCounterState,
  reducers: {
    filterBroadcasts(state, action) {
      state.currentBroadcastFilter = action.payload.filterValue;
    },
  },
});

export const myBroadcastsActions = myBroadcastsSlice.actions;
export default myBroadcastsSlice;
