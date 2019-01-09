import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div style={{ backgroundColor: "red" }}>{this.props.children}</div>;
  }
}

export default Clock;
