import db from "../config/db.config.js";
import { hardFilters, eliteFilters, masterFilters } from "../util/constants.js";

const sequelize = db.sequelize;
const BroadcastLog = db.broadcastLog;
const BroadcastEntry = db.broadcastEntry;
const User = db.user;

async function getBroadcasts(req, res) {
  const logName = req.params.logName;
  const id = req.session.user.id;
  let broadcasts;

  try {
    switch (logName) {
      case "hard":
        broadcasts = await BroadcastLog.findOne({
          where: { userId: id },
          attributes: { exclude: hardFilters },
        });
        break;
      case "elite":
        broadcasts = await BroadcastLog.findOne({
          where: { userId: id },
          attributes: { exclude: eliteFilters },
        });

        break;
      case "master":
        broadcasts = await BroadcastLog.findOne({
          where: { userId: id },
          attributes: { exclude: masterFilters },
        });

        break;
      default:
        return;
    }
  } catch (error) {
    console.log(error);
  }

  res.status(200).json({ broadcasts });
}

async function addBroadcast(req, res) {
  let newBroadcast = req.body;
  let newBroadcastName = newBroadcast.broadcastName;


  try {
    if (!req.session.user) {
      return res
        .status(410)
        .json({ message: "Please log in to add broadcasts." });
    }
    let existingBroadcastLog = await BroadcastLog.findOne({
      where: { userId: req.session.user.id },
    });

    if (!existingBroadcastLog) {
      return res.status(400).json({
        message: "Unable to find user entries; please try logging in.",
      });
    }

    //Increment broadcast in existing user's broadcast log
    existingBroadcastLog[newBroadcastName]++;
    existingBroadcastLog.save();

    //Create broadcast entry and connect to user
    let newBroadcastEntry = await BroadcastEntry.create(newBroadcast);
    let user = await User.findOne({ where: { id: req.session.user.id } });
    newBroadcastEntry.setUser(user);

    res.status(200).json({ message: "Broadcast log succesfully updated." });
  } catch (error) {
    console.log(error);
  }
}

async function editBroadcast(req, res) {
  let method = req.method;
  let editedBroadcastEntry = req.body;
  let editedBroadcastName = editedBroadcastEntry.broadcastName;
  let message;

  try {
    if (!req.session.user) {
      return res
        .status(410)
        .json({ message: "Please log in to edit broadcasts." });
    }

    let existingBroadcastLog = await BroadcastLog.findOne({
      where: { userId: req.session.user.id },
    });

    let existingBroadcastEntry = await BroadcastEntry.findOne({
      where: { broadcastId: editedBroadcastEntry.broadcastId },
    });

    if (!existingBroadcastLog) {
      return res.status(400).json({
        message: "Unable to find user entries; please try logging in.",
      });
    };

    if (!existingBroadcastEntry) {
      return res.status(400).json({
        message: "Unable to find entry for requested edit; please try logging in.",
      });
    }
    let existingBroadcastName = existingBroadcastEntry.broadcastName;

    //Update existing user's broadcast log if the edit changes name
    if (editedBroadcastName !== existingBroadcastName) {
      existingBroadcastLog[existingBroadcastName]--;
      existingBroadcastLog[editedBroadcastName]++;
      existingBroadcastLog.save();
    }

    //Update the existing broadcast entry
    await existingBroadcastEntry.update(editedBroadcastEntry);
    await existingBroadcastEntry.save();

    res.status(200).json({ message: "Broadcast succesfully updated." });
  } catch (error) {
    console.log(err);
  }
}

async function deleteBroadcast(req, res) {
  let deleteBroadcastId = req.body.id;

  try {
    if (!req.session.user) {
      return res
        .status(410)
        .json({ message: "Please log in to edit broadcasts." });
    }

    let existingBroadcastLog = await BroadcastLog.findOne({
      where: { userId: req.session.user.id },
    });

    let existingBroadcastEntry = await BroadcastEntry.findOne({
      where: { broadcastId: deleteBroadcastId },
    });

    if (!existingBroadcastLog) {
      return res.status(400).json({
        message: "Unable to find existing broadcast log; please try logging in.",
      });
    };

    if (!existingBroadcastEntry) {
      return res.status(400).json({
        message: "Unable to find existing broadcast entry to delete; please try logging in.",
      });
    }

    console.log(existingBroadcastEntry);

    let existingBroadcastName = existingBroadcastEntry.broadcastName;

    //Update existing user's broadcast log
      existingBroadcastLog[existingBroadcastName]--;
      existingBroadcastLog.save();

    //Update the existing broadcast entry
    await existingBroadcastEntry.destroy();

    res.status(200).json({ message: "Broadcast deleted." });
  } catch (error) {
    console.log(err);
  }
}

async function getDetailedBroadcast(req, res) {
  let id = req.params.id;
  let detailedBroadcast;

  try {
    detailedBroadcast = await BroadcastEntry.findOne({
      where: { broadcastId: id },
    });
  } catch (error) {
    console.log(error);
  }

  return res.status(200).json(detailedBroadcast);
}

async function getDetailedBroadcasts(req, res) {
  let user, detailedBroadcasts;
  let username = req.params.username;
  let selectedLog = req.params.logName;

  try {
    user = await User.findOne({ where: { username: username } });
    detailedBroadcasts =
      selectedLog === "all"
        ? await BroadcastEntry.findAll({ where: { userId: user.id } })
        : await BroadcastEntry.findAll({
            where: { userId: user.id, clueTier: selectedLog },
          });
  } catch (error) {
    console.log(error);
  }

  return res.status(200).json(detailedBroadcasts);
}

export default {
  getBroadcasts,
  addBroadcast,
  editBroadcast,
  deleteBroadcast,
  getDetailedBroadcast,
  getDetailedBroadcasts,
};
