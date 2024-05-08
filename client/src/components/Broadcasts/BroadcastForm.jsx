import "./BroadcastForm.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { useMutation } from "@tanstack/react-query";

import ClueLogButtons from "../Log/ClueLogButtons";
import ErrorBlock from "../UI/ErrorBlock";
import BroadcastImagePicker from "./BroadcastImagePicker";
import {
  hardBroadcasts,
  eliteBroadcasts,
  masterBroadcasts,
} from "../../util/constants";
import { clueLogActions } from "../../store/slices/clueLogSlice";

const filterNames = ["hard", "elite", "master"];
const sources = [
  "Clue Scroll",
  "Giant Oyster",
  "OSH Proc",
  "Penguin Casket",
  "Quest Dice",
  "Wilderness Flash Event",
];

export default function BroadcastForm({ inputData, onSubmit, children }) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const selectedLog = useSelector(
    (state) => state.clueLog.currentBroadcastFormFilter
  );

  const selectedBroadcast = useSelector(
    (state) => state.clueLog.selectedBroadcast
  );

  let currentBroadcasts, errorData;

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
    if (allData.name === undefined) {
      console.log("error");
      return errorData = {title: "Form Incomplete", message: "Please select a broadcast before submitting."};
    }
    console.log(allData);
    // dispatch(clueLogActions.resetBroadcastForm());

    // errorData = await onSubmit(data, mode);
    //exit modal
  }

  return (
    <>
      {errorData && <ErrorBlock title={errorData.title} message={errorData.message}/>}
      <ClueLogButtons
        className="tier-filter"
        buttons={filterNames}
        filterType="broadcastForm"
      />

      <form id="broadcastForm" onSubmit={handleSubmit} className="form">
        <p style={{ fontWeight: "bold" }}>Required Information:</p>

        <label htmlFor="dateReceived">Method of Obtaining</label>

        <Form.Select id="source" name="source"
          style={{ width: "100%", backgroundColor: "black", color: "white" }}
        >
          {sources.map((source) => {
            return <option>{source}</option>;
          })}
        </Form.Select>

        <BroadcastImagePicker
          broadcasts={currentBroadcasts}
          hasBroadcasts={true}
          isForm={true}
        />

        <p style={{ fontWeight: "bold" }}>Optional Information:</p>

        <p>
          <label htmlFor="count">Clue Count</label>
          <input
            id="count"
            type="number"
            name="count"
            placeholder="If unknown, leave blank."
          />
        </p>

        <p>
          <label htmlFor="dateReceived">Date Received</label>
          <input id="dateReceived" type="date" name="dateReceived" defaultValue={undefined} />
        </p>

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
