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
