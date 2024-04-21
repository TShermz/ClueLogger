function HardLog(sequelize, Sequelize) {
  const HardLog = sequelize.define("hardLog", {
    hardLogId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Robin_Hood_hat: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    "Rune_platebody_(t)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_platelegs_(t)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    "Rune_plateskirt_(t)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_kiteshield_(t)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_full_helm_(t)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_platebody_(g)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_platelegs_(g)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_plateskirt_(g)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_kiteshield_(g)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_full_helm_(g)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_platebody_(Zamorak)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_platelegs_(Zamorak)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_plateskirt_(Zamorak)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_kiteshield_(Zamorak)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_full_helm_(Zamorak)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_platebody_(Guthix)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_platelegs_(Guthix)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_plateskirt_(Guthix)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_kiteshield_(Guthix)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_full_helm_(Guthix)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_platebody_(Saradomin)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_platelegs_(Saradomin)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_plateskirt_(Saradomin)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_kiteshield_(Saradomin)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_full_helm_(Saradomin)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Tan_cavalier: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    Dark_cavalier: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    Black_cavalier: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    Pirate_hat: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    "Rune_shield_(h1)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_shield_(h2)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_shield_(h3)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_shield_(h4)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_shield_(h5)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Blue_dragonhide_body_(t)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Blue_dragonhide_chaps_(t)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Blue_dragonhide_body_(g)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Blue_dragonhide_chaps_(g)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Enchanted_hat: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    Enchanted_top: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    Enchanted_robe: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    "Rune_helm_(h1)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    "Rune_helm_(h2)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    "Rune_helm_(h3)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    "Rune_helm_(h4)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    "Rune_helm_(h5)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    "Amulet_of_glory_(t4)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Blessed_dragonhide_vambraces_(Saradomin)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Blessed_dragonhide_body_(Saradomin)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Blessed_dragonhide_chaps_(Saradomin)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Blessed_dragonhide_coif_(Saradomin)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Blessed_dragonhide_vambraces_(Guthix)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Blessed_dragonhide_body_(Guthix)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Blessed_dragonhide_chaps_(Guthix)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Blessed_dragonhide_coif_(Guthix)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Blessed_dragonhide_vambraces_(Zamorak)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Blessed_dragonhide_body_(Zamorak)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Blessed_dragonhide_chaps_(Zamorak)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Blessed_dragonhide_coif_(Zamorak)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Saradomin_stole: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Saradomin_crozier: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Guthix_stole: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    Guthix_crozier: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    Zamorak_stole: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    Zamorak_crozier: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Rune_cane: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    Top_hat: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    "Rune_platebody_(h1)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_platelegs_(h1)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_plateskirt_(h1)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_platebody_(h2)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_platelegs_(h2)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_plateskirt_(h2)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_platebody_(h3)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_platelegs_(h3)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_plateskirt_(h3)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_platebody_(h4)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_platelegs_(h4)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_plateskirt_(h4)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_platebody_(h5)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_platelegs_(h5)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_plateskirt_(h5)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Armadyl_cloak: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    Bandos_cloak: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    Ancient_cloak: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    Armadyl_mitre: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    Bandos_mitre: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    Ancient_mitre: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    Fox_mask: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
    White_unicorn_mask: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Black_unicorn_mask: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Green_dragon_mask: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Blue_dragon_mask: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    Red_dragon_mask: {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Amulet_of_fury_(t)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_platebody_(Gilded)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_platelegs_(Gilded)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_plateskirt_(Gilded)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_full_helm_(Gilded)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },

    "Rune_kiteshield_(Gilded)": {
      type: Sequelize.TEXT,
      defaultValue: 0,
    },
  });

  return HardLog;
}

export default HardLog;
