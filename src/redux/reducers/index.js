import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import authorReducer from "./authorReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courseReducer,
  authorReducer,
  apiCallsInProgress,
});

export default rootReducer;
