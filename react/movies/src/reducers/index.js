import counterReducer from "./counter";
import timeReducer from "./timer";
import movieReducer from "./movies";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counterState: counterReducer,
  timerState: timeReducer,
  movieState: movieReducer
});

export default rootReducer;
