import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./app";

// import Reducer from "./_reducers";
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import ReduxThunk from "redux-thunk";

// const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(
  // <Provider
  //   store={createStoreWithMiddleware(
  //     Reducer,
  //     window.__REDUX_DEVTOOLS_EXTENSION__ &&
  //       window.__REDUX_DEVTOOLS_EXTENSION__()
  //   )}
  // >
  <App />,
  // </Provider>,
  document.getElementById("root")
);
