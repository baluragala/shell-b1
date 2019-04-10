import {
  GET_MOVIES,
  GET_MOVIES_SUCCESS,
  CHANGE_TITLE,
  CHANGE_POSTER,
  ADD_MOVIE,
  ADD_MOVIE_SUCCESS
} from "../actionTypes/movies";

export default function movieReducer(
  state = { movies: [], isLoading: false, Title: "Sully", Poster: "" },
  action
) {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, isLoading: true };
    case GET_MOVIES_SUCCESS:
      return { ...state, isLoading: false, movies: action.movies };
    case CHANGE_TITLE:
      return { ...state, Title: action.Title };
    case CHANGE_POSTER:
      return { ...state, Poster: action.Poster };
    case ADD_MOVIE:
      return { ...state, isLoading: true };
    case ADD_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movie: action.movie,
        Title: "",
        Poster: ""
      };
    default:
      return state;
  }
}
