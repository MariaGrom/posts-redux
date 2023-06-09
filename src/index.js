import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { rootReducer } from './components/redux/rootReducer';
import { forbiddenWordsMiddleware } from './components/redux/middleware';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, forbiddenWordsMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const app = (
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
