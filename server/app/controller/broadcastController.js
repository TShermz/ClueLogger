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
        broadcasts=  await BroadcastLog.findOne(
          {
            where: { userId: id },
            attributes: { exclude: hardFilters },
          }
        );
        break;
      case "elite":
        broadcasts = await BroadcastLog.findOne(
          { where: { userId: id },
            attributes: { exclude: eliteFilters },
          }
        );

        break;
      case "master":
        broadcasts = await BroadcastLog.findOne(
          { where: { userId: id },
            attributes: { exclude: masterFilters },
          }
        );

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
      return res
        .status(400)
        .json({
          message: "Unable to find user entries; please try logging in.",
        });
    }

    let message = await updateBroadcastLog(
      req,
      existingBroadcastLog,
      newBroadcast
    );
    let newBroadcastEntry = await BroadcastEntry.create(newBroadcast);
    let user = await User.findOne({ where: { id: req.session.user.id } });
    newBroadcastEntry.setUser(user);

    res.status(200).json({ message });
  } catch (error) {
    console.log(err);
  }
}

async function getBroadcastById(req, res) {
  return;
}

async function updateBroadcastLog(
  req,
  existingBroadcastLog,
  newBroadcastEntry
) {
  //three cases: add, edit, or delete
  let method = req.method;
  let broadcastName = newBroadcastEntry.broadcastName;

  if (method === "POST") {
    //update existing log value
    existingBroadcastLog[broadcastName]++;
    existingBroadcastLog.save();
    return { message: "Broadcast log succesfully updated." };
  } else if (method === "PUT") {
    return;
  } else if (method === "DELETE") {
    return;
  } else {
    return;
  }
}

async function getDetailedBroadcasts(req,res) {
  let user, detailedBroadcasts;
  let username = req.params.username;
  let selectedLog = req.params.logName;

  try {
    user = await User.findOne({where: {username: username}})
    detailedBroadcasts = selectedLog === 'all' 
      ? await BroadcastEntry.findAll({where: {userId: user.id}})
      : await BroadcastEntry.findAll({where: {userId: user.id, clueTier: selectedLog}})
  } catch (error) {
    console.log(error);
  }
  
  return res.status(200).json(detailedBroadcasts);
}

export default { getBroadcasts, addBroadcast, getBroadcastById, getDetailedBroadcasts };
