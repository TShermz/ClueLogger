import { createSlice } from "@reduxjs/toolkit";
import { queryClient } from "../../util/http";

const initialCounterState = {
  currentBroadcastFilter: "hard",
  currentBroadcastFormFilter: "hard",
  selectedBroadcast: undefined,
  showModal: false,
  isEditing: false,
  editBroadcastId: null,
};
const broadcastFormSlice = createSlice({
  name: "broadcastForm",
  initialState: initialCounterState,
  reducers: {
    filterBroadcastForm(state, action) {
      state.currentBroadcastFormFilter =
        action.payload.filterValue === "all"
          ? "hard"
          : action.payload.filterValue;
    },
    selectBroadcast(state, action) {
      state.selectedBroadcast = action.payload.broadcast;
    },
    resetBroadcastForm(state) {
      state.selectedBroadcast = undefined;
      state.currentBroadcastFormFilter = "hard";
    },
    toggleModal(state, action) {
      state.showModal = !state.showModal;
      state.isEditing = action.payload ? true : false;
      state.editBroadcastId = action.payload ? action.payload.id : null;
      state.isEditing
        ? queryClient.invalidateQueries(["myBroadcasts", action.payload.id])
        : null;
    },
  },
});

export const broadcastFormActions = broadcastFormSlice.actions;
export default broadcastFormSlice;
