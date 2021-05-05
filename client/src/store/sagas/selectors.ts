import { RootState } from '../reducers';

export const getIsloadedArticlesFromStore = ({ articlesReducer }: RootState) =>
  articlesReducer.isLoaded;
