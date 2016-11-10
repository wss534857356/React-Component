import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import * as reducers from './reducers'
import { App, Home } from './components'

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

injectTapEventPlugin({
  shouldRejectClick: function (lastTouchEventTimestamp, clickEventTimestamp) {
    return true;
  }
});

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
)
/*
  为onTouchTap解决一下两个issue的临时解决方案, 随时会被取缔：
  https://github.com/facebook/react/issues/436;
  https://github.com/facebook/react/issues/1170;
*/

const store = createStore(
  reducer,
  DevTools.instrument(),
  applyMiddleware(thunk)
)

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
);