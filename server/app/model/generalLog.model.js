function GeneralLog(sequelize, Sequelize) {
  const GeneralLog = sequelize.define("generalLog", {
    generalLogId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Saradomin_page_1: {
      type: Sequelize.INTEGER,
    },
    Saradomin_page_2: {
      type: Sequelize.INTEGER,
    },
    Saradomin_page_3: {
      type: Sequelize.INTEGER,
    },
    Saradomin_page_4: {
      type: Sequelize.INTEGER,
    },
    Zamorak_page_1: {
      type: Sequelize.INTEGER,
    },
    Zamorak_page_2: {
      type: Sequelize.INTEGER,
    },
    Zamorak_page_3: {
      type: Sequelize.INTEGER,
    },
    Zamorak_page_4: {
      type: Sequelize.INTEGER,
    },
    Guthix_page_1: {
      type: Sequelize.INTEGER,
    },
    Guthix_page_2: {
      type: Sequelize.INTEGER,
    },
    Guthix_page_3: {
      type: Sequelize.INTEGER,
    },
    Guthix_page_4: {
      type: Sequelize.INTEGER,
    },
    Armadyl_page_1: {
      type: Sequelize.INTEGER,
    },
    Armadyl_page_2: {
      type: Sequelize.INTEGER,
    },
    Armadyl_page_3: {
      type: Sequelize.INTEGER,
    },
    Armadyl_page_4: {
      type: Sequelize.INTEGER,
    },
    Ancient_page_1: {
      type: Sequelize.INTEGER,
    },
    Ancient_page_2: {
      type: Sequelize.INTEGER,
    },
    Ancient_page_3: {
      type: Sequelize.INTEGER,
    },
    Ancient_page_4: {
      type: Sequelize.INTEGER,
    },
    Bandos_page_1: {
      type: Sequelize.INTEGER,
    },
    Bandos_page_2: {
      type: Sequelize.INTEGER,
    },
    Bandos_page_3: {
      type: Sequelize.INTEGER,
    },
    Bandos_page_4: {
      type: Sequelize.INTEGER,
    },
    Red_firelighter: {
      type: Sequelize.INTEGER,
    },
    Green_firelighter: {
      type: Sequelize.INTEGER,
    },
    Blue_firelighter: {
      type: Sequelize.INTEGER,
    },
    Purple_firelighter: {
      type: Sequelize.INTEGER,
    },
    White_firelighter: {
      type: Sequelize.INTEGER,
    },
    Purple_sweets: {
      type: Sequelize.INTEGER,
    },
    Holy_biscuits: {
      type: Sequelize.INTEGER,
    },
    Pollnivneach_Teleport: {
      type: Sequelize.INTEGER,
    },
    Bandit_Camp_Teleport: {
      type: Sequelize.INTEGER,
    },
    Miscellania_Teleport: {
      type: Sequelize.INTEGER,
    },
    Phoenix_Lair_Teleport: {
      type: Sequelize.INTEGER,
    },
    Tai_Bwo_Wannai_Teleport: {
      type: Sequelize.INTEGER,
    },
    Fort_Forinthry_Teleport: {
      type: Sequelize.INTEGER,
    },
    Grand_Exchange_Teleport: {
      type: Sequelize.INTEGER,
    },
    GuTanoth_Teleport: {
      type: Sequelize.INTEGER,
    },
    Clocktower_Teleport: {
      type: Sequelize.INTEGER,
    },
    Lighthouse_Teleport: {
      type: Sequelize.INTEGER,
    },
    Meerkat_scroll: {
      type: Sequelize.INTEGER,
    },
    Meerkats_pouch: {
      type: Sequelize.INTEGER,
    },
    Small_Bonus_XP_Star: {
      type: Sequelize.INTEGER,
    },
    Medium_Bonus_XP_Star: {
      type: Sequelize.INTEGER,
    },
    Large_Bonus_XP_Star: {
      type: Sequelize.INTEGER,
    },
    Huge_Bonus_XP_Star: {
      type: Sequelize.INTEGER,
    },
    Saradomin_arrows: {
      type: Sequelize.INTEGER,
    },
    Guthix_arrows: {
      type: Sequelize.INTEGER,
    },
    Zamorak_arrows: {
      type: Sequelize.INTEGER,
    },
    Willow_composite_bow: {
      type: Sequelize.INTEGER,
    },
    Yew_composite_bow: {
      type: Sequelize.INTEGER,
    },
    Magic_composite_bow: {
      type: Sequelize.INTEGER,
    },
    Black_crossbow: {
      type: Sequelize.INTEGER,
    },
    Off_hand_black_crossbow: {
      type: Sequelize.INTEGER,
    },
    Black_2h_crossbow: {
      type: Sequelize.INTEGER,
    },
    Black_bolts: {
      type: Sequelize.INTEGER,
    },
    Puzzle_box_skipping_ticket: {
      type: Sequelize.INTEGER,
    },
    Knot_skipping_ticket: {
      type: Sequelize.INTEGER,
    },
    Costume_skipping_ticket: {
      type: Sequelize.INTEGER,
    },
    Tower_skipping_ticket: {
      type: Sequelize.INTEGER,
    },
    Lockbox_skipping_ticket: {
      type: Sequelize.INTEGER,
    },
    Easy_Reroll_Token: {
      type: Sequelize.INTEGER,
    },
    Medium_Reroll_Token: {
      type: Sequelize.INTEGER,
    },
    Hard_Reroll_Token: {
      type: Sequelize.INTEGER,
    },
    Elite_Reroll_Token: {
      type: Sequelize.INTEGER,
    },
    Master_Reroll_Token: {
      type: Sequelize.INTEGER,
    },
    Guidos_bonfire_in_a_bottle: {
      type: Sequelize.INTEGER,
    },
  });

  return GeneralLog;
}

export default GeneralLog;
