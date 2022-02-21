import classes from "./CalKey.module.css";

const CalKey = (props) => {
  function clickHandler() {
    props.onClick(props.keyVal);
  }
  return (
    <div className={classes.keyStyle} onClick={clickHandler}>
      {props.keyVal}
    </div>
  );
};

export default CalKey;
