import './Card.css';
const Card = (props) => {
  let myClass = 'Card ' + props.className;
  return (
    <div className={myClass}>
      {props.children}
    </div>
  );
};

export default Card;
