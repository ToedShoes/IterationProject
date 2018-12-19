import React from 'react';
import { render } from 'react-dom';
import App from './client/App.js';
import { Provider } from 'react-redux';
import store from './store/store';

import styles from './client/styles/styles.css'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('contents')
);