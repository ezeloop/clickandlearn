import { LOGIN, LOGOUT } from "../types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        token: action.payload.token,
        isLoggedIn: action.payload.isLoggedIn,
      };

    case LOGOUT:
      return {};

    default:
      return state;
  }
};
