import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Note from "./components/Note.jsx";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Header />
    <App />
    <Note />
    <Footer />
  </React.StrictMode>
)
