import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_UNSUCCESS,
  LOGIN_SYSTEM_ERROR,
  AUTH_LOADING,
  LOGOUT,
  COOKIE_CHECKED
} from "../actions/types";

const INITIAL_STATE = { username: "", error: "" };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return { ...INITIAL_STATE, username: action.payload.username };
    case USER_LOGIN_UNSUCCESS:
      return { ...INITIAL_STATE, error: action.payload };
    case LOGIN_SYSTEM_ERROR:
      return { ...INITIAL_STATE, error: action.payload };
    default:
      return state;
  }
};
