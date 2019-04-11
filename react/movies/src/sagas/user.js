import { put } from "redux-saga/effects";
import { getUsersSuccess, getUsersFailure } from "../actionCreators/user";
export function* getUsers() {
  try {
    const response = yield fetch("https://randomuser.me/api/?results=10").then(
      r => r.json()
    );
    yield put(getUsersSuccess(response.results));
  } catch (err) {
    yield put(getUsersFailure(err));
  }
}
