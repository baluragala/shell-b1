import { GET_USERS, GET_USERS_SUCCESS } from "../actionTypes/user";

export default function userReducer(
  state = { users: [], isLoading: false },
  action
) {
  switch (action.type) {
    case GET_USERS:
      return { ...state, isLoading: true };
    case GET_USERS_SUCCESS:
      return { ...state, isLoading: false, users: action.users };
    default:
      return state;
  }
}
