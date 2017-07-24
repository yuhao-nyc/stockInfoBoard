import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import PageIndex from './components/page_index';
import StockDetail from './components/stock_detail';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const NoMatch = ({ location }) => {
  return <h2>404 NOT FOUND, the page "{location.pathname}" you looking for do not exist</h2>
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/stocks/:id" component={StockDetail} />
        <Route exact path="/" component={PageIndex} />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
