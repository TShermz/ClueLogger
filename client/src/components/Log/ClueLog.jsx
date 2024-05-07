import "./ClueLog.css";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getLog } from "../../util/log.js";
import { clueLogActions } from "../../store/slices/clueLogSlice.js";
import Modal from "react-bootstrap/Modal";
import BroadcastForm from "../Broadcasts/BroadcastForm.jsx";
import ClueItemArray from "./ClueItemArray.jsx";
import ClueLogButtons from "./ClueLogButtons.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

const filterNames = ["general", "easy", "medium", "hard", "elite", "master"];

const displayFilterButtons = [
  "General",
  "Easy",
  "Medium",
  "Hard",
  "Elite",
  "Master",
];

export default function ClueLog() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const selectedLog = useSelector((state) => state.clueLog.currentLogFilter);

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

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleShowModal = () => {
    setShowModal(true);
  };

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
    broadcasts = data.broadcasts;
    commons = data.commons;
    const editLink = `/commons/${selectedLog}/edit`;

    content = (
      <>
        <ClueLogButtons
          className="tier-filter"
          buttons={filterNames}
          filterType="log"
        />
        {/* Broadcasts Section */}
        {hasBroadcasts ? (
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

        <Modal show={showModal} onClose={handleCloseModal}>
          <Modal.Header>
            <Modal.Title>Add Broadcast</Modal.Title>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
          </Modal.Header>

          <Modal.Body>
            <BroadcastForm />
          </Modal.Body>
        </Modal>
      </>
    );
  }

  return content;
}
