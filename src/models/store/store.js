import { createEpicMiddleware } from 'redux-observable';

import { createStore, applyMiddleware, compose } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { rootReducer } from '../rootReducer';
import { rootEpic } from '../rootEpic';

const epicMiddleware = createEpicMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(epicMiddleware)),
);

epicMiddleware.run(rootEpic);
