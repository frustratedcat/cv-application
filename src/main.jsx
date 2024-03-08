import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="outer-container">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  </React.StrictMode>,
);
