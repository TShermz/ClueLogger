function EasyLog(sequelize, Sequelize) {
  const EasyLog = sequelize.define("easyLog", {
    easyLogId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    "Black_platebody_(t)": {
      type: Sequelize.INTEGER,
    },
    "Black_platelegs_(t)": {
      type: Sequelize.INTEGER,
    },
    "Black_full_helm_(t)": {
      type: Sequelize.INTEGER,
    },
    "Black_kiteshield_(t)": {
      type: Sequelize.INTEGER,
    },
    "Black_platebody_(g)": {
      type: Sequelize.INTEGER,
    },
    "Black_platelegs_(g)": {
      type: Sequelize.INTEGER,
    },
    "Black_full_helm_(g)": {
      type: Sequelize.INTEGER,
    },
    "Black_kiteshield_(g)": {
      type: Sequelize.INTEGER,
    },
    Highwayman_mask: {
      type: Sequelize.INTEGER,
    },
    Blue_beret: {
      type: Sequelize.INTEGER,
    },
    Black_beret: {
      type: Sequelize.INTEGER,
    },
    White_beret: {
      type: Sequelize.INTEGER,
    },
    "Black_plateskirt_(t)": {
      type: Sequelize.INTEGER,
    },
    "Black_plateskirt_(g)": {
      type: Sequelize.INTEGER,
    },
    "Black_shield_(h1)": {
      type: Sequelize.INTEGER,
    },
    "Black_shield_(h2)": {
      type: Sequelize.INTEGER,
    },
    "Black_shield_(h3)": {
      type: Sequelize.INTEGER,
    },
    "Black_shield_(h4)": {
      type: Sequelize.INTEGER,
    },
    "Black_shield_(h5)": {
      type: Sequelize.INTEGER,
    },
    "Studded_body_(g)": {
      type: Sequelize.INTEGER,
    },
    "Studded_body_(t)": {
      type: Sequelize.INTEGER,
    },
    "Studded_chaps_(g)": {
      type: Sequelize.INTEGER,
    },
    "Studded_chaps_(t)": {
      type: Sequelize.INTEGER,
    },
    "Wizard_robe_skirt_(g)": {
      type: Sequelize.INTEGER,
    },
    "Wizard_robe_skirt_(t)": {
      type: Sequelize.INTEGER,
    },
    "Wizard_robe_top_(g)": {
      type: Sequelize.INTEGER,
    },
    "Wizard_robe_top_(t)": {
      type: Sequelize.INTEGER,
    },
    "Wizard_hat_(g)": {
      type: Sequelize.INTEGER,
    },
    "Wizard_hat_(t)": {
      type: Sequelize.INTEGER,
    },
    "Black_helm_(h1)": {
      type: Sequelize.INTEGER,
    },
    "Black_helm_(h2)": {
      type: Sequelize.INTEGER,
    },
    "Black_helm_(h3)": {
      type: Sequelize.INTEGER,
    },
    "Black_helm_(h4)": {
      type: Sequelize.INTEGER,
    },
    "Black_helm_(h5)": {
      type: Sequelize.INTEGER,
    },
    "Bob_shirt_(red)": {
      type: Sequelize.INTEGER,
    },
    "Bob_shirt_(green)": {
      type: Sequelize.INTEGER,
    },
    "Bob_shirt_(blue)": {
      type: Sequelize.INTEGER,
    },
    "Bob_shirt_(black)": {
      type: Sequelize.INTEGER,
    },
    "Bob_shirt_(purple)": {
      type: Sequelize.INTEGER,
    },
    Powdered_wig: {
      type: Sequelize.INTEGER,
    },
    Flared_trousers: {
      type: Sequelize.INTEGER,
    },
    Pantaloons: {
      type: Sequelize.INTEGER,
    },
    Sleeping_cap: {
      type: Sequelize.INTEGER,
    },
    Saradomin_robe_top: {
      type: Sequelize.INTEGER,
    },
    Saradomin_robe_legs: {
      type: Sequelize.INTEGER,
    },
    Guthix_robe_top: {
      type: Sequelize.INTEGER,
    },
    Guthix_robe_legs: {
      type: Sequelize.INTEGER,
    },
    Zamorak_robe_top: {
      type: Sequelize.INTEGER,
    },
    Zamorak_robe_legs: {
      type: Sequelize.INTEGER,
    },
    Black_cane: {
      type: Sequelize.INTEGER,
    },
    "Black_platebody_(h1)": {
      type: Sequelize.INTEGER,
    },
    "Black_platelegs_(h1)": {
      type: Sequelize.INTEGER,
    },
    "Black_plateskirt_(h1)": {
      type: Sequelize.INTEGER,
    },
    "Black_platebody_(h2)": {
      type: Sequelize.INTEGER,
    },
    "Black_platelegs_(h2)": {
      type: Sequelize.INTEGER,
    },
    "Black_plateskirt_(h2)": {
      type: Sequelize.INTEGER,
    },
    "Black_platebody_(h3)": {
      type: Sequelize.INTEGER,
    },
    "Black_platelegs_(h3)": {
      type: Sequelize.INTEGER,
    },
    "Black_plateskirt_(h3)": {
      type: Sequelize.INTEGER,
    },
    "Black_platebody_(h4)": {
      type: Sequelize.INTEGER,
    },
    "Black_platelegs_(h4)": {
      type: Sequelize.INTEGER,
    },
    "Black_plateskirt_(h4)": {
      type: Sequelize.INTEGER,
    },
    "Black_platebody_(h5)": {
      type: Sequelize.INTEGER,
    },
    "Black_platelegs_(h5)": {
      type: Sequelize.INTEGER,
    },
    "Black_plateskirt_(h5)": {
      type: Sequelize.INTEGER,
    },
    Spiked_helmet: {
      type: Sequelize.INTEGER,
    },
    Red_elegant_shirt: {
      type: Sequelize.INTEGER,
    },
    Red_elegant_blouse: {
      type: Sequelize.INTEGER,
    },
    Red_elegant_legs: {
      type: Sequelize.INTEGER,
    },
    Red_elegant_skirt: {
      type: Sequelize.INTEGER,
    },
    Green_elegant_shirt: {
      type: Sequelize.INTEGER,
    },
    Green_elegant_blouse: {
      type: Sequelize.INTEGER,
    },
    Green_elegant_legs: {
      type: Sequelize.INTEGER,
    },
    Green_elegant_skirt: {
      type: Sequelize.INTEGER,
    },
    Blue_elegant_shirt: {
      type: Sequelize.INTEGER,
    },
    Blue_elegant_blouse: {
      type: Sequelize.INTEGER,
    },
    Blue_elegant_legs: {
      type: Sequelize.INTEGER,
    },
    Blue_elegant_skirt: {
      type: Sequelize.INTEGER,
    },
    Suitcase: {
      type: Sequelize.INTEGER,
    },
    "Off-hand_suitcase": {
      type: Sequelize.INTEGER,
    },
    "Amulet_of_magic_(t)": {
      type: Sequelize.INTEGER,
    },
  });

  return EasyLog;
}

export default EasyLog;
