import "./button.css";
import { useState } from "react";

function Button(props) {
  function handleClick() {
    // alert("You clicked me!");
    setCount(count + 1);
  }
  const [count, setCount] = useState(0);
  return (
    <div className="vote-container">
      {/* <a href={props.buttonURL}> */}
        <button onClick={handleClick}>{props.buttonText}</button>
        <div className="total-votes">Total: {count} Votes</div>
      {/* </a> */}
    </div>
  );
}
export default Button;
