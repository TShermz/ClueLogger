import "./ClueItem.css";
import { useSelector } from "react-redux";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useDispatch } from "react-redux";
import {createPortal} from 'react-dom';

import { clueLogActions } from "../../store/slices/clueLogSlice";

export default function ClueItem({ name, value, isBroadcasts, isForm }) {
  const dispatch = useDispatch();

  if (name === "createdAt" || name === "updatedAt") {
    return;
  }

  const selectedLog = useSelector((state) => state.clueLog.currentLogFilter);
  const isEditing = useSelector((state) => state.clueLog.isEditing);
  const selectedBroadcast = useSelector((state) => state.clueLog.selectedBroadcast);

  const displayName = name.replaceAll("_", " ");
  const imageLink = isBroadcasts
    ? `/hidden/broadcast/${name}.png`
    : `/hidden/${selectedLog}/${name}.png`;
  const hasNoValue = value == 0 || value == null;

  const imageClass = hasNoValue && !isEditing ? "shade" : "";
  let clueItemClasses = isEditing ? "clue-item editing" : "clue-item";
  clueItemClasses = isForm && selectedBroadcast === name ? clueItemClasses + " selected-broadcast" : clueItemClasses;

  function handleSelectImage(broadcast) {
    dispatch(clueLogActions.selectBroadcast({ broadcast }));
  }
  
  return (
    <>
      <OverlayTrigger
        key={displayName}
        placement="top"
        overlay={<Tooltip id="tooltip-top">{displayName}</Tooltip>}
      >
        <div className={clueItemClasses} onClick={isForm ? () => handleSelectImage(name) : undefined}>
          {!isEditing && (
            <div className="item-count">{hasNoValue ? "" : value}</div>
          )}
          {isEditing && (
            <input
              id={displayName}
              className="commonInput"
              type="number"
              min="0"
              max="65500"
              name={name}
              defaultValue={value}
              placeholder="0"
            />)
          }
          <img src={imageLink} alt={displayName} className={imageClass} />
        </div>
      </OverlayTrigger>
    </>
  );
}
