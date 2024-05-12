import "./ClueLog.css";
import { useSelector, useDispatch } from "react-redux";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { myLogsActions } from "../../store/slices/myLogsSlice";
import { updateCommons } from "../../util/log";

import ClueItem from "./ClueItem";
import ErrorBlock from "../UI/ErrorBlock";

export default function EditCommonsForm({ onSubmit }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedLog = useSelector((state) => state.clueLog.currentLogFilter);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["mylog", selectedLog],
    queryFn: ({ signal }) => getLog({ signal, selectedLogName: selectedLog }),
  });

  const { mutate } = useMutation({
    mutationFn: updateCommons,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mylog", selectedLog] });
    },
  });

  function handleEditing() {
    dispatch(myLogsActions.toggleEdit());
    navigate('/mylog');
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const updatedCommons = Object.fromEntries(formData);
    
    mutate({updatedCommons, selectedLog});
    dispatch(myLogsActions.toggleEdit());
    navigate('/mylog');
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
    commons = data.commons;
    content = (
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
          {Object.keys(commons).map((key) => (
            <ClueItem key={key} name={key} value={commons[key]} />
          ))}
        </div>
      </form>
    );
  }

  return content;
}
