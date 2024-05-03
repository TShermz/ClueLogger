import './MyBroadcasts.css';
import ClueLogButtons from "../Log/ClueLogButtons";
import EnhancedTable from "../UI/Table";

export default function MyBroadcasts() {
  const filterNames = [
    "hard",
    "elite",
    "master",
  ];
  return (
    <>
      <ClueLogButtons className="tier-filter" buttons={filterNames} filterType="broadcast" />
      <EnhancedTable />
    </>
  );
}
