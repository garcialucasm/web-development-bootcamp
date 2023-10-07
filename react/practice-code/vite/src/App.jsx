import "./App.css";
import * as Calculator from "./calculator";

const randomNum = Math.floor(Math.random() * 10);
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const customStyle = {
  color: "gray",
  fontSize: "10px",
};

function App() {
  const text = (
    <div>
      <div>Random Number 1: {randomNum} </div> <div>Random Number 2: {randomNum} </div>
      <div style={customStyle}>Inline styling with variable {currentYear} </div>
      <div>
        <div>
          <div>
            <div>Testing functions:</div>
            <div>1 + 2 = {Calculator.add(1, 2)}</div>
            <div>1 + 2 = {Calculator.subtract(1, 2)}</div>
            <div>1 + 2 = {Calculator.multiply(1, 2)}</div>
            <div>1 + 2 = {Calculator.divide(1, 2)}</div>
          </div>
        </div>
      </div>
    </div>
  );

  return text;
}

export default App;
