import "./BroadcastForm.css";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { useMutation } from "@tanstack/react-query";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Modal from "react-bootstrap/Modal";
import Tooltip from "react-bootstrap/Tooltip";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import FilterTierButtons from "../UI/FilterTierButtons";
import ErrorBlock from "../UI/ErrorBlock";
import BroadcastImagePicker from "./BroadcastImagePicker";
import {
  hardBroadcasts,
  eliteBroadcasts,
  masterBroadcasts,
} from "../../util/constants";

import { broadcastFormActions } from "../../store/slices/broadcastFormSlice.js";
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

const testText = "text";

export default function BroadcastForm({ handleClose, filterType }) {
  const dispatch = useDispatch();
  const selectedLog = useSelector(
    (state) => state.broadcastForm.currentBroadcastFormFilter
  );

  const selectedBroadcast = useSelector(
    (state) => state.broadcastForm.selectedBroadcast
  );

  const showModal = useSelector((state) => state.broadcastForm.showModal);

  const { mutate } = useMutation({
    mutationFn: addBroadcast,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["myBroadcasts"],
        refetchType: "all",
      });
      dispatch(myLogsActions.filterLog({ filterValue: selectedLog }));
      handleClose();
    },
  });

  const handleCloseModal = () => {
    dispatch(broadcastFormActions.toggleModal());
    dispatch(broadcastFormActions.resetBroadcastForm());
  };

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
    dispatch(broadcastFormActions.toggleModal());

    // errorData = await onSubmit(data, mode);
  }

  return (
    <>
      {errorData && (
        <ErrorBlock title={errorData.title} message={errorData.message} />
      )}

      <Modal size="lg" show={showModal} onClose={handleCloseModal}>
        <Modal.Header>
          <Modal.Title>Add Broadcast</Modal.Title>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
        </Modal.Header>

        <Modal.Body>
          <FilterTierButtons
            className="tier-filter"
            buttons={filterNames}
            filterType={filterType}
          />
          <Form id="broadcastForm" onSubmit={handleSubmit} className="form">
            <h5 style={{ fontWeight: "bold" }}>Required Information:</h5>

            <div className="requiredInputs">
              <Form.Group className="" controlId="method">
                <Form.Label className="mb-2">Method of Obtaining:</Form.Label>
                <Form.Select id="source" name="source" className="">
                  {sources.map((source) => {
                    return <option key={source}>{source}</option>;
                  })}
                </Form.Select>
              </Form.Group>

              <Form.Group className="" controlId="broadcastCount">
                <Form.Label className="mb-2 broadcastCountLabel">
                  Broadcast Count:{" "}
                  <OverlayTrigger
                    key={testText}
                    placement="top"
                    overlay={
                      <Tooltip id="tooltip-top">
                        Enter "6" if this was your 6th Orlando Smiths Hat
                      </Tooltip>
                    }
                  >
                    <ErrorOutlineOutlinedIcon fontSize="small" />
                  </OverlayTrigger>
                </Form.Label>
                <Form.Control
                  type="number"
                  name="broadcastCount"
                  defaultValue={null}
                  required
                />
              </Form.Group>
            </div>

            <Form.Label className="mt-2 mb-0">Select a broadcast:</Form.Label>
            <BroadcastImagePicker
              broadcasts={currentBroadcasts}
              hasBroadcasts={true}
              isForm={true}
            />

            <h5 style={{ fontWeight: "bold" }}>Optional Information:</h5>

            <div className="optionalInputs">
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
        </Modal.Body>
      </Modal>
    </>
  );
}
