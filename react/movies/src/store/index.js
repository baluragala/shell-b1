import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import reduxLogger from "redux-logger";
import sagaWatcher from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, reduxLogger)
);

sagaMiddleware.run(sagaWatcher);

export default store;
