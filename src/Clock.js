import React, { Component } from "react";
import styled from "styled-components";

const StyledCLock = styled.div`
  width: 300px;
  height: 300px;
  background-color: #ffffff;
  border: 20px solid #3a2201;
  border-radius: 50%;
  position: relative;
  box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1), inset 0 0 0 3px #efefef,
    inset 0 0 10px black, 0 0 10px rgba(0, 0, 0, 0.2);
`;
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <StyledCLock>{this.props.children}</StyledCLock>;
  }
}

export default Clock;
