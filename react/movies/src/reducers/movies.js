import {
  GET_MOVIES,
  GET_MOVIES_SUCCESS,
  CHANGE_TITLE,
  CHANGE_POSTER,
  ADD_MOVIE,
  ADD_MOVIE_SUCCESS
} from "../actionTypes/movies";
import { fromJS } from "immutable";

export default function movieReducer(
  state = fromJS({ movies: [], isLoading: false, Title: "Sully", Poster: "" }),
  action
) {
  switch (action.type) {
    case GET_MOVIES:
    case ADD_MOVIE:
      let newState = state.set("isLoading", true);
      return newState;
    case GET_MOVIES_SUCCESS:
      return state.set("isLoading", false).set("movies", fromJS(action.movies));
    case CHANGE_TITLE:
      return state.set("Title", action.Title);
    case CHANGE_POSTER:
      return state.set("Poster", action.Poster);
    case ADD_MOVIE_SUCCESS:
      return state.withMutations(function(state) {
        state
          .set("isLoading", false)
          .set("movie", fromJS(action.movie))
          .set("Title", "")
          .set("Poster", "");
      });

    default:
      return state;
  }
}
