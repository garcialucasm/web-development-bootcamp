import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AppCards from "./components/Cards/App.jsx"
import TestNameImported from "./TestNameFile.jsx";
import Footer from "./footer.jsx";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <React.StrictMode>
    <h1>React - Test Page</h1>
    <App />
    <AppCards />
    <TestNameImported />
    <Footer />
  </React.StrictMode>
);
