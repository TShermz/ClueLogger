import  {generalTemplate} from "../templates/logs/general.js";
import { masterTemplate} from "../templates/logs/master.js";
import { eliteTemplate} from "../templates/logs/elite.js";
import { hardTemplate} from "../templates/logs/hard.js";
import { mediumTemplate}from "../templates/logs/medium.js";
import { easyTemplate} from "../templates/logs/easy.js";

import 




function templateCreater(array) {
    // let count = 58;
  
    const updated = array.map((item) => {
      return {
        ...item,
        image: `/hidden/elite/${item.name.replaceAll(" ", "_")}.webp`,
      };
    });
  
    // for (let i = 0; i < count; i ++){
    //     array.push({
    //         name: '',
    //         image: '../../assets/master/'
    //     })
    // }
  
    // console.log(updated);
    // return updated;
  //   console.log(updated);
    return updated;
  }
  
  // const test = templateCreater(eliteTemplate);
  // console.log(test);
  const test = 
  console.dir(test, {'maxArrayLength': null})

//second attempt at json
[
  {"Saradomin_page_1": 0},
  {"Saradomin_page_2": 0},
  {"Saradomin_page_3": 0},
  {"Saradomin_page_4": 0},
  {"Zamorak_page_1": 0},
  {"Zamorak_page_2": 0},
  {"Zamorak_page_3": 0},
  {"Zamorak_page_4": 0},
  {"Guthix_page_1": 0},
  {"Guthix_page_2": 0},
  {"Guthix_page_3": 0},
  {"Guthix_page_4": 0},
  {"Armadyl_page_1": 0},
  {"Armadyl_page_2": 0},
  {"Armadyl_page_3": 0},
  {"Armadyl_page_4": 0},
  {"Ancient_page_1": 0},
  {"Ancient_page_2": 0},
  {"Ancient_page_3": 0},
  {"Ancient_page_4": 0},
  {"Bandos_page_1": 0},
  {"Bandos_page_2": 0},
  {"Bandos_page_3": 0},
  {"Bandos_page_4": 0},
  {"Red_firelighter": 0},
  {"Green_firelighter": 0},
  {"Blue_firelighter": 0},
  {"Purple_firelighter": 0},
  {"White_firelighter": 0},
  {"Purple_sweets": 0},
  {"Holy_biscuits": 0},
  {"Pollnivneach_Teleport": 0},
  {"Bandit_Camp_Teleport": 0},
  {"Miscellania_Teleport": 0},
  {"Phoenix_Lair_Teleport": 0},
  {"Tai_Bwo_Wannai_Teleport": 0},
  {"Fort_Forinthry_Teleport": 0},
  {"Grand_Exchange_Teleport": 0},
  {"Gu_Tanoth_Teleport": 0},
  {"Clocktower_Teleport": 0},
  {"Lighthouse_Teleport": 0},
  {"Meerkat_scroll_(Fetch_Casket)": 0},
  {"Meerkats_pouch": 0},
  {"Bonus_XP_star_(small)": 0},
  {"Bonus_XP_star_(medium)": 0},
  {"Bonus_XP_star_(large)": 0},
  {"Bonus_XP_star_(huge)": 0},
  {"Saradomin_arrows": 0},
  {"Guthix_arrows": 0},
  {"Zamorak_arrows": 0},
  {"Willow_composite_bow": 0},
  {"Yew_composite_bow": 0},
  {"Magic_composite_bow": 0},
  {"Black_crossbow": 0},
  {"Off-hand_black_crossbow": 0},
  {"Black_2h_crossbow": 0},
  {"Black_bolts": 0},
  {"Puzzle_box_skipping_ticket": 0},
  {"Knot_skipping_ticket": 0},
  {"Costume_skipping_ticket": 0},
  {"Tower_skipping_ticket": 0},
  {"Lockbox_skipping_ticket": 0},
  {"Reroll_token_(easy)": 0},
  {"Reroll_token_(medium)": 0},
  {"Reroll_token_(hard)": 0},
  {"Reroll_token_(elite)": 0},
  {"Reroll_token_(master)": 0},
  {"Guidos_bonfire_in_a_bottle": 0}
]