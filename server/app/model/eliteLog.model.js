function EliteLog(sequelize, Sequelize) {
  const EliteLog = sequelize.define("eliteLog", {
    eliteLogId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Robin_Hood_tunic: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Robin_Hood_tights: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Dragon_staff: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Penguin_staff: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Bat_staff: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Wolf_staff: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    Cat_staff: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    Dragon_cane: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Fury_ornament_kit: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Dragon_full_helm_ornament_kit_(or)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Dragon_platelegs-skirt_ornament_kit_(or)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Dragon_platebody_ornament_kit_(or)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Dragon_sq_shield_ornament_kit_(or)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Dragon_full_helm_ornament_kit_(sp)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Dragon_platelegs-skirt_ornament_kit_(sp)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Dragon_platebody_ornament_kit_(sp)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Dragon_sq_shield_ornament_kit_(sp)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Armadyl_crozier: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Bandos_crozier: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Ancient_crozier: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Armadyl_stole: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Bandos_stole: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Ancient_stole: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_platebody_(Ancient)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_platelegs_(Ancient)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_plateskirt_(Ancient)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_full_helm_(Ancient)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_kiteshield_(Ancient)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_platebody_(Armadyl)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_platelegs_(Armadyl)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_plateskirt_(Armadyl)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_full_helm_(Armadyl)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_kiteshield_(Armadyl)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_platebody_(Bandos)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_platelegs_(Bandos)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_full_helm_(Bandos)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_kiteshield_(Bandos)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Blessed_dragonhide_vambraces_(Zaros)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Blessed_dragonhide_body_(Zaros)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Blessed_dragonhide_chaps_(Zaros)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Blessed_dragonhide_coif_(Zaros)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Blessed_dragonhide_vambraces_(Bandos)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Blessed_dragonhide_body_(Bandos)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Blessed_dragonhide_chaps_(Bandos)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Blessed_dragonhide_coif_(Bandos)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Blessed_dragonhide_vambraces_(Armadyl)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Blessed_dragonhide_body_(Armadyl)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Blessed_dragonhide_chaps_(Armadyl)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Blessed_dragonhide_coif_(Armadyl)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Black_dragon_mask: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Frost_dragon_mask: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Bronze_dragon_mask: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Iron_dragon_mask: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Steel_dragon_mask: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Mithril_dragon_mask: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Guthix_bow: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Zamorak_bow: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Saradomin_bow: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
  });

  return EliteLog;
}

export default EliteLog;
