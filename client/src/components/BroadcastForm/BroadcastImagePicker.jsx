import ClueItemArray from "../Log/ClueItemArray";
import "../Log/ClueLog.css";

export default function BroadcastImagePicker({ broadcasts, hasBroadcasts, isForm }) {
  
  return (
    <div className="image-picker">
      <ClueItemArray items={broadcasts} hasBroadcasts={hasBroadcasts} isForm={isForm} />
    </div>
  );
}
