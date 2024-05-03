function BroadcastEntry(sequelize, Sequelize) {
  const BroadcastEntry = sequelize.define("broadcastEntry", {
    broadcastLogId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    broadcastName: {
      type: Sequelize.STRING,
    },
    clueTier: {
      type: Sequelize.STRING,
    },
    clueCount: {
      type: Sequelize.INTEGER,
    },
    dateReceived: {
      type: Sequelize.DATE,
    }

  });

  return BroadcastEntry;
}

export default BroadcastEntry;
