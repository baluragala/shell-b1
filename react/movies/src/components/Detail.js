import React, { Component } from "react";

class Detail extends Component {
  componentDidMount() {
    //document.body.scrollTop = 0;
  }

  back = () => this.props.history.goBack();

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Detail {this.props.match.params.id}</h1>
        <button onClick={() => this.props.history.push("/movies")}>
          movies
        </button>
        <button onClick={this.back}>go back</button>
      </div>
    );
  }
}

export default Detail;
