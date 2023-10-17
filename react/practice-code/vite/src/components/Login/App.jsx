import Form from "./Form";
import FormFullName from "./FormFullName";
import FormNameEmail from "./FormNameEmail";
import FormSpreadOperator from "./FormSpreadOperator";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
      <FormFullName />
      <FormNameEmail />
      <FormSpreadOperator />
    </div>
  );
}

export default App;
