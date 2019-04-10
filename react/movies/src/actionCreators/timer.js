import { GET_DATE, GET_TIME } from "../actionTypes/timer";

export function getDateActionCreator() {
  return { type: GET_DATE };
}

export function getTimeActionCreator() {
  return { type: GET_TIME };
}
