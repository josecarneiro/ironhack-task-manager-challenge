import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'

import createRootReducer from './reducers';

export const history = createBrowserHistory()

const initialState = {};

export const store = createStore(
  createRootReducer(history),
  initialState,
  compose(applyMiddleware(routerMiddleware(history)))
);
