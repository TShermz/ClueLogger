import "./ClueLog.css";
import { useQuery } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getCommons } from "../../util/log.js";
import { getBroadcasts } from "../../util/broadcasts.js";

import { myLogsActions } from "../../store/slices/myLogsSlice.js";
import ClueItemArray from "./ClueItemArray.jsx";
import FilterTierButtons from "../UI/FilterTierButtons";
import BroadcastForm from "../Modals/BroadcastForm.jsx";
import { broadcastFormActions } from "../../store/slices/broadcastFormSlice.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

const filterNames = ["general", "easy", "medium", "hard", "elite", "master"];

export default function ClueLog() {
  const dispatch = useDispatch();
  const selectedLog = useSelector((state) => state.myLogs.currentLogFilter);

  const hasBroadcasts =
    (selectedLog === "hard") |
    (selectedLog === "elite") |
    (selectedLog === "master");

  const {
    data: commonsData,
    isLoading: commonsIsLoading,
    isError: commonsIsError,
    error: commonsError,
  } = useQuery({
    queryKey: ["myCommons", selectedLog],
    queryFn: ({ signal }) =>
      getCommons({ signal, selectedLogName: selectedLog }),
  });

  const {
    data: broadcastsData,
    isLoading: broadcastsIsLoading,
    isError: broadcastsIsError,
    error: broadcastsError,
  } = useQuery({
    queryKey: ["myBroadcasts", selectedLog],
    queryFn: ({signal}) => getBroadcasts({ signal, selectedLogName: selectedLog }),
  });

  console.log(selectedLog);

  function handleEditing() {
    dispatch(myLogsActions.toggleEdit());
  };

  const handleShowModal = () => {
    dispatch(
      broadcastFormActions.filterBroadcastForm({ filterValue: selectedLog })
    );
    dispatch(broadcastFormActions.toggleModal());
  };

  let content, commons, broadcasts;

  if (commonsIsLoading || broadcastsIsLoading) {
    content = (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (commonsIsError || broadcastsIsError) {
    content = (
      <div>
        <ErrorBlock
          title="Failed to load message."
          message={error.info?.message || "Error when fetching data."}
        />
      </div>
    );
  }

  if (commonsData) {
    const editLink = `/commons/${selectedLog}/edit`;
    commons = commonsData.commons;
    broadcasts = broadcastsData?.broadcasts;

    content = (
      <>
        <FilterTierButtons
          className="tier-filter"
          buttons={filterNames}
          filterType="log"
        />
        
        {/* Broadcasts Section */}
        {hasBroadcasts && broadcasts !== undefined ? (
          <>
            <div className="logButtons">
              <h3>Broadcasts</h3>
              <Button onClick={handleShowModal}>Add Broadcast</Button>
            </div>
            <ClueItemArray items={broadcasts} hasBroadcasts />
          </>
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
        <ClueItemArray items={commons} />
        <BroadcastForm />
      </>
    );
  }

  return content;
}
