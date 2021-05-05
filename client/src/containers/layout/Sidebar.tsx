import React from 'react';
import { ChildCategory } from '../../types/article.types';

export default function Sidebar({
  childrenCategories,
}: {
  childrenCategories: ChildCategory[];
}) {
  return (
    <div className="sidebar">
      <h3>Kategorien</h3>
      {childrenCategories.length ? (
        <ul>
          {childrenCategories.map(({ name, urlPath }) => {
            return (
              <li>
                <a href={`/${urlPath}`}>{name}</a>
              </li>
            );
          })}
        </ul>
      ) : (
        'Loading...'
      )}
    </div>
  );
}
