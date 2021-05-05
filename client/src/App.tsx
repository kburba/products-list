import React from 'react';
import Header from './containers/layout/Header';
import Footer from './containers/layout/Footer';
import ArticlesWrapper from './containers/ArticleList/ArticlesWrapper';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { history } from './store/configureStore';
import { Route, Switch } from 'react-router';

export default function App() {
  return (
    <div className="app">
      <Header />
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={ArticlesWrapper} />
          <Route component={() => <div>Route Not Found</div>} />
        </Switch>
      </ConnectedRouter>
      <Footer />
    </div>
  );
}
