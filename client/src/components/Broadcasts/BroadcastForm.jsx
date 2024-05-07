import "./BroadcastForm.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

import ClueLogButtons from "../Log/ClueLogButtons";
import BroadcastImagePicker from "./BroadcastImagePicker";
import {
  hardBroadcasts,
  eliteBroadcasts,
  masterBroadcasts,
} from "../../util/constants";

const filterNames = ["hard", "elite", "master"];

export default function BroadcastForm({ inputData, onSubmit, children }) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const selectedLog = useSelector(
    (state) => state.clueLog.currentBroadcastFormFilter
  );

  const selectedBroadcast = useSelector(
    (state) => state.clueLog.selectedBroadcast
  );

  let currentBroadcasts;

  if (selectedLog === "hard") {
    currentBroadcasts = hardBroadcasts;
  } else if (selectedLog === "elite") {
    currentBroadcasts = eliteBroadcasts;
  } else {
    currentBroadcasts = masterBroadcasts;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const allData = { ...data, clueTier: selectedLog, name: selectedBroadcast };

    console.log(allData);

    // errorData = await onSubmit(data, mode);
    //exit modal
  }

  return (
    <>
      <ClueLogButtons
        className="tier-filter"
        buttons={filterNames}
        filterType="broadcastForm"
      />

      <form id="broadcastForm" onSubmit={handleSubmit} className="form">
        <BroadcastImagePicker
          broadcasts={currentBroadcasts}
          hasBroadcasts={true}
          isForm={true}
        />

        <p>
          <label htmlFor="count">Clue Count</label>
          <input id="count" type="number" name="count" required />
        </p>

        <p>
          <label htmlFor="dateReceived">Date Received</label>
          <input
            id="dateReceived"
            type="date"
            name="dateReceived"
            required
          />
        </p>

        <div key={`inline-radio`} className="mb-3">
          <Form.Check
            inline
            label="1"
            name="group1"
            type='radio'
            id={`inline-radio-1`}
          />
        </div>


        <button
          className="submitButton"
          // disabled={isSubmitting}
          type="submit"
        >
          {/* {isSubmitting ? "Submitting..." : "Login"} */}
        </button>

        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </form>
    </>
  );
}
