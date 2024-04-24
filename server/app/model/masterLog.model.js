function MasterLog(sequelize, Sequelize) {
  const MasterLog = sequelize.define("masterLog", {
    masterLogId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    Flaming_sword_enchantment: {
      type: Sequelize.INTEGER,
    },
    Elemental_impetus: {
      type: Sequelize.INTEGER,
    },
    Golden_thread: {
      type: Sequelize.INTEGER,
    },
    Box_of_clue_scrolls: {
      type: Sequelize.INTEGER,
    },
    "Hobby_unicorn_(white)": {
      type: Sequelize.INTEGER,
    },
    "Hobby_unicorn_(black)": {
      type: Sequelize.INTEGER,
    },
    Pyjama_top: {
      type: Sequelize.INTEGER,
    },
    Pyjama_bottoms: {
      type: Sequelize.INTEGER,
    },
    Pyjama_slippers: {
      type: Sequelize.INTEGER,
    },
    Heavy_chest: {
      type: Sequelize.INTEGER,
    },
    Bag_of_clues: {
      type: Sequelize.INTEGER,
    },
    Ring_of_coins: {
      type: Sequelize.INTEGER,
    },
    Ring_of_trees: {
      type: Sequelize.INTEGER,
    },
    "Round_glasses_(black)": {
      type: Sequelize.INTEGER,
    },
    "Round_glasses_(blue)": {
      type: Sequelize.INTEGER,
    },
    "Round_glasses_(green)": {
      type: Sequelize.INTEGER,
    },
    "Stylish_glasses_(black)": {
      type: Sequelize.INTEGER,
    },
    "Stylish_glasses_(blue)": {
      type: Sequelize.INTEGER,
    },
    "Stylish_glasses_(green)": {
      type: Sequelize.INTEGER,
    },
    "Half-moon_spectacles_(black)": {
      type: Sequelize.INTEGER,
    },
    "Half-moon_spectacles_(blue)": {
      type: Sequelize.INTEGER,
    },
    "Half-moon_spectacles_(green)": {
      type: Sequelize.INTEGER,
    },
    Adamant_dragon_mask: {
      type: Sequelize.INTEGER,
    },
    Rune_dragon_mask: {
      type: Sequelize.INTEGER,
    },
    Dragonstone_dragon_mask: {
      type: Sequelize.INTEGER,
    },
    Onyx_dragon_mask: {
      type: Sequelize.INTEGER,
    },
    Hydrix_dragon_mask: {
      type: Sequelize.INTEGER,
    },
    Gilded_boater: {
      type: Sequelize.INTEGER,
    },
    Gilded_cavalier: {
      type: Sequelize.INTEGER,
    },
    Samurai_kasa: {
      type: Sequelize.INTEGER,
    },
    Reaper_ornament_kit: {
      type: Sequelize.INTEGER,
    },
    Soul_ornament_kit: {
      type: Sequelize.INTEGER,
    },
    Tuxedo_jacket: {
      type: Sequelize.INTEGER,
    },
    Tuxedo_trousers: {
      type: Sequelize.INTEGER,
    },
    Tuxedo_shoes: {
      type: Sequelize.INTEGER,
    },
    Tuxedo_gloves: {
      type: Sequelize.INTEGER,
    },
    Tuxedo_cravat: {
      type: Sequelize.INTEGER,
    },
    Evening_bolero: {
      type: Sequelize.INTEGER,
    },
    Evening_dipped_skirt: {
      type: Sequelize.INTEGER,
    },
    Evening_shoes: {
      type: Sequelize.INTEGER,
    },
    Evening_gloves: {
      type: Sequelize.INTEGER,
    },
    Evening_masquerade_mask: {
      type: Sequelize.INTEGER,
    },
    Heated_tea_flask: {
      type: Sequelize.INTEGER,
    },
    Elemental_battlestaff: {
      type: Sequelize.INTEGER,
    },
    Pack_yak_mask: {
      type: Sequelize.INTEGER,
    },
  });

  return MasterLog;
}

export default MasterLog;
