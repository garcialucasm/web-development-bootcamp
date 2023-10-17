import PropTypes from "prop-types";
import { useState } from "react";

function Form(props) {
  // Creating an useState for the input Username that is linked to the input value
  // So, in this way, the form will send the same value in the state
  const [firstName, setFirstName] = useState("");
  const [helloFullName, setNameHello] = useState("");

  function handleChangeFirstName(event) {
    setFirstName(event.target.value);

    // --------------Examples--------------
    //log the event
    console.log(event);
    //log the target = <input type="text" placeholder="Username">
    console.log(event.target);
    //log the type="text"
    console.log(event.target.type);
    //log the placeholder="Username"
    console.log(event.target.placeholder);
    //log the value = "value being typed inside the input box"
    console.log(event.target.value);
    // ------------------------------------
  }

  function handleClick(event) {
    setNameHello(firstName);
    // Prevent default method that will be triggered after this function
    // In this case, it will submit the form and refresh the page, because the button is inside a <form>
    event.preventDefault();
  }
  return (
    <form className="form">
      <h2>Hello {helloFullName}</h2>
      <input
        onChange={handleChangeFirstName}
        type="text"
        placeholder="First Name"
        value={firstName}
      />
      <input type="password" placeholder="Password" />
      {!props.isRegistered && (
        <input type="password" placeholder="Confirm Password" />
      )}
      <button onClick={handleClick}>
        {props.isRegistered ? "Login" : "Register"}
      </button>
    </form>
  );
}

// Define the expected prop types
Form.propTypes = {
  isRegistered: PropTypes.bool, // Assuming 'isRegistered' is a boolean prop
};

export default Form;
