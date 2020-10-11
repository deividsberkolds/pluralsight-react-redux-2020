import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import authorReducer from "./authorReducer";

const rootReducer = combineReducers({
  courseReducer,
  authorReducer,
});

export default rootReducer;
