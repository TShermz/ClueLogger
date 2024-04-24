import "./ClueLog.css";
import { useQuery } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getLog } from "../../util/log.js";
import { clueLogActions } from "../../store/slices/clueLogSlice.js";

import ClueItem from "./ClueItem.jsx";
import ClueLogButtons from "./ClueLogButtons.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

const tierFilterButtons = [
  "general",
  "easy",
  "medium",
  "hard",
  "elite",
  "master",
];

const displayFilterButtons = [
  "General",
  "Easy",
  "Medium",
  "Hard",
  "Elite",
  "Master",
];

export default function ClueLog() {
  const dispatch = useDispatch();
  const selectedLog = useSelector((state) => state.clueLog.currentTier);

  const hasBroadcasts =
    (selectedLog === "hard") |
    (selectedLog === "elite") |
    (selectedLog === "master");

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["mylog", selectedLog],
    queryFn: ({ signal }) => getLog({ signal, selectedLogName: selectedLog }),
  });

  function handleEditing() {
    dispatch(clueLogActions.toggleEdit());
  }

  let content, commons, broadcasts;

  if (isLoading) {
    content = (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (isError) {
    content = (
      <div>
        <ErrorBlock
          title="Failed to load message."
          message={error.info?.message || "Error when fetching data."}
        />
      </div>
    );
  }

  if (data) {
    commons = data;
    // broadcasts = data.broadcasts;
    const editLink = `/commons/${selectedLog}/edit`;
    content = (
      <div className="clue-log-container">
        <ClueLogButtons
          className="tier-filter"
          buttons={tierFilterButtons}
          filterType="tier"
        />

        {/* Broadcasts Section */}
        {hasBroadcasts ? (
          <div className="logButtons">
            <h3>Broadcasts</h3>
            <Link to={editLink}>
              <Button id="editCommonButton" onClick={handleEditing}>
                Edit Broadcasts
              </Button>
            </Link>
          </div>
        ) : null}

        {/* Commons Section */}
        <div className="logButtons">
          <h3>Commons</h3>
          <Link to={editLink}>
            <Button id="editCommonButton" onClick={handleEditing}>
              Edit Commons
            </Button>
          </Link>
        </div>
        <div className="clue-log">
          {Object.keys(commons).map((key) => (
            <ClueItem key={key} name={key} value={commons[key]} />
          ))}
        </div>
      </div>
    );
  }

  return content;
}
