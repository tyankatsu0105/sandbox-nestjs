import * as React from "react";
import * as ReactDOM from "react-dom";

import * as ReactRouterDOM from "react-router-dom";

import "minireset.css";

import { App } from "./app/app";

ReactDOM.render(
  <ReactRouterDOM.BrowserRouter>
    <App />
  </ReactRouterDOM.BrowserRouter>,
  document.getElementById("app")
);
