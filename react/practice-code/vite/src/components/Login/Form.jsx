import PropTypes from "prop-types";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!props.isRegistered && (
        <input type="password" placeholder="Confirm Password" />
      )}

      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

// Define the expected prop types
Form.propTypes = {
  isRegistered: PropTypes.bool, // Assuming 'isRegistered' is a boolean prop
};

export default Form;
