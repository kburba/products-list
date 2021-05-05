import React from 'react';
import Header from './containers/layout/Header';
import Footer from './containers/layout/Footer';
import ArticlesWrapper from './containers/ArticleList/ArticlesWrapper';

export default function App() {
  return (
    <div className="app">
      <Header />
      <ArticlesWrapper />
      <Footer />
    </div>
  );
}
