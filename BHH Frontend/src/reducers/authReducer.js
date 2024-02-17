import {
  SET_USERNAME,
  SET_SESSION,
  CLEAR_SESSION,
} from "../actions/actionTypes.js";

const initialState = {
  userID: "",
  username: "",
  jwt: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload.username,
      };
    case SET_SESSION:
      return {
        ...state,
        username: action.payload.username,
        userID: action.payload.userID,
        jwt: action.payload.jwt,
      };

    case CLEAR_SESSION:
      localStorage.clear();
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default authReducer;
