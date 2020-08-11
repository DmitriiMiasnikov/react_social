import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './state/reduxStore';
import { Provider } from 'react-redux';

let reRender = () => {
  ReactDOM.render(
      <Provider store = {store}>
      <App store = {store}/>
      </Provider>,
    document.getElementById('root')
  );
}
reRender(store.getState());

store.subscribe(() => {
  let state = store.getState();
  reRender(state);
});

serviceWorker.unregister();
