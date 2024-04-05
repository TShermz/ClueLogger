import "./ClueLog.css";

import { useState } from "react";
import { useSelector } from "react-redux";

import ClueLogButtons from "./ClueLogButtons.jsx";
import ClueItem from "./ClueItem.jsx";
import ClueLogFilter from "./ClueLogFilter.jsx";

import { generalTemplate } from "../../templates/logs/general.js";
import { easyTemplate } from "../../templates/logs/easy.js";
import { mediumTemplate } from "../../templates/logs/medium.js";
import { hardTemplate } from "../../templates/logs/hard.js";
import { eliteTemplate } from "../../templates/logs/elite.js";
import { masterTemplate } from "../../templates/logs/master.js";

export default function ClueLog() {
  // const currentLogText = useSelector((state) => state.clueLog.currentLog);
  const templateArray = [
    { name: "general", template: generalTemplate },
  { name: "easy", template: easyTemplate },
    { name: "medium", template: mediumTemplate },
    { name: "hard", template: hardTemplate },
    { name: "elite", template: eliteTemplate },
    { name: "master", template: masterTemplate },
  ];

  let currentTemplate = templateArray.filter(
    (template) => template.name === 'general'
  );
  const template = currentTemplate[0].template;  

  const itemFilterButtons = ["all", "broadcasts", "commons"];
  const tierFilterButtons = ["general", "easy", "medium", "hard", "elite", "master"];

  function handleChange(newLog) {
    setCurrentLog(newLog);
  }

  return (
    <>
      <div className="clue-log-container">
        <ClueLogButtons
          className="item-filter"
          buttons={itemFilterButtons}
          filterType="item"
        />
        <ClueLogButtons
          className="tier-filter"
          buttons={tierFilterButtons}
          filterType="tier"
        />
        <div className="clue-log">
          {template.map((item) => {
            return <ClueItem key={item.name} item={item} />;
          })}
        </div>
      </div>
    </>
  );
}
