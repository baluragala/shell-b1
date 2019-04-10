import { INC, DEC } from "../actionTypes/counter";

export function incActionCreator(by) {
  return {
    type: INC,
    by
  };
}

export function decActionCreator(by) {
  return {
    type: DEC,
    by
  };
}
