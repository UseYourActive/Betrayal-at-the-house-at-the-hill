import { SET_USERNAME, SET_SESSION } from "../actions/actionTypes.js";

const initialState = {
  isLogged: localStorage.length === 0 ? false : true,
  userID: "",
  username: JSON.parse(localStorage.getItem("userData")).username,
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
      };

    default:
      return state;
  }
};

export default authReducer;
