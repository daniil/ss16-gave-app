import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { browserHistory } from 'react-router';
import { syncHistory } from 'react-router-redux';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const reduxRouterMiddleware = syncHistory(browserHistory);
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      reduxRouterMiddleware,
      thunkMiddleware,
      createLogger()
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
