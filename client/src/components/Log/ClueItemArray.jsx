import ClueItem from "./ClueItem";
import { useSelector } from "react-redux";

export default function ClueItemArray({ items, inputData, hasBroadcasts, isForm }) {
  const selectedBroadcast = useSelector((state) => state.broadcastForm.selectedBroadcast);

  return (
    <div className="clue-log">
      {Object.keys(items).map((key) => (
          <ClueItem
            key={key}
            name={key}
            value={items[key]}
            selectedBroadcast={selectedBroadcast}
            isBroadcasts={hasBroadcasts}
            isForm={isForm}
          />
      ))}
    </div>
  );
}
