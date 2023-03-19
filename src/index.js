/* eslint-disable eqeqeq */
import "react-app-polyfill/ie11"; // For IE 11 support
import "react-app-polyfill/stable";
import "core-js";
import "./polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./i18n";
import { icons } from "./assets/icons";

import { Provider } from "react-redux";
import store from "./store";

import Cookies from "universal-cookie";
const cookies = new Cookies();
React.icons = icons;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
if (cookies.get("lang")) {
  if (cookies.get("lang") == "fa") {
    document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
  } else {
    document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
  }
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
