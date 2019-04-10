import { INC, DEC } from "../actionTypes/counter";

export default function counterReducer(state = { counter: 0 }, action) {
  switch (action.type) {
    case INC:
      return { counter: state.counter + action.by };
    case DEC:
      return { counter: state.counter - action.by };
    default:
      return state;
  }
}
