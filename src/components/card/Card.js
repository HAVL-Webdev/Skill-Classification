import "./style.css";

function Card(props) {
  return (
    <div>
      <p className='card'>
        {props.title} 
      </p>   
    </div>
  );
}

export default Card;
