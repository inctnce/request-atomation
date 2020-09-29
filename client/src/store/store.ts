import {
  applyMiddleware,
  CombinedState,
  combineReducers,
  createStore,
  Store,
} from "redux";

import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import StateT from "../types/StateT";
import ActionI from "../interfaces/Action";

import reducer from "./reducer";

import watchGetProducts from "./sagas/getProducts";
import watchLogin from "./sagas/login";
import watchGetCategories from "./sagas/getCategories";
import watchPostCategory from "./sagas/postCategory";
import watchPostProduct from "./sagas/postProduct";
import watchDelCategory from "./sagas/delCategory";
import watchDelProduct from "./sagas/delProduct";

const reducers = combineReducers({
  app: reducer,
});

const saga = createSagaMiddleware();

let store: Store<
  CombinedState<{
    app: StateT;
  }>,
  ActionI
> = createStore(reducers, applyMiddleware(logger, saga));

saga.run(watchLogin);
saga.run(watchGetCategories);
saga.run(watchGetProducts);
saga.run(watchPostCategory);
saga.run(watchPostProduct);
saga.run(watchDelCategory);
saga.run(watchDelProduct);

export default store;
