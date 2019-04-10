import React, { Component } from "react";

class Clock extends Component {
  constructor() {
    super();
    this.state = { time: new Date().toTimeString() };
    setInterval(() => {
      this.setState({ time: new Date().toTimeString() });
    }, 1000);
  }
  render() {
    console.log("render");
    return <h2>{this.state.time}</h2>;
  }
}

export default Clock;
