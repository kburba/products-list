import React from 'react';
import { render } from '@testing-library/react';
import ArticleList from './ArticleList';

test('renders the ProductList', () => {
  const { getByText } = render(<ArticleList />);
  const linkElement = getByText(/home24/i);
  expect(linkElement).toBeInTheDocument();
});
