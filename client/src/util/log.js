import { generalTemplate } from "../templates/logs/general.js";
import { easyTemplate } from "../templates/logs/easy.js";
import { mediumTemplate } from "../templates/logs/medium.js";
import { hardTemplate } from "../templates/logs/hard.js";
import { eliteTemplate } from "../templates/logs/elite.js";
import { masterTemplate } from "../templates/logs/master.js";

import {useParams} from 'react-router-dom';
import { useSelector } from "react-redux";

export const templateArray = [
  { name: "general", template: generalTemplate },
  { name: "easy", template: easyTemplate },
  { name: "medium", template: mediumTemplate },
  { name: "hard", template: hardTemplate },
  { name: "elite", template: eliteTemplate },
  { name: "master", template: masterTemplate },
];

export async function getLog({signal, selectedLogName}) {
  console.log('trying to send this: ' + selectedLogName);
  const response = await fetch(`http://localhost:8080/mylog/${selectedLogName}`, {
    method: "GET",
    headers: {
      "mode": "no-cors"
    },
    credentials: "include",
  });

  if (!response.ok) {
    throw json({
      message: "Could not retrieve log.",
      status: 500,
    });
  }

  const log = await response.json();

  return log;
}