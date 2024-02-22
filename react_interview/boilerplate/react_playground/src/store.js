// store.js
import { createStore, combineReducers } from "redux";
import testReducer from "./reducers/testReducer";

const rootReducer = combineReducers({
  // Define a mapping from reducer names to reducers
  testReducer,
  // Add other reducers here
});

const store = createStore(rootReducer);

export default store;
