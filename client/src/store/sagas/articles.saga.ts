import { takeLatest, put, select, call } from 'redux-saga/effects';
import { getIsloadedArticlesFromStore } from './selectors';
import { ARTICLE_ACTIONS } from '../../types/article.types';
import { apiFetch } from './../store.utils';
import {
  getArticlesSuccess,
  getArticlesError,
} from '../actions/article.actions';

function* getArticlesSaga() {
  try {
    const isLoaded: boolean = yield select(getIsloadedArticlesFromStore);
    if (!isLoaded) {
      const query = {
        query: `{
        categories(ids: "156126", locale: de_DE) {
          name
          articleCount
          childrenCategories {
            name
            urlPath
          }
          categoryArticles(first: 50) {
            articles {
              name
              variantName
              prices {
                currency
                regular {
                  value
                }
              }
              images(
                format: WEBP
                maxWidth: 200
                maxHeight: 200
                limit: 1
              ) {
                path
              }
            }
          }
        }
      }`,
      };
      const response = yield call(apiFetch, '/graphql', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(query),
      });
      yield put(getArticlesSuccess(response.data.categories));
    }
  } catch (e) {
    yield put(getArticlesError());
  }
}

export default function* watchArticlesSaga() {
  yield takeLatest(ARTICLE_ACTIONS.GET_ARTICLES, getArticlesSaga);
}
