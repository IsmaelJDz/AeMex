import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import "./index.css";

// Redux and Redux DevTools
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import reducers from "./redux/reducers/index"
const initialState = {}


// ===================
// Apply middleware Redux Thunk for async actions with devtool enhancer 
// ===================
const middlewareEnhancers = applyMiddleware(reduxThunk);
const composeEnhancers = compose(
  middlewareEnhancers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(reducers, initialState, composeEnhancers);

// ===================
// Wrapper provider HOC
// ===================
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById("root")
);
