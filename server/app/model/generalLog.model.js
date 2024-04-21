function GeneralLog(sequelize, Sequelize) {
  const GeneralLog = sequelize.define("generalLog", {
    generalLogId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Saradomin_page_1: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Saradomin_page_2: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Saradomin_page_3: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Saradomin_page_4: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Zamorak_page_1: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Zamorak_page_2: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Zamorak_page_3: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Zamorak_page_4: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Guthix_page_1: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Guthix_page_2: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Guthix_page_3: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Guthix_page_4: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Armadyl_page_1: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Armadyl_page_2: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Armadyl_page_3: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Armadyl_page_4: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Ancient_page_1: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Ancient_page_2: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Ancient_page_3: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Ancient_page_4: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Bandos_page_1: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Bandos_page_2: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Bandos_page_3: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Bandos_page_4: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Red_firelighter: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Green_firelighter: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Blue_firelighter: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Purple_firelighter: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    White_firelighter: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Purple_sweets: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Holy_biscuits: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Pollnivneach_Teleport: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Bandit_Camp_Teleport: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Miscellania_Teleport: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Phoenix_Lair_Teleport: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Tai_Bwo_Wannai_Teleport: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Fort_Forinthry_Teleport: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Grand_Exchange_Teleport: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    GuTanoth_Teleport: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Clocktower_Teleport: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Lighthouse_Teleport: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Meerkat_scroll: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Meerkats_pouch: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Small_Bonus_XP_Star: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Medium_Bonus_XP_Star: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Large_Bonus_XP_Star: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Huge_Bonus_XP_Star: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Saradomin_arrows: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Guthix_arrows: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Zamorak_arrows: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Willow_composite_bow: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Yew_composite_bow: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Magic_composite_bow: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Black_crossbow: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Off_hand_black_crossbow: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Black_2h_crossbow: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Black_bolts: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Puzzle_box_skipping_ticket: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Knot_skipping_ticket: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Costume_skipping_ticket: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Tower_skipping_ticket: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Lockbox_skipping_ticket: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Easy_Reroll_Token: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Medium_Reroll_Token: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Hard_Reroll_Token: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Elite_Reroll_Token: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Master_Reroll_Token: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
    Guidos_bonfire_in_a_bottle: {
      type: Sequelize.TEXT,
      defaultValue: 0
    },
  });

  return GeneralLog;
}

export default GeneralLog;
