import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { uiReducer } from "./uiReducer";
import { categoryReducer } from "./category";
import { resultReducer } from "./result";

export default combineReducers({
  ui: uiReducer,
  auth: authReducer,
  category: categoryReducer,
  result: resultReducer

});
