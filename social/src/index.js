import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './state/reduxStore';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
    <App store={store} />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
