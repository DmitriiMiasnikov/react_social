import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './state/reduxStore';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
