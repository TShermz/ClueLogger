function MediumLog(sequelize, Sequelize) {
  const MediumLog = sequelize.define("mediumLog", {
    mediumLogId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Ranger_boots: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    "Wizard_boots_(t)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    "Adamant_platebody_(t)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    "Adamant_platelegs_(t)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    "Adamant_kiteshield_(t)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    "Adamant_full_helm_(t)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    "Adamant_platebody_(g)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Adamant_platelegs_(g)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Adamant_kiteshield_(g)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    "Adamant_full_helm_(g)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    Red_headband: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    Black_headband: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    Brown_headband: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    "Adamant_plateskirt_(t)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    "Adamant_plateskirt_(g)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    "Adamant_shield_(h1)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    "Adamant_shield_(h2)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    "Adamant_shield_(h3)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    "Adamant_shield_(h4)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Adamant_shield_(h5)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    Red_boater: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    Green_boater: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    Orange_boater: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    Black_boater: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    Blue_boater: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Green_dragonhide_body_(g)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Green_dragonhide_body_(t)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Green_dragonhide_chaps_(g)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Green_dragonhide_chaps_(t)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Adamant_helm_(h1)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Adamant_helm_(h2)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Adamant_helm_(h3)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Adamant_helm_(h4)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Adamant_helm_(h5)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Saradomin_mitre: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    Saradomin_cloak: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    Guthix_mitre: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Guthix_cloak: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Zamorak_mitre: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Zamorak_cloak: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Adamant_cane: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Pith_helmet: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Purple_elegant_shirt: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Purple_elegant_blouse: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Purple_elegant_legs: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Purple_elegant_skirt: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Black_elegant_shirt: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    White_elegant_blouse: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Black_elegant_legs: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    White_elegant_skirt: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Adamant_platebody_(h1)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Adamant_platelegs_(h1)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Adamant_plateskirt_(h1)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Adamant_platebody_(h2)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Adamant_platelegs_(h2)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Adamant_plateskirt_(h2)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Adamant_platebody_(h3)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Adamant_platelegs_(h3)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Adamant_plateskirt_(h3)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Adamant_platebody_(h4)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Adamant_platelegs_(h4)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Adamant_plateskirt_(h4)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Adamant_platebody_(h5)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Adamant_platelegs_(h5)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Adamant_plateskirt_(h5)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Armadyl_robe_top: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Armadyl_robe_legs: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Bandos_robe_top: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Bandos_robe_legs: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Ancient_robe_top: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Ancient_robe_legs: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    Sheep_mask: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Penguin_mask: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Bat_mask: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Cat_mask: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Wolf_mask: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Blue_checkered_shirt: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Green_checkered_shirt: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Purple_checkered_shirt: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    Briefcase: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Off-hand_briefcase": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Strength_amulet_(t)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
  });

  return MediumLog;
}

export default MediumLog;
