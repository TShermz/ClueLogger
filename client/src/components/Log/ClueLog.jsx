import "./ClueLog.css";
import { useQuery } from "@tanstack/react-query"
import { useSelector } from "react-redux";
import { getLog } from "../../util/log.js";

import ClueLogButtons from "./ClueLogButtons.jsx";
import ClueItem from "./ClueItem.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

const tierFilterButtons = ["general", "easy", "medium", "hard", "elite", "master"];

export default function ClueLog() {
  const selectedLog = useSelector(state => state.clueLog.currentTier);
  const hasBroadcasts = selectedLog === "hard" | selectedLog === "elite" | selectedLog === "master";
  
  const {data: commons, isLoading: commonsIsLoading, isError: commonsIsError, error: commonsError} = useQuery({
    queryKey: ['mylog', selectedLog],
    queryFn: ({signal})=> getLog({signal, selectedLogName: selectedLog})
  })

  let content;
  if(commonsIsLoading){
    content = (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if(commonsIsError) {
    content = (
      <div>
        <ErrorBlock
          title="Failed to load message."
          message={error.info?.message || "Error when fetching data."}
        />
      </div>
    );
  };

  if(commons){
    content = (
      <div className="clue-log-container">
        <ClueLogButtons
          className="tier-filter"
          buttons={tierFilterButtons}
          filterType="tier"
        />
        {hasBroadcasts ? <h3>Broadcasts</h3> : null}
        <h3>Commons</h3>
        <div className="clue-log">
          {Object.keys(commons).map((key) => (
            <ClueItem key={key} name={key} value={commons[key]} />
          ))}
        </div>
      </div>
    )
  }


  return content;
}
