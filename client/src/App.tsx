import React, { Dispatch, useEffect } from 'react';
import Header from './containers/layout/Header';
import Footer from './containers/layout/Footer';
import Sidebar from './containers/layout/Sidebar';
import ArticleList from './containers/ArticleList/ArticleList';
import { useDispatch, useSelector } from 'react-redux';
import { ArticleActions, ArticlesState } from './types/article.types';
import { getArticles } from './store/actions/article.actions';
import { RootState } from './store/reducers';

export default function App() {
  const dispatch = useDispatch<Dispatch<ArticleActions>>();

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  const { categories, isLoading } = useSelector<
    RootState,
    {
      isLoading: ArticlesState['isLoading'];
      categories: ArticlesState['categories'];
    }
  >(({ articlesReducer }) => ({
    isLoading: articlesReducer.isLoading,
    categories: articlesReducer.categories,
  }));

  return (
    <div className="page">
      <Header />
      <Sidebar categories={categories} isLoading={isLoading} />
      <div className="content">
        <ArticleList categories={categories} isLoading={isLoading} />
      </div>
      <Footer />
    </div>
  );
}
