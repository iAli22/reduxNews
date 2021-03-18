import { combineReducers } from "redux";
import newsReducer from "./newsReducer";
import modelReducer from "./modelReducer";

export default combineReducers({
  news: newsReducer,
  model: modelReducer,
});
