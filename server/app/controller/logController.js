import db from "../config/db.config.js";

// const sequelize = db.sequelize;
const GeneralLog = db.generalLog;
const EasyLog = db.easyLog;
const MediumLog = db.mediumLog;
const HardLog = db.hardLog;
const EliteLog = db.eliteLog;
const MasterLog = db.masterLog;
// const User = db.user;

async function getCommons(req, res) {
  let logName = req.params.logName;
  let userId = req.session.user.id;
  let method = req.method;

  try {
    let commons = await getCommonLog(logName, userId, method);

    res.status(200).json({ commons });
  } catch (error) {
    console.log(err);
  }
}

async function updateCommons(req, res) {
  let updatedCommons = req.body;

  try {
    let commons = await getCommonLog(
      req.params.logName,
      req.session.user.id,
      req.method
    );
    await commons.update(updatedCommons);
    await commons.save();

    res.json({ message: "Log successfully updated." });
  } catch (error) {
    console.log(err);
  }
}

//Helper functions

async function getCommonLog(logName, id, method) {
  const filters = method === "GET" ? [`${logName}LogId`, "userId"] : "";

  try {
    switch (logName) {
      case "general":
        return await GeneralLog.findOne(
          { where: { userId: id },
            attributes: { exclude: filters },
          }
        );
      case "easy":
        return await EasyLog.findOne(
          { where: { userId: id },
            attributes: { exclude: filters },
          }
        );
      case "medium":
        return await MediumLog.findOne(
          { where: { userId: id },
            attributes: { exclude: filters },
          }
        );
      case "hard":
        return await HardLog.findOne(
          { where: { userId: id },
            attributes: { exclude: filters },
          }
        );
      case "elite":
        return await EliteLog.findOne(
          { where: { userId: id },
            attributes: { exclude: filters },
          }
        );
      case "master":
        return await MasterLog.findOne(
          { where: { userId: id },
            attributes: { exclude: filters },
          }
        );
      default:
        return;
    }
  } catch (error) {
    console.log(error);
  }
}

export default { getCommons, updateCommons };
