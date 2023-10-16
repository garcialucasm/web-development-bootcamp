import PropTypes from "prop-types";
import "./button.css";
import { useState } from "react";

function Button(props) {
  const [count, setCount] = useState(0);
  const [isMouseOver, setButton] = useState(false);

  function increaseValue() {
    // alert("You clicked me!");
    setCount(count + 1);
  }
  function decreaseValue() {
    // alert("You clicked me!");
    setCount(count - 1);
  }
  function handleMouseOver() {
    console.log("mouse over");
    setButton(true);
  }
  function handleMouseOut() {
    console.log("mouse out");
    setButton(false);
  }

  return (
    <div className="vote-container">
      {/* <a href={props.buttonURL}> */}
      <button style={{backgroundColor: isMouseOver ? "gray" : "black"}}
        onClick={increaseValue}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {props.buttonText}
      </button>
      <button onClick={decreaseValue}>{"Remove Vote"}</button>
      <div className="total-votes">Total: {count} Votes</div>
      {/* </a> */}
    </div>
  );
}

// Define the expected prop types
Button.propTypes = {
  buttonText: PropTypes.string,
};

export default Button;
