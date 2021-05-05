import React from 'react';
import Header from './containers/layout/Header';
import Footer from './containers/layout/Footer';
import Sidebar from './containers/layout/Sidebar';
import ArticleList from './containers/ArticleList/ArticleList';

export default function App() {
  return (
    <div className="page">
      <Header />
      <Sidebar childrenCategories={[]} />
      <div className="content">
        <ArticleList />
      </div>
      <Footer />
    </div>
  );
}
