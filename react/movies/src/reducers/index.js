import counterReducer from "./counter";
import timeReducer from "./timer";
import movieReducer from "./movies";
import { combineReducers } from "redux";
import userReducer from "./user";

const rootReducer = combineReducers({
  counterState: counterReducer,
  timerState: timeReducer,
  movieState: movieReducer,
  userState: userReducer
});

export default rootReducer;
