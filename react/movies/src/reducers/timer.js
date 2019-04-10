import { GET_DATE, GET_TIME } from "../actionTypes/timer";

export default function timeReducer(state = { date: "", time: "" }, action) {
  switch (action.type) {
    case GET_DATE:
      return { ...state, date: new Date().toDateString() };
    case GET_TIME:
      return { ...state, time: new Date().toTimeString() };
    default:
      return state;
  }
}
