import { getMovies, addMovie } from "./movies";
import { GET_MOVIES, ADD_MOVIE } from "../actionTypes/movies";
import { takeLatest, all } from "redux-saga/effects";
import { GET_USERS } from "../actionTypes/user";
import { getUsers } from "./user";

export default function* sagaWatcher() {
  yield all([
    takeLatest(GET_MOVIES, getMovies),
    takeLatest(ADD_MOVIE, addMovie),
    takeLatest(GET_USERS, getUsers)
  ]);
}
