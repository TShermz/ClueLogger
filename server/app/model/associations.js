export default function createAssociations(db) {
  const User = db.user;
  const GeneralLog = db.generalLog;
  const EasyLog = db.easyLog;
  const MediumLog = db.mediumLog
  const HardLog = db.hardLog;
  const EliteLog = db.eliteLog
  const MasterLog = db.masterLog

  //Relationships
  User.hasOne(GeneralLog, {onDelete: "CASCADE"});
  GeneralLog.belongsTo(User, {onDelete: "CASCADE"});

  User.hasOne(EasyLog, {onDelete: "CASCADE"});
  EasyLog.belongsTo(User, {onDelete: "CASCADE"});

  User.hasOne(MediumLog, {onDelete: "CASCADE"});
  MediumLog.belongsTo(User, {onDelete: "CASCADE"});

  User.hasOne(HardLog, {onDelete: "CASCADE"});
  HardLog.belongsTo(User, {onDelete: "CASCADE"});

  User.hasOne(EliteLog, {onDelete: "CASCADE"});
  EliteLog.belongsTo(User, {onDelete: "CASCADE"});

  User.hasOne(MasterLog, {onDelete: "CASCADE"});
  MasterLog.belongsTo(User, {onDelete: "CASCADE"});


}
