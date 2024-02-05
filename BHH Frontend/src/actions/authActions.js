import { LOG_USER, LOGOUT_USER, SET_USERNAME } from "./actionTypes.js";

export const logUser = () => {
  return { type: LOG_USER };
};

export const logOutUser = () => {
  return { type: LOGOUT_USER };
};

export const setUsername = (name, user_id) => {
  return { type: SET_USERNAME, payload: { name, user_id } };
};
