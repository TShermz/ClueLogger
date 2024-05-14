import './MyBroadcasts.css';
import {useQuery} from '@tanstack/react-query';
import FilterTierButtons from "../UI/FilterTierButtons";
import EnhancedTable from "../UI/Table";

export default function MyBroadcasts() {
  const filterNames = [
    "hard",
    "elite",
    "master",
  ];
  return (
    <>
      <FilterTierButtons className="tier-filter" buttons={filterNames} filterType="broadcast" />
      <EnhancedTable />
    </>
  );
}
