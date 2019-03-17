import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createRootReducer, { initialState } from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
//REDUX
const history = createBrowserHistory();
const middleWares = [routerMiddleware(history), thunkMiddleware];
const store = createStore(
  createRootReducer(history),
  initialState,
  applyMiddleware(...middleWares)
)
ReactDOM.render(
  <Provider store={store}>
   <ConnectedRouter history={history}>
    <App />
    </ConnectedRouter>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
