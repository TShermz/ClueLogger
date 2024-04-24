function BroadcastLog(sequelize, Sequelize) {
  const BroadcastLog = sequelize.define("broadcastLog", {
    broadcastLogId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Backstab_cape: {
      type: Sequelize.INTEGER,
    },
    Sack_of_effigies: {
      type: Sequelize.INTEGER,
    },
    Explosive_barrel: {
      type: Sequelize.INTEGER,
    },
    Barrows_dye: {
      type: Sequelize.INTEGER,
    },
    Shadow_dye: {
      type: Sequelize.INTEGER,
    },
    Ice_dye: {
      type: Sequelize.INTEGER,
    },
    Third_Age_dye: {
      type: Sequelize.INTEGER,
    },
    Blood_dye: {
      type: Sequelize.INTEGER,
    },
    Third_age_ranger_coif: {
      type: Sequelize.INTEGER,
    },
    Third_age_ranger_body: {
      type: Sequelize.INTEGER,
    },
    Third_age_ranger_chaps: {
      type: Sequelize.INTEGER,
    },
    Third_age_vambraces: {
      type: Sequelize.INTEGER,
    },
    Third_age_robe_top: {
      type: Sequelize.INTEGER,
    },
    Third_age_robe: {
      type: Sequelize.INTEGER,
    },
    Third_age_mage_hat: {
      type: Sequelize.INTEGER,
    },
    Third_age_amulet: {
      type: Sequelize.INTEGER,
    },
    Third_age_platelegs: {
      type: Sequelize.INTEGER,
    },
    Third_age_platebody: {
      type: Sequelize.INTEGER,
    },
    Third_age_full_helmet: {
      type: Sequelize.INTEGER,
    },
    Third_age_kiteshield: {
      type: Sequelize.INTEGER,
    },
    Third_age_druidic_staff: {
      type: Sequelize.INTEGER,
    },
    Third_age_druidic_cloak: {
      type: Sequelize.INTEGER,
    },
    Third_age_druidic_wreath: {
      type: Sequelize.INTEGER,
    },
    Third_age_druidic_robe_top: {
      type: Sequelize.INTEGER,
    },
    Third_age_druidic_robe_bottom: {
      type: Sequelize.INTEGER,
    },
    Orlando_Smiths_hat: {
      type: Sequelize.INTEGER,
    }
  });

  return BroadcastLog;
}

export default BroadcastLog;
