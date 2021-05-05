import React from 'react';
import { Article } from '../../types/article.types';
import { formatter } from '../../utils';

export default function ArticleCard({ article }: { article: Article }) {
  const formatterOptions = {
    locale: 'de-DE',
    style: 'currency',
    currency: 'EUR',
  };

  const price = formatter(formatterOptions).format(
    article.prices.regular.value / 100
  );
  return (
    <div className="article">
      <img
        src={article.images[0].path}
        alt={article.name}
        title={article.name}
      />
      <div>{article.name}</div>
      <div>{price}</div>
      <button type="button">Add to cart</button>
    </div>
  );
}
