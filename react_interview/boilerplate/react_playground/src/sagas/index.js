import { combineReducers } from "redux";
import testReducer from "./testSaga";
// Import other reducers

const rootReducer = combineReducers({
  // your reducer function names will be the keys
  testReducer,
  // other reducers...
});

export default rootReducer;
