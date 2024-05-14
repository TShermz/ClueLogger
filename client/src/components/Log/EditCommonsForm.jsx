import "./ClueLog.css";
import { useSelector, useDispatch } from "react-redux";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { myLogsActions } from "../../store/slices/myLogsSlice";
import { getCommons, updateCommons } from "../../util/log";

import ClueItem from "./ClueItem";
import ErrorBlock from "../UI/ErrorBlock";

export default function EditCommonsForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedLog = useSelector((state) => state.myLogs.currentLogFilter);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["myCommons", selectedLog],
    queryFn: ({ signal }) => getCommons({ signal, selectedLogName: selectedLog }),
  });

  const { mutate } = useMutation({
    mutationFn: updateCommons,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myCommons", selectedLog] });
    },
  });

  function handleEditing() {
    dispatch(myLogsActions.toggleEdit());
    navigate('/mylogs');
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const updatedCommons = Object.fromEntries(formData);
    
    mutate({updatedCommons, selectedLog});
    dispatch(myLogsActions.toggleEdit());
    navigate('/mylogs');
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
