import * as React from "react";
import * as ReactRouterDOM from "react-router-dom";

import * as Page from "./pages";

export const App = (): React.ReactElement => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <ReactRouterDOM.Switch>
      <ReactRouterDOM.Route
        path="/"
        component={Page.Home}
      ></ReactRouterDOM.Route>
    </ReactRouterDOM.Switch>
  </React.Suspense>
);
