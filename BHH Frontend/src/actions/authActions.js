import { SET_USERNAME, SET_SESSION, CLEAR_SESSION } from "./actionTypes.js";

export const setUsername = (username) => {
  return { type: SET_USERNAME, payload: { username } };
};

export const setSession = ({ id, username, jwt }) => {
  return { type: SET_SESSION, payload: { id, username, jwt } };
};

export const clearSession = () => {
  return { type: CLEAR_SESSION };
};
