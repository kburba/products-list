import {
  ArticlesState,
  ARTICLE_ACTIONS,
  ArticleActions,
} from '../../types/article.types';

const initialState: ArticlesState = {
  categories: [],
  isLoaded: false,
  isLoading: true,
};

const productReducer = (
  state = initialState,
  action: ArticleActions
): ArticlesState => {
  switch (action.type) {
    case ARTICLE_ACTIONS.GET_ARTICLES:
      return {
        ...state,
        isLoading: true,
      };
    case ARTICLE_ACTIONS.GET_ARTICLES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        categories: action.payload,
      };
    case ARTICLE_ACTIONS.GET_ARTICLES_ERROR:
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
      };
    default:
      return state;
  }
};

export default productReducer;
