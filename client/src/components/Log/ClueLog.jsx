import "./ClueLog.css";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getCommons } from "../../util/log.js";
import { getBroadcasts } from "../../util/broadcasts.js";

import { myLogsActions } from "../../store/slices/myLogsSlice.js";
import { broadcastFormActions } from "../../store/slices/broadcastFormSlice.js";

import Modal from "react-bootstrap/Modal";
import BroadcastForm from "../BroadcastForm/BroadcastForm.jsx";
import ClueItemArray from "./ClueItemArray.jsx";
import FilterTierButtons from "../UI/FilterTierButtons";
import ErrorBlock from "../UI/ErrorBlock.jsx";

const filterNames = ["general", "easy", "medium", "hard", "elite", "master"];

export default function ClueLog() {
  const [showModal, setShowModal] = useState(false);
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
    queryFn: () => getBroadcasts({ selectedLogName: selectedLog }),
  });

  function handleEditing() {
    dispatch(myLogsActions.toggleEdit());
  }

  const handleCloseModal = () => {
    setShowModal(false);
    dispatch(broadcastFormActions.resetBroadcastForm());
  };
  const handleShowModal = () => {
    dispatch(broadcastFormActions.filterBroadcastForm({filterValue: selectedLog}));
    setShowModal(true);
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

        <Modal size="lg" show={showModal} onClose={handleCloseModal}>
          <Modal.Header>
            <Modal.Title>Add Broadcast</Modal.Title>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
          </Modal.Header>

          <Modal.Body>
            <BroadcastForm handleClose={handleCloseModal} currentFilterValue={selectedLog}/>
          </Modal.Body>
        </Modal>
      </>
    );
  }

  return content;
}
