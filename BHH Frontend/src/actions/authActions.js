import { SET_USERNAME, SET_SESSION } from "./actionTypes.js";

export const setUsername = (username) => {
  return { type: SET_USERNAME, payload: { username } };
};

export const setSession = ({ userID, username, password }) => {
  return { type: SET_SESSION, payload: { userID, username, password } };
};
