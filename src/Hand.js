import React, { Component } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

const StyledHand = styled.div`
  width: ${props => (props.length ? props.length + "%" : "50%")};
  height: 6px;
  background: black;
  position: absolute;
  top: 50%;
  left: ${props => (50 - parseInt(props.length, 10)).toString() + "%" || "50%"};
  transform-origin: 100%;
  transform: rotate(90deg);
  transition: all 0.5s;
  transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
`;
class Hand extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getSeconds = this.getSeconds.bind(this);
    this.getMinutes = this.getMinutes.bind(this);
    this.getHours = this.getHours.bind(this);
    this.setHandPosition = this.setHandPosition.bind(this);
  }
  componentDidMount() {
    setInterval(this.setHandPosition, 1000);
    this.setHandPosition();
  }
  setHandPosition() {
    const now = new Date();
    if (this.props.second) {
      this.getSeconds(now);
    } else if (this.props.minute) {
      this.getMinutes(now);
    } else {
      this.getHours(now);
    }
  }
  getSeconds(t) {
    const hand = ReactDOM.findDOMNode(this);
    const seconds = t.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;
    hand.style.transform = `rotate(${secondsDegrees}deg)`;
  }

  getMinutes(t) {
    const hand = ReactDOM.findDOMNode(this);
    const mins = t.getMinutes();
    const minsDegrees = (mins / 60) * 360 + (t.getSeconds() / 60) * 6 + 90;
    hand.style.transform = `rotate(${minsDegrees}deg)`;
  }

  getHours(t) {
    const hand = ReactDOM.findDOMNode(this);
    const hour = t.getHours();
    const hourDegrees = (hour / 12) * 360 + (t.getMinutes() / 60) * 30 + 90;
    hand.style.transform = `rotate(${hourDegrees}deg)`;
  }
  render() {
    return <StyledHand length={this.props.length} />;
  }
}

export default Hand;
