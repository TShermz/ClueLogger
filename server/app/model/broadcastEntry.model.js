function BroadcastEntry(sequelize, Sequelize) {
  const BroadcastEntry = sequelize.define("broadcastEntry", {
    broadcastId: {
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
    broadcastCount: {
      type: Sequelize.INTEGER,
    },
    clueCount: {
      type: Sequelize.INTEGER,
    },
    sellPrice: {
      type: Sequelize.INTEGER,
    },
    dateReceived: {
      type: Sequelize.DATEONLY,
    },
    source: {
      type: Sequelize.STRING
    }

  });

  return BroadcastEntry;
}

export default BroadcastEntry;
