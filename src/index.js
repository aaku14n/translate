import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./components/index";
import allReducers from "./reducers/index";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import registerServiceWorker from "./registerServiceWorker";
import * as api from "./lib/apiRequest.js";

const store = createStore(
  allReducers,
  applyMiddleware(thunk.withExtraArgument(api))
);
ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
