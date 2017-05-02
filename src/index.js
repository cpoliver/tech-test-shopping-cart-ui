import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import App from './containers/app';
import reducer from './reducers/receipt-reducer';

const store = createStore(
  reducer,
  applyMiddleware(thunk, createLogger())
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
