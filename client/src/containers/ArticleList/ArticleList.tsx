import React from 'react';

import { ArticlesState } from '../../types/article.types';
import './ArticleList.css';
import ArticleItem from './ArticleCard';
import Loader from '../../components/Loader';

type Props = {
  categories: ArticlesState['categories'];
  isLoading: boolean;
};

export default function ArticleList({ categories, isLoading }: Props) {
  return (
    <div className="articles">
      {isLoading && <Loader />}
      {categories.map((category) => {
        return category.categoryArticles.articles.map((article, idx) => {
          return (
            <ArticleItem key={`${idx}-${article.name}`} article={article} />
          );
        });
      })}
    </div>
  );
}
