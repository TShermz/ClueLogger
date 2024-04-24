function MediumLog(sequelize, Sequelize) {
  const MediumLog = sequelize.define("mediumLog", {
    mediumLogId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Ranger_boots: {
      type: Sequelize.INTEGER,
    },
    "Wizard_boots_(t)": {
      type: Sequelize.INTEGER,
    },
    "Adamant_platebody_(t)": {
      type: Sequelize.INTEGER,
    },
    "Adamant_platelegs_(t)": {
      type: Sequelize.INTEGER,
    },
    "Adamant_kiteshield_(t)": {
      type: Sequelize.INTEGER,
    },
    "Adamant_full_helm_(t)": {
      type: Sequelize.INTEGER,
    },
    "Adamant_platebody_(g)": {
      type: Sequelize.INTEGER,
    },

    "Adamant_platelegs_(g)": {
      type: Sequelize.INTEGER,
    },

    "Adamant_kiteshield_(g)": {
      type: Sequelize.INTEGER,
    },
    "Adamant_full_helm_(g)": {
      type: Sequelize.INTEGER,
    },
    Red_headband: {
      type: Sequelize.INTEGER,
    },
    Black_headband: {
      type: Sequelize.INTEGER,
    },
    Brown_headband: {
      type: Sequelize.INTEGER,
    },
    "Adamant_plateskirt_(t)": {
      type: Sequelize.INTEGER,
    },
    "Adamant_plateskirt_(g)": {
      type: Sequelize.INTEGER,
    },
    "Adamant_shield_(h1)": {
      type: Sequelize.INTEGER,
    },
    "Adamant_shield_(h2)": {
      type: Sequelize.INTEGER,
    },
    "Adamant_shield_(h3)": {
      type: Sequelize.INTEGER,
    },
    "Adamant_shield_(h4)": {
      type: Sequelize.INTEGER,
    },

    "Adamant_shield_(h5)": {
      type: Sequelize.INTEGER,
    },
    Red_boater: {
      type: Sequelize.INTEGER,
    },
    Green_boater: {
      type: Sequelize.INTEGER,
    },
    Orange_boater: {
      type: Sequelize.INTEGER,
    },
    Black_boater: {
      type: Sequelize.INTEGER,
    },
    Blue_boater: {
      type: Sequelize.INTEGER,
    },

    "Green_dragonhide_body_(g)": {
      type: Sequelize.INTEGER,
    },

    "Green_dragonhide_body_(t)": {
      type: Sequelize.INTEGER,
    },

    "Green_dragonhide_chaps_(g)": {
      type: Sequelize.INTEGER,
    },

    "Green_dragonhide_chaps_(t)": {
      type: Sequelize.INTEGER,
    },

    "Adamant_helm_(h1)": {
      type: Sequelize.INTEGER,
    },

    "Adamant_helm_(h2)": {
      type: Sequelize.INTEGER,
    },

    "Adamant_helm_(h3)": {
      type: Sequelize.INTEGER,
    },

    "Adamant_helm_(h4)": {
      type: Sequelize.INTEGER,
    },

    "Adamant_helm_(h5)": {
      type: Sequelize.INTEGER,
    },

    Saradomin_mitre: {
      type: Sequelize.INTEGER,
    },
    Saradomin_cloak: {
      type: Sequelize.INTEGER,
    },
    Guthix_mitre: {
      type: Sequelize.INTEGER,
    },

    Guthix_cloak: {
      type: Sequelize.INTEGER,
    },

    Zamorak_mitre: {
      type: Sequelize.INTEGER,
    },

    Zamorak_cloak: {
      type: Sequelize.INTEGER,
    },

    Adamant_cane: {
      type: Sequelize.INTEGER,
    },

    Pith_helmet: {
      type: Sequelize.INTEGER,
    },

    Purple_elegant_shirt: {
      type: Sequelize.INTEGER,
    },

    Purple_elegant_blouse: {
      type: Sequelize.INTEGER,
    },

    Purple_elegant_legs: {
      type: Sequelize.INTEGER,
    },

    Purple_elegant_skirt: {
      type: Sequelize.INTEGER,
    },

    Black_elegant_shirt: {
      type: Sequelize.INTEGER,
    },

    White_elegant_blouse: {
      type: Sequelize.INTEGER,
    },

    Black_elegant_legs: {
      type: Sequelize.INTEGER,
    },

    White_elegant_skirt: {
      type: Sequelize.INTEGER,
    },

    "Adamant_platebody_(h1)": {
      type: Sequelize.INTEGER,
    },

    "Adamant_platelegs_(h1)": {
      type: Sequelize.INTEGER,
    },

    "Adamant_plateskirt_(h1)": {
      type: Sequelize.INTEGER,
    },

    "Adamant_platebody_(h2)": {
      type: Sequelize.INTEGER,
    },

    "Adamant_platelegs_(h2)": {
      type: Sequelize.INTEGER,
    },

    "Adamant_plateskirt_(h2)": {
      type: Sequelize.INTEGER,
    },

    "Adamant_platebody_(h3)": {
      type: Sequelize.INTEGER,
    },

    "Adamant_platelegs_(h3)": {
      type: Sequelize.INTEGER,
    },

    "Adamant_plateskirt_(h3)": {
      type: Sequelize.INTEGER,
    },

    "Adamant_platebody_(h4)": {
      type: Sequelize.INTEGER,
    },

    "Adamant_platelegs_(h4)": {
      type: Sequelize.INTEGER,
    },

    "Adamant_plateskirt_(h4)": {
      type: Sequelize.INTEGER,
    },

    "Adamant_platebody_(h5)": {
      type: Sequelize.INTEGER,
    },

    "Adamant_platelegs_(h5)": {
      type: Sequelize.INTEGER,
    },

    "Adamant_plateskirt_(h5)": {
      type: Sequelize.INTEGER,
    },

    Armadyl_robe_top: {
      type: Sequelize.INTEGER,
    },

    Armadyl_robe_legs: {
      type: Sequelize.INTEGER,
    },

    Bandos_robe_top: {
      type: Sequelize.INTEGER,
    },

    Bandos_robe_legs: {
      type: Sequelize.INTEGER,
    },

    Ancient_robe_top: {
      type: Sequelize.INTEGER,
    },

    Ancient_robe_legs: {
      type: Sequelize.INTEGER,
    },
    Sheep_mask: {
      type: Sequelize.INTEGER,
    },

    Penguin_mask: {
      type: Sequelize.INTEGER,
    },

    Bat_mask: {
      type: Sequelize.INTEGER,
    },

    Cat_mask: {
      type: Sequelize.INTEGER,
    },

    Wolf_mask: {
      type: Sequelize.INTEGER,
    },

    Blue_checkered_shirt: {
      type: Sequelize.INTEGER,
    },

    Green_checkered_shirt: {
      type: Sequelize.INTEGER,
    },

    Purple_checkered_shirt: {
      type: Sequelize.INTEGER,
    },
    Briefcase: {
      type: Sequelize.INTEGER,
    },

    "Off-hand_briefcase": {
      type: Sequelize.INTEGER,
    },

    "Strength_amulet_(t)": {
      type: Sequelize.INTEGER,
    },
  });

  return MediumLog;
}

export default MediumLog;
