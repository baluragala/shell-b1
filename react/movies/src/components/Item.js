import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Item(props) {
  const { Title, Year, Poster, imdbID } = props.movie;
  return (
    <Link to={`/movies/${imdbID}`}>
      <div className="grid-item" onClick={() => props.onSelect(Title)}>
        <img src={Poster} alt="movie image" />
        <h3>{Title}</h3>
        <pre>{Year}</pre>
      </div>
    </Link>
  );
}

Item.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired
  }),
  onSelect: PropTypes.func.isRequired
};

Item.defaultProps = {
  onSelect: function() {
    alert("not implemented");
  }
};
