import './ClueItem.css';
import { useSelector } from 'react-redux';

export default function ClueItem({ name, value }) {
  if(name === 'createdAt'){
    return (
      <p>Created At: {value}</p>
    );
  };
  if(name === 'updatedAt'){
    return (
      <p>Updated At: {value}</p>
    );
  };

  const selectedLog = useSelector(state => state.clueLog.currentTier);
  const displayName = name.replaceAll("_", " ");
  const imageLink = `/hidden/${selectedLog}/${name}.png`

  return (
    <div className="clue-item">
      <div className="item-count">{value}</div>
      <img src={imageLink} alt={displayName} />
    </div>
  );
}
