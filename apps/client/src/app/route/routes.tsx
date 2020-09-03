import * as React from 'react';
import * as ReactRouter from 'react-router';
import * as ReactRouterDOM from 'react-router-dom';

import * as Pages from '../views/pages';

import * as PageTransition from '../shared/components/animation/page-transition';

const routes = [
  { path: '/', Component: Pages.Home },
  { path: '/about', Component: Pages.About },
];

export const Routes = () => {
  return (
    <>
      {routes.map(({ path, Component }) => (
        <ReactRouterDOM.Route key={path} exact path={path}>
          {({ match }) => (
            <PageTransition.Component match={match}>
              <Component />
            </PageTransition.Component>
          )}
        </ReactRouterDOM.Route>
      ))}
    </>
  );
};
