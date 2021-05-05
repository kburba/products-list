import { combineReducers } from 'redux';
import articlesReducer from './articles.reducer';

const RootReducer = combineReducers({
  articlesReducer,
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;
