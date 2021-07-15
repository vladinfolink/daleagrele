/**Libraries: */
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

/**Routing component:: */
import App from './App';

/**Styles: */
import './index.scss';

/** Store: */
const { combinedReducers } = require("./store/reducers");


const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose,
store = createStore(combinedReducers, composeEnhancers(applyMiddleware(thunk)));
/** Please install Redux dev tools from Chrome store to expose this interface. */


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App /> {/* App component handles routing, do not include other components here. */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); /** DISABLE IN PRODUCTION */
