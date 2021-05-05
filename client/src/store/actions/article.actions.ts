import {
  ARTICLE_ACTIONS,
  GetArticles,
  GetArticlesSuccess,
  Category,
  GetArticlesError,
} from './../../types/article.types';

export function getArticles(): GetArticles {
  return {
    type: ARTICLE_ACTIONS.GET_ARTICLES,
  };
}

export function getArticlesSuccess(users: Category[]): GetArticlesSuccess {
  return {
    type: ARTICLE_ACTIONS.GET_ARTICLES_SUCCESS,
    payload: users,
  };
}

export function getArticlesError(): GetArticlesError {
  return {
    type: ARTICLE_ACTIONS.GET_ARTICLES_ERROR,
  };
}
