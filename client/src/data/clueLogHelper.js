import { generalTemplate } from "../templates/logs/general.js";
import { masterTemplate } from "../templates/logs/master.js";
import { eliteTemplate } from "../templates/logs/elite.js";
import { hardTemplate } from "../templates/logs/hard.js";
import { mediumTemplate } from "../templates/logs/medium.js";
import { easyTemplate } from "../templates/logs/easy.js";

const templateArray = [
  { name: "general", template: generalTemplate },
  { name: "easy", template: easyTemplate },
  { name: "medium", template: mediumTemplate },
  { name: "hard", template: hardTemplate },
  { name: "elite", template: eliteTemplate },
  { name: "master", template: masterTemplate },
];

export function filterLog(state, action) {

  //selects current tier template
  const currentTier = templateArray.filter(
    (template) => template.name === state.currentTier
  );

  //filters out item type

  if(state.currentItem === 'all'){
    return currentTier;
  } else {
    const filteredArray = currentTier[0].template.filter(
      (item) => item.type === state.currentItem
    );

    return filteredArray[0].template;
  }
}
