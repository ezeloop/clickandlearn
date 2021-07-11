import {
  SHOW_ALERT,
  HIDE_ALERT,
  START_LOADING,
  FINISH_LOADING,
  SET_COLORS
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

export const setColors = (colors) => ({
  type: SET_COLORS,
  payload: colors
})


