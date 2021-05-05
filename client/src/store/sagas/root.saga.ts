/** rootSaga.js */
import { all, fork } from 'redux-saga/effects';
import watchArticlesSaga from './articles.saga';

// import watchers from other files
export default function* rootSaga() {
  yield all([fork(watchArticlesSaga)]);
}

export type RootState = ReturnType<typeof rootSaga>;
