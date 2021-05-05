import React from 'react';
import { ArticlesState } from '../../types/article.types';
import Loader from '../../components/Loader';

type Props = {
  categories: ArticlesState['categories'];
  isLoading: boolean;
};

export default function Sidebar({ categories, isLoading }: Props) {
  return (
    <div className="sidebar">
      <h3>Kategorien</h3>
      {isLoading && <Loader />}
      {categories.map((category, index) => (
        <ul key={`${index}-${category.name}`}>
          {category.childrenCategories.map(({ name, urlPath }, idx) => {
            return (
              <li key={`${idx}-${name}`}>
                <a href={`/${urlPath}`}>{name}</a>
              </li>
            );
          })}
        </ul>
      ))}
    </div>
  );
}
