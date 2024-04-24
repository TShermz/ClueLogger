function EliteLog(sequelize, Sequelize) {
  const EliteLog = sequelize.define("eliteLog", {
    eliteLogId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Robin_Hood_tunic: {
      type: Sequelize.INTEGER,
    },

    Robin_Hood_tights: {
      type: Sequelize.INTEGER,
    },

    Dragon_staff: {
      type: Sequelize.INTEGER,
    },

    Penguin_staff: {
      type: Sequelize.INTEGER,
    },

    Bat_staff: {
      type: Sequelize.INTEGER,
    },

    Wolf_staff: {
      type: Sequelize.INTEGER,
    },
    Cat_staff: {
      type: Sequelize.INTEGER,
    },
    Dragon_cane: {
      type: Sequelize.INTEGER,
    },

    Fury_ornament_kit: {
      type: Sequelize.INTEGER,
    },

    "Dragon_full_helm_ornament_kit_(or)": {
      type: Sequelize.INTEGER,
    },

    "Dragon_platelegs-skirt_ornament_kit_(or)": {
      type: Sequelize.INTEGER,
    },

    "Dragon_platebody_ornament_kit_(or)": {
      type: Sequelize.INTEGER,
    },

    "Dragon_sq_shield_ornament_kit_(or)": {
      type: Sequelize.INTEGER,
    },

    "Dragon_full_helm_ornament_kit_(sp)": {
      type: Sequelize.INTEGER,
    },

    "Dragon_platelegs-skirt_ornament_kit_(sp)": {
      type: Sequelize.INTEGER,
    },

    "Dragon_platebody_ornament_kit_(sp)": {
      type: Sequelize.INTEGER,
    },

    "Dragon_sq_shield_ornament_kit_(sp)": {
      type: Sequelize.INTEGER,
    },

    Armadyl_crozier: {
      type: Sequelize.INTEGER,
    },

    Bandos_crozier: {
      type: Sequelize.INTEGER,
    },

    Ancient_crozier: {
      type: Sequelize.INTEGER,
    },

    Armadyl_stole: {
      type: Sequelize.INTEGER,
    },

    Bandos_stole: {
      type: Sequelize.INTEGER,
    },

    Ancient_stole: {
      type: Sequelize.INTEGER,
    },

    "Rune_platebody_(Ancient)": {
      type: Sequelize.INTEGER,
    },

    "Rune_platelegs_(Ancient)": {
      type: Sequelize.INTEGER,
    },

    "Rune_plateskirt_(Ancient)": {
      type: Sequelize.INTEGER,
    },

    "Rune_full_helm_(Ancient)": {
      type: Sequelize.INTEGER,
    },

    "Rune_kiteshield_(Ancient)": {
      type: Sequelize.INTEGER,
    },

    "Rune_platebody_(Armadyl)": {
      type: Sequelize.INTEGER,
    },

    "Rune_platelegs_(Armadyl)": {
      type: Sequelize.INTEGER,
    },

    "Rune_plateskirt_(Armadyl)": {
      type: Sequelize.INTEGER,
    },

    "Rune_full_helm_(Armadyl)": {
      type: Sequelize.INTEGER,
    },

    "Rune_kiteshield_(Armadyl)": {
      type: Sequelize.INTEGER,
    },

    "Rune_platebody_(Bandos)": {
      type: Sequelize.INTEGER,
    },

    "Rune_platelegs_(Bandos)": {
      type: Sequelize.INTEGER,
    },

    "Rune_full_helm_(Bandos)": {
      type: Sequelize.INTEGER,
    },

    "Rune_kiteshield_(Bandos)": {
      type: Sequelize.INTEGER,
    },

    "Blessed_dragonhide_vambraces_(Zaros)": {
      type: Sequelize.INTEGER,
    },

    "Blessed_dragonhide_body_(Zaros)": {
      type: Sequelize.INTEGER,
    },

    "Blessed_dragonhide_chaps_(Zaros)": {
      type: Sequelize.INTEGER,
    },

    "Blessed_dragonhide_coif_(Zaros)": {
      type: Sequelize.INTEGER,
    },

    "Blessed_dragonhide_vambraces_(Bandos)": {
      type: Sequelize.INTEGER,
    },

    "Blessed_dragonhide_body_(Bandos)": {
      type: Sequelize.INTEGER,
    },

    "Blessed_dragonhide_chaps_(Bandos)": {
      type: Sequelize.INTEGER,
    },

    "Blessed_dragonhide_coif_(Bandos)": {
      type: Sequelize.INTEGER,
    },

    "Blessed_dragonhide_vambraces_(Armadyl)": {
      type: Sequelize.INTEGER,
    },

    "Blessed_dragonhide_body_(Armadyl)": {
      type: Sequelize.INTEGER,
    },

    "Blessed_dragonhide_chaps_(Armadyl)": {
      type: Sequelize.INTEGER,
    },

    "Blessed_dragonhide_coif_(Armadyl)": {
      type: Sequelize.INTEGER,
    },

    Black_dragon_mask: {
      type: Sequelize.INTEGER,
    },

    Frost_dragon_mask: {
      type: Sequelize.INTEGER,
    },

    Bronze_dragon_mask: {
      type: Sequelize.INTEGER,
    },

    Iron_dragon_mask: {
      type: Sequelize.INTEGER,
    },

    Steel_dragon_mask: {
      type: Sequelize.INTEGER,
    },

    Mithril_dragon_mask: {
      type: Sequelize.INTEGER,
    },

    Guthix_bow: {
      type: Sequelize.INTEGER,
    },

    Zamorak_bow: {
      type: Sequelize.INTEGER,
    },

    Saradomin_bow: {
      type: Sequelize.INTEGER,
    },
  });

  return EliteLog;
}

export default EliteLog;
