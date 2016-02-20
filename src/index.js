import 'normalize.css/normalize.css';
import 'styles/base.scss';
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './containers/App';
import Home from './components/home';
import UserPage from './components/user-page';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/users/:userId" component={UserPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
