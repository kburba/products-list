import { applyMiddleware, compose, createStore, StoreEnhancer } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { createBrowserHistory, History } from 'history';
import loggerMiddleware from './middleware/logger';
import monitorReducerEnhancer from './monitorReducer';
import sagas from './sagas/root.saga';
import createRootReducer from './reducers';

export const history: History = createBrowserHistory();
const rootReducer = createRootReducer(history);

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const middlewares = [loggerMiddleware, sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducerEnhancer];
  const composeEnhancers =
    (window as Window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const composedEnhancers: StoreEnhancer = composeEnhancers(...enhancers);

  const store = createStore(rootReducer, undefined, composedEnhancers);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
  }

  sagaMiddleware.run(sagas);

  return store;
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

export type RootState = ReturnType<typeof rootReducer>;
