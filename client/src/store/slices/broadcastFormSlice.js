import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  currentBroadcastFilter: "hard",
  currentBroadcastFormFilter: "hard",
  selectedBroadcast: undefined,
  showModal: false
};
const broadcastFormSlice = createSlice({
  name: "broadcastForm",
  initialState: initialCounterState,
  reducers: {
    filterBroadcastForm(state, action){
      state.currentBroadcastFormFilter = action.payload.filterValue;
      state.selectedBroadcast = undefined;
    },
    selectBroadcast(state, action){
      state.selectedBroadcast = action.payload.broadcast;
    },
    resetBroadcastForm(state){
      state.selectedBroadcast = undefined;
      state.currentBroadcastFormFilter = 'hard';
    },
    toggleModal(state){
      state.showModal = !state.showModal;
    }
  },
});

export const broadcastFormActions = broadcastFormSlice.actions;
export default broadcastFormSlice;