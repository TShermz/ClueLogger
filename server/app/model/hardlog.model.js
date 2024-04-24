function HardLog(sequelize, Sequelize) {
  const HardLog = sequelize.define("hardLog", {
    hardLogId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Robin_Hood_hat: {
      type: Sequelize.INTEGER,
    },
    "Rune_platebody_(t)": {
      type: Sequelize.INTEGER,
    },

    "Rune_platelegs_(t)": {
      type: Sequelize.INTEGER,
    },
    "Rune_plateskirt_(t)": {
      type: Sequelize.INTEGER,
    },

    "Rune_kiteshield_(t)": {
      type: Sequelize.INTEGER,
    },

    "Rune_full_helm_(t)": {
      type: Sequelize.INTEGER,
    },

    "Rune_platebody_(g)": {
      type: Sequelize.INTEGER,
    },

    "Rune_platelegs_(g)": {
      type: Sequelize.INTEGER,
    },

    "Rune_plateskirt_(g)": {
      type: Sequelize.INTEGER,
    },

    "Rune_kiteshield_(g)": {
      type: Sequelize.INTEGER,
    },

    "Rune_full_helm_(g)": {
      type: Sequelize.INTEGER,
    },

    "Rune_platebody_(Zamorak)": {
      type: Sequelize.INTEGER,
    },

    "Rune_platelegs_(Zamorak)": {
      type: Sequelize.INTEGER,
    },

    "Rune_plateskirt_(Zamorak)": {
      type: Sequelize.INTEGER,
    },

    "Rune_kiteshield_(Zamorak)": {
      type: Sequelize.INTEGER,
    },

    "Rune_full_helm_(Zamorak)": {
      type: Sequelize.INTEGER,
    },

    "Rune_platebody_(Guthix)": {
      type: Sequelize.INTEGER,
    },

    "Rune_platelegs_(Guthix)": {
      type: Sequelize.INTEGER,
    },

    "Rune_plateskirt_(Guthix)": {
      type: Sequelize.INTEGER,
    },

    "Rune_kiteshield_(Guthix)": {
      type: Sequelize.INTEGER,
    },

    "Rune_full_helm_(Guthix)": {
      type: Sequelize.INTEGER,
    },

    "Rune_platebody_(Saradomin)": {
      type: Sequelize.INTEGER,
    },

    "Rune_platelegs_(Saradomin)": {
      type: Sequelize.INTEGER,
    },

    "Rune_plateskirt_(Saradomin)": {
      type: Sequelize.INTEGER,
    },

    "Rune_kiteshield_(Saradomin)": {
      type: Sequelize.INTEGER,
    },

    "Rune_full_helm_(Saradomin)": {
      type: Sequelize.INTEGER,
    },

    Tan_cavalier: {
      type: Sequelize.INTEGER,
    },
    Dark_cavalier: {
      type: Sequelize.INTEGER,
    },
    Black_cavalier: {
      type: Sequelize.INTEGER,
    },
    Pirate_hat: {
      type: Sequelize.INTEGER,
    },
    "Rune_shield_(h1)": {
      type: Sequelize.INTEGER,
    },

    "Rune_shield_(h2)": {
      type: Sequelize.INTEGER,
    },

    "Rune_shield_(h3)": {
      type: Sequelize.INTEGER,
    },

    "Rune_shield_(h4)": {
      type: Sequelize.INTEGER,
    },

    "Rune_shield_(h5)": {
      type: Sequelize.INTEGER,
    },

    "Blue_dragonhide_body_(t)": {
      type: Sequelize.INTEGER,
    },

    "Blue_dragonhide_chaps_(t)": {
      type: Sequelize.INTEGER,
    },

    "Blue_dragonhide_body_(g)": {
      type: Sequelize.INTEGER,
    },

    "Blue_dragonhide_chaps_(g)": {
      type: Sequelize.INTEGER,
    },

    Enchanted_hat: {
      type: Sequelize.INTEGER,
    },
    Enchanted_top: {
      type: Sequelize.INTEGER,
    },
    Enchanted_robe: {
      type: Sequelize.INTEGER,
    },
    "Rune_helm_(h1)": {
      type: Sequelize.INTEGER,
    },
    "Rune_helm_(h2)": {
      type: Sequelize.INTEGER,
    },
    "Rune_helm_(h3)": {
      type: Sequelize.INTEGER,
    },
    "Rune_helm_(h4)": {
      type: Sequelize.INTEGER,
    },
    "Rune_helm_(h5)": {
      type: Sequelize.INTEGER,
    },
    "Amulet_of_glory_(t4)": {
      type: Sequelize.INTEGER,
    },

    "Blessed_dragonhide_vambraces_(Saradomin)": {
      type: Sequelize.INTEGER,
    },

    "Blessed_dragonhide_body_(Saradomin)": {
      type: Sequelize.INTEGER,
    },

    "Blessed_dragonhide_chaps_(Saradomin)": {
      type: Sequelize.INTEGER,
    },

    "Blessed_dragonhide_coif_(Saradomin)": {
      type: Sequelize.INTEGER,
    },

    "Blessed_dragonhide_vambraces_(Guthix)": {
      type: Sequelize.INTEGER,
    },

    "Blessed_dragonhide_body_(Guthix)": {
      type: Sequelize.INTEGER,
    },

    "Blessed_dragonhide_chaps_(Guthix)": {
      type: Sequelize.INTEGER,
    },

    "Blessed_dragonhide_coif_(Guthix)": {
      type: Sequelize.INTEGER,
    },

    "Blessed_dragonhide_vambraces_(Zamorak)": {
      type: Sequelize.INTEGER,
    },

    "Blessed_dragonhide_body_(Zamorak)": {
      type: Sequelize.INTEGER,
    },

    "Blessed_dragonhide_chaps_(Zamorak)": {
      type: Sequelize.INTEGER,
    },

    "Blessed_dragonhide_coif_(Zamorak)": {
      type: Sequelize.INTEGER,
    },

    Saradomin_stole: {
      type: Sequelize.INTEGER,
    },

    Saradomin_crozier: {
      type: Sequelize.INTEGER,
    },

    Guthix_stole: {
      type: Sequelize.INTEGER,
    },
    Guthix_crozier: {
      type: Sequelize.INTEGER,
    },
    Zamorak_stole: {
      type: Sequelize.INTEGER,
    },
    Zamorak_crozier: {
      type: Sequelize.INTEGER,
    },

    Rune_cane: {
      type: Sequelize.INTEGER,
    },
    Top_hat: {
      type: Sequelize.INTEGER,
    },
    "Rune_platebody_(h1)": {
      type: Sequelize.INTEGER,
    },

    "Rune_platelegs_(h1)": {
      type: Sequelize.INTEGER,
    },

    "Rune_plateskirt_(h1)": {
      type: Sequelize.INTEGER,
    },

    "Rune_platebody_(h2)": {
      type: Sequelize.INTEGER,
    },

    "Rune_platelegs_(h2)": {
      type: Sequelize.INTEGER,
    },

    "Rune_plateskirt_(h2)": {
      type: Sequelize.INTEGER,
    },

    "Rune_platebody_(h3)": {
      type: Sequelize.INTEGER,
    },

    "Rune_platelegs_(h3)": {
      type: Sequelize.INTEGER,
    },

    "Rune_plateskirt_(h3)": {
      type: Sequelize.INTEGER,
    },

    "Rune_platebody_(h4)": {
      type: Sequelize.INTEGER,
    },

    "Rune_platelegs_(h4)": {
      type: Sequelize.INTEGER,
    },

    "Rune_plateskirt_(h4)": {
      type: Sequelize.INTEGER,
    },

    "Rune_platebody_(h5)": {
      type: Sequelize.INTEGER,
    },

    "Rune_platelegs_(h5)": {
      type: Sequelize.INTEGER,
    },

    "Rune_plateskirt_(h5)": {
      type: Sequelize.INTEGER,
    },

    Armadyl_cloak: {
      type: Sequelize.INTEGER,
    },
    Bandos_cloak: {
      type: Sequelize.INTEGER,
    },
    Ancient_cloak: {
      type: Sequelize.INTEGER,
    },
    Armadyl_mitre: {
      type: Sequelize.INTEGER,
    },
    Bandos_mitre: {
      type: Sequelize.INTEGER,
    },
    Ancient_mitre: {
      type: Sequelize.INTEGER,
    },
    Fox_mask: {
      type: Sequelize.INTEGER,
    },
    White_unicorn_mask: {
      type: Sequelize.INTEGER,
    },

    Black_unicorn_mask: {
      type: Sequelize.INTEGER,
    },

    Green_dragon_mask: {
      type: Sequelize.INTEGER,
    },

    Blue_dragon_mask: {
      type: Sequelize.INTEGER,
    },

    Red_dragon_mask: {
      type: Sequelize.INTEGER,
    },

    "Amulet_of_fury_(t)": {
      type: Sequelize.INTEGER,
    },

    "Rune_platebody_(Gilded)": {
      type: Sequelize.INTEGER,
    },

    "Rune_platelegs_(Gilded)": {
      type: Sequelize.INTEGER,
    },

    "Rune_plateskirt_(Gilded)": {
      type: Sequelize.INTEGER,
    },

    "Rune_full_helm_(Gilded)": {
      type: Sequelize.INTEGER,
    },

    "Rune_kiteshield_(Gilded)": {
      type: Sequelize.INTEGER,
    },
  });

  return HardLog;
}

export default HardLog;
