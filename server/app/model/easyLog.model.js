function EasyLog(sequelize, Sequelize) {
  const EasyLog = sequelize.define("easyLog", {
    easyLogId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    "Black_platebody_(t)": {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    "Black_platelegs_(t)": {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    "Black_full_helm_(t)": {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    "Black_kiteshield_(t)": {
      type: Sequelize.TEXT,
      defaultValue: 0
    },   
      'Black_platebody_(g)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      "Black_platelegs_(g)": {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    "Black_full_helm_(g)": {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    "Black_kiteshield_(g)": {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Highwayman_mask: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Blue_beret: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Black_beret: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    White_beret: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    "Black_plateskirt_(t)": {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Black_plateskirt_(g)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Black_shield_(h1)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Black_shield_(h2)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Black_shield_(h3)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
     'Black_shield_(h4)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Black_shield_(h5)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Studded_body_(g)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Studded_body_(t)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Studded_chaps_(g)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Studded_chaps_(t)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Wizard_robe_skirt_(g)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Wizard_robe_skirt_(t)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Wizard_robe_top_(g)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Wizard_robe_top_(t)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Wizard_hat_(g)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Wizard_hat_(t)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Black_helm_(h1)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Black_helm_(h2)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Black_helm_(h3)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Black_helm_(h4)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Black_helm_(h5)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Bob_shirt_(red)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Bob_shirt_(green)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Bob_shirt_(blue)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Bob_shirt_(black)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Bob_shirt_(purple)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      Powdered_wig: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      Flared_trousers: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Pantaloons: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      Sleeping_cap: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      Saradomin_robe_top: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      Saradomin_robe_legs: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      Guthix_robe_top: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      Guthix_robe_legs: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      Zamorak_robe_top: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      Zamorak_robe_legs: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Black_cane: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Black_platebody_(h1)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Black_platelegs_(h1)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Black_plateskirt_(h1)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Black_platebody_(h2)': {
      type: Sequelize.TEXT,
      defaultValue: 0
      },
      'Black_platelegs_(h2)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Black_plateskirt_(h2)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Black_platebody_(h3)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    }, 
      'Black_platelegs_(h3)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Black_plateskirt_(h3)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Black_platebody_(h4)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Black_platelegs_(h4)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Black_plateskirt_(h4)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Black_platebody_(h5)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Black_platelegs_(h5)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      'Black_plateskirt_(h5)': {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      Spiked_helmet: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      Red_elegant_shirt: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      Red_elegant_blouse: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      Red_elegant_legs: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      Red_elegant_skirt: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      Green_elegant_shirt: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      Green_elegant_blouse: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      Green_elegant_legs: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      Green_elegant_skirt: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      Blue_elegant_shirt: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      Blue_elegant_blouse: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      Blue_elegant_legs: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      Blue_elegant_skirt: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Suitcase: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
      "Off-hand_suitcase": {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    "Amulet_of_magic_(t)": {
      type: Sequelize.TEXT,
      defaultValue: 0
    }

  });

  return EasyLog;
}

export default EasyLog;