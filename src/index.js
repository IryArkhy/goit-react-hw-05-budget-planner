import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./redux/store";
import styles from "./components/App/App.module.css";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <App className={styles.app} />
  </Provider>,
  document.getElementById("root")
);
