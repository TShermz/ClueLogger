import "./MyBroadcasts.css";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import FilterTierButtons from "../UI/FilterTierButtons";
import EnhancedTable from "../UI/Table";
import { getSession } from "../../util/auth";
import { getDetailedBroadcasts } from "../../util/broadcasts";

const filterNames = ["all", "hard", "elite", "master"];

const tableHeaders = [
  {
    id: "dateReceived",
    numeric: false,
    disablePadding: false,
    label: "Date Received",
  },
  {
    id: "tier",
    numeric: false,
    disablePadding: false,
    label: "Tier",
  },
  {
    id: "image",
    numeric: false,
    disablePadding: true,
    label: ""
  },
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Name",
  },
  {
    id: "broadcastCount",
    numeric: true,
    disablePadding: true,
    label: "Broadcast #",
  },
  {
    id: "clueCount",
    numeric: true,
    disablePadding: false,
    label: "Clue #",
  },
  {
    id: "buttons",
    numeric: true,
    disablePadding: false,
    label: "",
  },
];

export default function MyBroadcasts() {
  const selectedLog = useSelector((state) => state.myBroadcasts.myBroadcastsFilter);

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
    queryKey: ["detailedBroadcasts", selectedLog, sessionData.username],
    queryFn: () => getDetailedBroadcasts({ selectedLogName: selectedLog, username: sessionData.username }),
  });

  let content;

  if(isLoading) {
    content = (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if(isError){
    content = (
      <div>
        <ErrorBlock
          title="Failed to load message."
          message={error.info?.message || "Error when fetching data."}
        />
      </div>
    );
  }

  if(data){
    content = (
      <EnhancedTable headCells={tableHeaders} detailedBroadcasts={data}/>
    )
  }

  return (
    <>
      <FilterTierButtons
        className="tier-filter"
        buttons={filterNames}
        filterType="myBroadcasts"
      />
      {content}
    </>
  );
}
