import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import * as reducers from './reducers'
import { App, Home } from './components'

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})


/*
  为onTouchTap解决一下两个issue的临时解决方案, 随时会被取缔：
  https://github.com/facebook/react/issues/436;
  https://github.com/facebook/react/issues/1170;
*/

const store = createStore(
  reducer
)

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);