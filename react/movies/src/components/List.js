import React, { Component } from "react";
import Item from "./Item";
import { connect } from "react-redux";
import { getMoviesActionCreator } from "../actionCreators/movies";

class List extends Component {
  constructor() {
    super();
  }

  async componentDidMount() {
    this.props.dispatch(getMoviesActionCreator());
  }

  changeTitle = title => {
    this.setState({ selectedTitle: title });
  };

  render() {
    return (
      <div>
        <h2>Movie List</h2>

        {/* <p>Selected Title:{this.state.selectedTitle}</p> */}
        {this.props.isLoading && <p>Loading...</p>}
        <div className="grid-container">
          {this.props.movies.map(movie => (
            <Item movie={movie} onSelect={this.changeTitle} key={movie.Title} />
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.movieState.get("isLoading"),
    movies: state.movieState.get("movies").toJS()
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(List);
