import { put } from "redux-saga/effects";
import {
  getMoviesSuccessActionCreator,
  getMoviesFailureActionCreator,
  addMovieSuccessActionCreator,
  addMovieFailureActionCreator
} from "../actionCreators/movies";

export function* getMovies() {
  try {
    const movies = yield fetch("http://localhost:4000/movies").then(r =>
      r.json()
    );
    yield put(getMoviesSuccessActionCreator(movies));
  } catch (error) {
    yield put(getMoviesFailureActionCreator(error));
  }
}

export function* addMovie(action) {
  console.log("addMovie");
  try {
    const movie = yield fetch("http://localhost:4000/movies", {
      method: "POST",
      body: JSON.stringify(action.movie),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(r => r.json());
    yield put(addMovieSuccessActionCreator(movie));
  } catch (error) {
    yield put(addMovieFailureActionCreator(error));
  }
}
