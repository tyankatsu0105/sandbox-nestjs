import * as React from 'react';
import * as ReactRouterDOM from 'react-router-dom';

import * as Pages from './pages';

import * as SharedComponents from '~ui/app/shared/components';

const routeInfo = {
  home: {
    path: '/',
    component: Pages.Home,
  },
  about: {
    path: '/about',
    component: Pages.About,
  },
};

export const App = () => (
  <React.Suspense fallback={<SharedComponents.PageLoader />}>
    <ReactRouterDOM.Switch>
      <ReactRouterDOM.Route
        path={routeInfo.about.path}
        component={routeInfo.about.component}
      />
      <ReactRouterDOM.Route
        path={routeInfo.home.path}
        component={routeInfo.home.component}
      />
    </ReactRouterDOM.Switch>
  </React.Suspense>
);
