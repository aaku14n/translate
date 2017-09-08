import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./components/index";
import allReducers from "./reducers/index";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(allReducers, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
