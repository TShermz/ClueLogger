import { configureStore } from "@reduxjs/toolkit";

import myLogsSlice from "./slices/myLogsSlice.js";
import broadcastFormSlice from "./slices/broadcastFormSlice.js";
import myBroadcastsSlice from "./slices/myBroadcastsSlice.js"

const store = configureStore({
  reducer: {
    myLogs: myLogsSlice.reducer,
    broadcastForm: broadcastFormSlice.reducer,
    myBroadcasts: myBroadcastsSlice.reducer,
  },
});

export default store;
