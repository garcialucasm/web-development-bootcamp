import { useState } from "react";

function FormFullName() {
  // Creating an useState for the input Username that is linked to the input value
  // So, in this way, the form will send the same value in the state
  const [fullName, setFullName] = useState({ fName: "", lName: "" });

  function handleChange(event) {
    const { value, name } = event.target;
    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
        };
      }
    });
  }

  return (
    <form className="form">
      <h4>Updating Full Name</h4>
      <h2>Hello: {fullName.fName + " " + fullName.lName}</h2>
      <input
        name="fName"
        onChange={handleChange}
        type="text"
        placeholder="First Name"
        value={fullName.fName}
      />
      <input
        name="lName"
        onChange={handleChange}
        type="text"
        placeholder="Last Name"
        value={fullName.lName}
      />
    </form>
  );
}

export default FormFullName;
