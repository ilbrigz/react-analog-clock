import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import Hand from "./Hand";
import Clock from "./Clock";

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(https://images.unsplash.com/photo-1546887168-471392adde09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80);
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

import "./styles.css";

function App() {
  return (
    <StyledWrapper>
      <Clock>
        {" "}
        <Hand second length="40" />
        <Hand minute length="40" />
        <Hand hour length="30" />
      </Clock>
    </StyledWrapper>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
