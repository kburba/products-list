export type ArticlesState = {
  categories: Category[];
  isLoaded: boolean;
  isLoading: boolean;
};

export type Category = {
  name: string;
  categoryArticles: ArticleCategory;
  articleCount: number;
  childrenCategories: ChildCategory[];
};

export type Article = {
  name: string;
  variantName: string;
  prices: Prices;
  images: Image[];
};

export type ChildCategory = {
  name: string;
  urlPath: string;
};

export type Prices = {
  currency: string;
  regular: {
    value: number;
  };
};

export type Image = {
  path: string;
};

export type ArticleCategory = {
  articles: Article[];
};

export enum ARTICLE_ACTIONS {
  GET_ARTICLES = 'GET_ARTICLES',
  GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS',
  GET_ARTICLES_ERROR = 'GET_ARTICLES_ERROR',
}

export interface GetArticles {
  type: typeof ARTICLE_ACTIONS.GET_ARTICLES;
}

export interface GetArticlesSuccess {
  type: typeof ARTICLE_ACTIONS.GET_ARTICLES_SUCCESS;
  payload: Category[];
}
export interface GetArticlesError {
  type: typeof ARTICLE_ACTIONS.GET_ARTICLES_ERROR;
}

export type ArticleActions =
  | GetArticles
  | GetArticlesSuccess
  | GetArticlesError;
