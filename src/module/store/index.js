import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSaga from "redux-saga";
import rootReducer from "../reducer";
import rootSaga from "../saga";

const saga = createSaga();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(saga))
);

saga.run(rootSaga);

export default store;
