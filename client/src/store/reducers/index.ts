import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import articlesReducer from './articles.reducer';

const createRootReducer = (history: History) =>
  combineReducers({
    articlesReducer,
    router: connectRouter(history),
  });

export default createRootReducer;
