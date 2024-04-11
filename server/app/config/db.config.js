import env from "./env.js";
import { Sequelize } from 'sequelize';
import User from '../model/user.model.js';
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

const sequelize = new Sequelize({
  storage: env.storage,
  dialect: env.dialect,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.users = User(sequelize, Sequelize);

export default db;