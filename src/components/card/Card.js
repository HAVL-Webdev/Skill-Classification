import "./style.css";

function Card(props) {
  return (
    <div onClick={() => props.cardClickHandler(props.id)}>
      <p className="card">{props.title}</p>
    </div>
  );
}

export default Card;
