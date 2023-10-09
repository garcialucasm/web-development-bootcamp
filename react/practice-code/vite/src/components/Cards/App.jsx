import Cards from "./Cards";
import contacts from "../../contacts";
import "./cards.css";

function createCard(contact) {
  return (
    <Cards
      id={contact.key}
      key={contact.key}
      name={contact.name}
      img={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
      buttonText={contact.buttonText + contact.name}
    />
  );
}

function App() {
  return <div>{contacts.map(createCard)}</div>;
}

export default App;
