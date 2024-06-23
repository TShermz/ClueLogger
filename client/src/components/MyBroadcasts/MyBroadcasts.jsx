import "./MyBroadcasts.css";
import { useQuery } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
import FilterTierButtons from "../UI/FilterTierButtons";
import EnhancedTable from "../UI/Table";
import BroadcastForm from "../BroadcastForm/BroadcastForm";
import { Button } from "react-bootstrap";
import { getSession } from "../../util/auth";
import { getDetailedBroadcast, getDetailedBroadcasts } from "../../util/broadcasts";
import { MyBroadcastsTableHeaders } from "../../util/constants";
import { broadcastFormActions } from "../../store/slices/broadcastFormSlice";

const filterNames = ["all", "hard", "elite", "master"];

export default function MyBroadcasts() {
  const dispatch = useDispatch();
  const selectedLog = useSelector(
    (state) => state.myBroadcasts.myBroadcastsFilter
  );

  const {
    data: sessionData,
    isLoading: sessionIsLoading,
    isError: sessionIsError,
    error: sessionError,
  } = useQuery({
    queryKey: ["session"],
    queryFn: getSession,
  });

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["myBroadcasts", sessionData.username, selectedLog],
    queryFn: () =>
      getDetailedBroadcasts({
        selectedLogName: selectedLog,
        username: sessionData.username,
      }),
  });

  function handleShowModal() {
    dispatch(
      broadcastFormActions.filterBroadcastForm({ filterValue: selectedLog })
    );
    dispatch(broadcastFormActions.toggleModal());
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
      <>
        <FilterTierButtons
          className="tier-filter"
          buttons={filterNames}
          filterType="myBroadcasts"
        />
        <Button id="add-broadcast" onClick={handleShowModal}>
          Add Broadcast
        </Button>

        <EnhancedTable
          headCells={MyBroadcastsTableHeaders}
          detailedBroadcasts={data}
        />
        <BroadcastForm />
      </>
    );
  }

  return content;
}
