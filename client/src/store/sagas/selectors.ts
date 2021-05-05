import { RootState } from '../configureStore';

export const getIsloadedArticlesFromStore = ({ articlesReducer }: RootState) =>
  articlesReducer.isLoaded;
