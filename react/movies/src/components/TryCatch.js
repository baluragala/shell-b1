import React, { Component } from "react";

export default class TryCatch extends Component {
  constructor() {
    super();
    this.state = { isErrored: false };
  }
  componentDidCatch(error, info) {
    this.setState({ isErrored: true });
  }

  render() {
    return (
      <div>
        {this.state.isErrored ? <h1>Error Occurred</h1> : this.props.children}
      </div>
    );
  }
}
