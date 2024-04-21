import env from "./env.js";
import { Sequelize } from 'sequelize';
import User from '../model/user.model.js';
import GeneralLog from "../model/generalLog.model.js";
import EasyLog from "../model/easylog.model.js";
import MediumLog from "../model/mediumLog.model.js";
import HardLog from "../model/hardLog.model.js";
import EliteLog from "../model/eliteLog.model.js";
import MasterLog from "../model/masterLog.model.js";
import createAssociations from "../model/associations.js";

const sequelize = new Sequelize({
  storage: env.storage,
  dialect: env.dialect,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.user = User(sequelize, Sequelize);
db.generalLog = GeneralLog(sequelize, Sequelize);
db.easyLog = EasyLog(sequelize, Sequelize);
db.mediumLog = MediumLog(sequelize, Sequelize);
db.hardLog = HardLog(sequelize, Sequelize);
db.eliteLog = EliteLog(sequelize, Sequelize);
db.masterLog = MasterLog(sequelize, Sequelize);

//Create relationships
createAssociations(db);

export default db;



//mysql connection
// const sequelize = new Sequelize(env.database, env.username, env.password, {
//   host: env.host,
//   dialect: env.dialect,
//   operatorsAliases: 0,
//   pool: {
//     max: env.max,
//     min: env.pool.min,
//     acquire: env.pool.acquire,
//     idle: env.pool.idle
//   }
// });