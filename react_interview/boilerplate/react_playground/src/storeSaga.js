import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./sagas"; // Adjust the import path as necessary
import rootSaga from "./sagas/testSaga"; // Adjust the import path for your sagas

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Enhancers for Redux DevTools, if applicable
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
    // You can add more middleware here
  )
);

// Then run the saga
sagaMiddleware.run(rootSaga);

export default store;
