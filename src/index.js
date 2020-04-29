import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import ConectedToDoApp from "./containers/ConectedToDoApp";
import { store } from "./state/store/configureStore";
import "./styles.css";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <ConectedToDoApp />
  </Provider>,
  rootElement
);
