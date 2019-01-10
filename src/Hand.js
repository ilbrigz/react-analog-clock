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
`;
class Hand extends Component {
  constructor(props) {
    super(props);
    this.state = { intervalId: "" };
    this.getSeconds = this.getSeconds.bind(this);
    this.getMinutes = this.getMinutes.bind(this);
    this.getHours = this.getHours.bind(this);
    this.setHandPosition = this.setHandPosition.bind(this);
  }
  componentDidMount() {
    this.setHandPosition();
    var intervalId = setInterval(this.setHandPosition, 1000);
    this.setState({ handPosition: intervalId });
  }

  componentWillUnmount = () => {
    // use intervalId from the state to clear the interval
    clearInterval(this.state.handPosition);
  };

  setHandPosition() {
    const hand = ReactDOM.findDOMNode(this);
    const now = new Date();
    if (this.props.second) {
      this.getSeconds(now, hand);
    } else if (this.props.minute) {
      this.getMinutes(now, hand);
    } else {
      this.getHours(now, hand);
    }
  }
  getSeconds(t, hand) {
    const seconds = t.getSeconds();
    let secondsDegrees = (seconds / 60) * 360 + 90;
    hand.style.transition = "all 0.5s";
    hand.style.transform = `rotate(${secondsDegrees}deg)`;
    if (seconds === 59) {
      secondsDegrees = (seconds / 60) * 360 + 90 - 360;
      setTimeout(() => {
        hand.style.transition = "none";
        hand.style.transform = `rotate(${secondsDegrees}deg)`;
      }, 500);
    }
  }

  getMinutes(t, hand) {
    const mins = t.getMinutes();
    const minsDegrees = (mins / 60) * 360 + (t.getSeconds() / 60) * 6 + 90;
    hand.style.transform = `rotate(${minsDegrees}deg)`;
  }

  getHours(t, hand) {
    const hour = t.getHours();
    const hourDegrees = (hour / 12) * 360 + (t.getMinutes() / 60) * 30 + 90;
    hand.style.transform = `rotate(${hourDegrees}deg)`;
  }
  render() {
    return <StyledHand length={this.props.length} />;
  }
}

export default Hand;
