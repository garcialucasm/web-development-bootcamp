import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AppCards from "./components/Cards/App.jsx";
import TestNameImported from "./TestNameFile.jsx";
import Footer from "./footer.jsx";
import "./index.css";
import Login from "./components/Login/App.jsx";
import Status from "./components/Status/Status.jsx";
import Time from "./components/Time/Time.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <h1>React - Test Page</h1>
    <Login />
    <Status />
    <App />
    <AppCards />
    <TestNameImported />
    <Time />
    <Footer />
  </React.StrictMode>
);
