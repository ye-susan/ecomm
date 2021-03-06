import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReduceer from './root-reducer';

const middlewares = [
  logger
];

export const store = createStore(rootReduceer, applyMiddleware(...middlewares));
export const persistor = persistStore(store); //persisted version of store