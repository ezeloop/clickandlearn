import {
  SHOW_ALERT,
  HIDE_ALERT,
  START_LOADING,
  FINISH_LOADING,
} from "../types/types";

export const setError = (err) => ({
  type: SHOW_ALERT,
  payload: err,
});

export const removeError = () => ({
  type: HIDE_ALERT,
});

export const uiStartLoading = () => ({
  type: START_LOADING,
});

export const uiFinishLoading = () => ({
  type: FINISH_LOADING,
});
