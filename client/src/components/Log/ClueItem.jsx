import "./ClueItem.css";
import { useSelector } from "react-redux";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export default function ClueItem({ name, value }) {
  if (name === "createdAt" || name === "updatedAt") {
    return;
  }
  // const {value};

  const selectedLog = useSelector((state) => state.clueLog.currentTier);
  const isEditing = useSelector((state) => state.clueLog.isEditing);
  const displayName = name.replaceAll("_", " ");
  const imageLink = `/hidden/${selectedLog}/${name}.png`;
  const hasNoValue = value == 0 || value == null;

  const imageClass = hasNoValue && !isEditing ? 'shade' : '';
  const clueItemClasses = isEditing ? 'clue-item editing' : 'clue-item';

  return (
    <>
      <OverlayTrigger
        key={displayName}
        placement="top"
        overlay={<Tooltip id="tooltip-top">{displayName}</Tooltip>}
      >
        <div className={clueItemClasses}>
          {!isEditing && <div className="item-count">{hasNoValue ? '' : value}</div>}
          {isEditing && <input id={displayName} className='commonInput' type="number" min="0" max="65500" name={name} defaultValue={value} placeholder='0'/>}
          <img src={imageLink} alt={displayName} className={imageClass}/>
        </div>
      </OverlayTrigger>
    </>
  );
}
