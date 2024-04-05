import './ClueItem.css';
import generalJSON from "../../data/general.json";

export default function ClueItem({ item }) {
  //would retreive data from SQL
  const userData = generalJSON;
  const name = item.name.replaceAll(" ", "_");

  return (
    <div className="clue-item">
      <div className="item-count">{userData[name]}</div>
      <img src={item.image} alt={item.name} />
    </div>
  );
}
