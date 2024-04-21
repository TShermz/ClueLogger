function Broadcasts(sequelize, Sequelize) {
  const Broadcasts = sequelize.define("broadcasts", {
    broadcastId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Backstab_cape: {
      type: Sequelize.TEXT,
    },
    Sack_of_effigies: {
      type: Sequelize.TEXT,
    },
    Explosive_barrel: {
      type: Sequelize.TEXT,
    },
    Barrows_dye: {
      type: Sequelize.TEXT,
    },
    Shadow_dye: {
      type: Sequelize.TEXT,
    },
    Ice_dye: {
      type: Sequelize.TEXT,
    },
    Third_Age_dye: {
      type: Sequelize.TEXT,
    },
    Blood_dye: {
      type: Sequelize.TEXT,
    },
    Third_age_ranger_coif: {
      type: Sequelize.TEXT,
    },
    Third_age_ranger_body: {
      type: Sequelize.TEXT,
    },
    Third_age_ranger_chaps: {
      type: Sequelize.TEXT,
    },
    Third_age_vambraces: {
      type: Sequelize.TEXT,
    },
    Third_age_robe_top: {
      type: Sequelize.TEXT,
    },
    Third_age_robe: {
      type: Sequelize.TEXT,
    },
    Third_age_mage_hat: {
      type: Sequelize.TEXT,
    },
    Third_age_amulet: {
      type: Sequelize.TEXT,
    },
    Third_age_platelegs: {
      type: Sequelize.TEXT,
    },
    Third_age_platebody: {
      type: Sequelize.TEXT,
    },
    Third_age_full_helmet: {
      type: Sequelize.TEXT,
    },
    Third_age_kiteshield: {
      type: Sequelize.TEXT,
    },
    Third_age_druidic_staff: {
      type: Sequelize.TEXT,
    },
    Third_age_druidic_cloak: {
      type: Sequelize.TEXT,
    },
    Third_age_druidic_wreath: {
      type: Sequelize.TEXT,
    },
    Third_age_druidic_robe_top: {
      type: Sequelize.TEXT,
    },
    Third_age_druidic_robe_bottom: {
      type: Sequelize.TEXT,
    },
    Orlando_Smiths_hat: {
      type: Sequelize.TEXT,
    }
  });

  return Broadcasts;
}

export default Broadcasts;
