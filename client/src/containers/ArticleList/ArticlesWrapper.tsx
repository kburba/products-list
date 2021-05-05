import React, { Dispatch, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ArticleActions, ArticlesState } from '../../types/article.types';
import { getArticles } from '../../store/actions/article.actions';
import { RootState } from '../../store/reducers';
import ArticleList from './ArticleList';
import ArticlesSidebar from './ArticlesSidebar';

export default function ArticlesWrapper() {
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
      <ArticlesSidebar categories={categories} isLoading={isLoading} />
      <div className="content">
        <ArticleList categories={categories} isLoading={isLoading} />
      </div>
    </div>
  );
}
