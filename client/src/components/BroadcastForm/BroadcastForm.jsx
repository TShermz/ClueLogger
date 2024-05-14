import "./BroadcastForm.css";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { useMutation } from "@tanstack/react-query";

import FilterTierButtons from "../UI/FilterTierButtons"
import ErrorBlock from "../UI/ErrorBlock";
import BroadcastImagePicker from "./BroadcastImagePicker";
import {
  hardBroadcasts,
  eliteBroadcasts,
  masterBroadcasts,
} from "../../util/constants";
import { myLogsActions } from "../../store/slices/myLogsSlice";

import { addBroadcast } from "../../util/broadcasts";
import { queryClient } from "../../util/http";

const filterNames = ["hard", "elite", "master"];
const sources = [
  "Clue Scroll",
  "Giant Oyster",
  "OSH Proc",
  "Penguin Casket",
  "Quest Dice",
  "Wilderness Flash Event",
];

export default function BroadcastForm({ handleClose}) {
  const dispatch = useDispatch();
  const selectedLog = useSelector(
    (state) => state.broadcastForm.currentBroadcastFormFilter
  );

  const selectedBroadcast = useSelector(
    (state) => state.broadcastForm.selectedBroadcast
  );

  const { mutate } = useMutation({
    mutationFn: addBroadcast,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myBroadcasts"] });
      dispatch(myLogsActions.filterLog({filterValue: selectedLog}));
      handleClose();
    },
  });

  let currentBroadcasts, errorData;

  if (selectedLog === "hard") {
    currentBroadcasts = hardBroadcasts;
  } else if (selectedLog === "elite") {
    currentBroadcasts = eliteBroadcasts;
  } else {
    currentBroadcasts = masterBroadcasts;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (selectedBroadcast === undefined) {
      console.log("error");
      return (errorData = {
        title: "Form Incomplete",
        message: "Please select a broadcast before submitting.",
      });
    }

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const allData = {
      ...data,
      clueTier: selectedLog,
      broadcastName: selectedBroadcast,
    };

    mutate(allData);

    // errorData = await onSubmit(data, mode);
  }

  return (
    <>
      {errorData && (
        <ErrorBlock title={errorData.title} message={errorData.message} />
      )}
      <FilterTierButtons
        className="tier-filter"
        buttons={filterNames}
        filterType="broadcastForm"
      />

      <Form id="broadcastForm" onSubmit={handleSubmit} className="form">
        <h5 style={{ fontWeight: "bold" }}>Required Information:</h5>

        <Form.Label className="mb-2">Method of Obtaining:</Form.Label>


        <Form.Select
          id="source"
          name="source"
          className="mb-2"
        >
          {sources.map((source) => {
            return <option key={source}>{source}</option>;
          })}
        </Form.Select>

        <Form.Label className="mb-0">Select a broadcast:</Form.Label>
        <BroadcastImagePicker
          broadcasts={currentBroadcasts}
          hasBroadcasts={true}
          isForm={true}
        />

        <h5 style={{ fontWeight: "bold" }}>Optional Information:</h5>

        <div className="optionalButtons">
          <Form.Group className="mb-3" controlId="clueCount">
            <Form.Label>Clue Count:</Form.Label>
            <Form.Control
              type="number"
              name="clueCount"
              placeholder="If unknown, leave blank."
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="dateReceived">
            <Form.Label>Date Received:</Form.Label>
            <Form.Control
              type="date"
              name="dateReceived"
              defaultValue={null}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="submitButton">
            Add Broadcast
          </Button>
        </div>
      </Form>
    </>
  );
}
