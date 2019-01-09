import React from "react";
import ReactDOM from "react-dom";

import Hand from "./Hand";
import Clock from "./Clock";

import "./styles.css";

function App() {
  return (
    <Clock>
      {" "}
      <Hand />
    </Clock>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
