import logController from "../controller/logController.js";
import broadcastController from "../controller/broadcastController.js";

const { getCommons, updateCommons } = logController;
const {
  getBroadcasts,
  addBroadcast,
  editBroadcast,
  deleteBroadcast,
  getDetailedBroadcast,
  getDetailedBroadcasts,
} = broadcastController;

export default (app) => {
  //Routes for getting/setting common log data
  app.get("/commons/:logName", getCommons);
  app.put("/commons/:logName/edit", updateCommons);

  //Broadcast CRUD operations
  app.post("/broadcast/add", addBroadcast);
  app.put("/broadcast/edit", editBroadcast);
  app.delete("/broadcast/delete", deleteBroadcast);

  //Get broadcast(s) functions with paramaeters
  app.get("/broadcasts/:logName", getBroadcasts);
  app.get("/detailedbroadcast/:id", getDetailedBroadcast);
  app.get("/detailedbroadcasts/:logName/:username", getDetailedBroadcasts);
};
