import {
  GET_MOVIES,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  CHANGE_TITLE,
  CHANGE_POSTER,
  ADD_MOVIE,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_FAILURE
} from "../actionTypes/movies";

export function getMoviesActionCreator() {
  return { type: GET_MOVIES };
}

export function getMoviesSuccessActionCreator(movies) {
  return {
    type: GET_MOVIES_SUCCESS,
    movies
  };
}

export function getMoviesFailureActionCreator(error) {
  return {
    type: GET_MOVIES_FAILURE,
    error
  };
}

export function changeTitleActionCreator(Title) {
  return {
    type: CHANGE_TITLE,
    Title
  };
}

export function changePosterActionCreator(Poster) {
  return {
    type: CHANGE_POSTER,
    Poster
  };
}

export function addMovieActionCreator(movie) {
  return {
    type: ADD_MOVIE,
    movie
  };
}

export function addMovieSuccessActionCreator(movie) {
  return {
    type: ADD_MOVIE_SUCCESS,
    movie
  };
}

export function addMovieFailureActionCreator(error) {
  return {
    type: ADD_MOVIE_FAILURE,
    error
  };
}
