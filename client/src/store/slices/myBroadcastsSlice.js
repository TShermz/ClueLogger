import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  myBroadcastsFilter: "all",
};
const myBroadcastsSlice = createSlice({
  name: "myBroadcasts",
  initialState: initialCounterState,
  reducers: {
    filterBroadcasts(state, action) {
      state.myBroadcastsFilter = action.payload.filterValue;
    },
  },
});

export const myBroadcastsActions = myBroadcastsSlice.actions;
export default myBroadcastsSlice;
