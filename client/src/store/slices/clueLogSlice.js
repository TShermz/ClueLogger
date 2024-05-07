import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  currentLogFilter: "general",
  currentBroadcastFilter: "hard",
  currentBroadcastFormFilter: "hard",
  isEditing: false,
  selectedBroadcast: undefined
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
    filterBroadcastForm(state, action){
      state.currentBroadcastFormFilter = action.payload.filterValue;
      state.selectedBroadcast = undefined;
    },
    selectBroadcast(state, action){
      state.selectedBroadcast = action.payload.broadcast;
    },
    toggleEdit(state) {
      state.isEditing = !state.isEditing;
    },
  },
});

// const [selectedBroadcast, setSelectedBroadcast] = useState(inputData?.name);


export const clueLogActions = clueLogSlice.actions;
export default clueLogSlice;
