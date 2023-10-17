import { useState } from "react";

function FormSpreadOperator() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      // prevValue -> Ao iniciar { fName: '', lName: '', email: ''}
      // prevValue -> ao digitar algo
      // {
      // fName: 'o que está digitado',
      // lName: 'o que está digitado',
      // email: 'o que está digitado'
      // }
      console.log(prevValue);
      return {
        // return -> recebe o prepValue atual { fName: '', lName: '', email: ''}
        // e atualiza apenas a chave [name] com o valor [value] do event.target que chamou a função handleChange
        // neste caso, algum dos três inputs
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="container">
      {" "}
      <h4>Spread Operator</h4>
      <h2>
        Hello {contact.fName} {contact.lName}
      </h2>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
      </form>
    </div>
  );
}

export default FormSpreadOperator;
