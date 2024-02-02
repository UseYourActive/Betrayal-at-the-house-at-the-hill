import { LOGOUT_USER, LOG_USER, SET_USERNAME } from "../actions/actionTypes.js";

const initialState = {
  isLogged: false,
  user: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_USER:
      return {
        ...state,
        isLogged: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isLogged: false,
      };
    case SET_USERNAME:
      return {
        ...state,
        user: action.payload.name,
      };

    default:
      return state;
  }
};

export default authReducer;
