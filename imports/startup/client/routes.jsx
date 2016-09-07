import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import AppContainer from '../../containers/AppContainer';
import ProductsContainer from '../../containers/ProductsContainer';
import NotFound from '../../components/NotFound';
import HomeContainer from '../../containers/HomeContainer';

export const getAppRoutes = ()=>(
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={HomeContainer}/>
      <Route path="/products" component={ProductsContainer}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);
