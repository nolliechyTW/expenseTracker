import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
  // children will be the content between the opening and closing tags of our custom component
};

export default Card;
