import React, { Component } from "react";
import { connect } from "react-redux";
import {
  changeTitleActionCreator,
  changePosterActionCreator,
  addMovieActionCreator
} from "../actionCreators/movies";

class ManageMovie extends Component {
  constructor() {
    super();
    this.yearRef = React.createRef();
    this.divRef = React.createRef();
  }

  handleChange = e => {
    this.props.dispatch(changeTitleActionCreator(e.target.value));
  };

  handlePosterChange = e => {
    this.props.dispatch(changePosterActionCreator(e.target.value));
  };

  componentDidMount = () => {
    console.log(this.divRef);
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.dispatch(
      addMovieActionCreator({
        Title: this.props.Title,
        Poster: this.props.Poster
      })
    );
  };

  render() {
    return (
      <div ref={this.divRef}>
        {this.props.isLoading && <p>Saving...</p>}
        {this.props.movie && <p>Last saved id:{this.props.movie.id}</p>}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={this.props.Title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Year:</label>
            <input type="text" ref={this.yearRef} />
          </div>
          <div>
            <label>Poster:</label>
            <input
              type="text"
              value={this.props.Poster}
              onChange={this.handlePosterChange}
            />
          </div>
          <button onClick={() => alert(this.yearRef.current.value)}>Get</button>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    Title: state.movieState.Title,
    Poster: state.movieState.Poster,
    isLoading: state.movieState.isLoading,
    movie: state.movieState.movie
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(ManageMovie);
