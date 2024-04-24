import "./ClueLog.css";
import { useSelector, useDispatch } from "react-redux";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { clueLogActions } from "../../store/slices/clueLogSlice";
import { updateCommons } from "../../util/log";

import ClueItem from "./ClueItem";
import ErrorBlock from "../UI/ErrorBlock";

export default function EditCommonsForm({ onSubmit }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedLog = useSelector((state) => state.clueLog.currentTier);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["mylog", selectedLog],
    queryFn: ({ signal }) => getLog({ signal, selectedLogName: selectedLog }),
  });

  const { mutate } = useMutation({
    mutationFn: updateCommons,
    onSucces: () => {
      queryClient.invalidateQueries({ queryKey: ["mylog", selectedLog] });
    },
  });

  function handleEditing() {
    dispatch(clueLogActions.toggleEdit());
    navigate('/mylog');
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const updatedCommons = Object.fromEntries(formData);

    mutate({updatedCommons, selectedLog});
    dispatch(clueLogActions.toggleEdit());
    navigate('/mylog');
  }

  let content;

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
    content = (
      <div className="clue-log-container">
      <form id="commons-form" onSubmit={handleSubmit}>
        <div className="logButtons">
          <button id="submitCommonButton" type="submit" onSubmit={handleSubmit}>
            Submit
          </button>
          <button id="cancelCommonButton" onClick={handleEditing}>
            Cancel
          </button>
        </div>

        <div className="clue-log">
          {Object.keys(data).map((key) => (
            <ClueItem key={key} name={key} value={data[key]} />
          ))}
        </div>
      </form>
      </div>
    );
  }

  return content;
}
