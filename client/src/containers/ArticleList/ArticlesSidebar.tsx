import React from 'react';
import { ArticlesState } from '../../types/article.types';
import Loader from '../../components/Loader';
import { Link } from 'react-router-dom';

type Props = {
  categories: ArticlesState['categories'];
  isLoading: boolean;
};

export default function ArticlesSidebar({ categories, isLoading }: Props) {
  return (
    <div className="sidebar">
      <h3>Kategorien</h3>
      {isLoading && <Loader />}
      {categories.map((category, index) => (
        <ul key={`${index}-${category.name}`}>
          {category.childrenCategories.map(({ name, urlPath }, idx) => (
            <li key={`${idx}-${name}`}>
              <Link to={`/${urlPath}`}>{name}</Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
