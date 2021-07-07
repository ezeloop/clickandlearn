import {
  SHOW_ALERT,
  HIDE_ALERT,
  START_LOADING,
  FINISH_LOADING,
} from "../types/types";

const initialState = {
  loading: false,
  msgError: null,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        msgError: action.payload,
      };

    case HIDE_ALERT:
      return {
        ...state,
        msgError: null,
      };

    case START_LOADING:
      return {
        ...state,
        loading: true,
      };

    case FINISH_LOADING:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
