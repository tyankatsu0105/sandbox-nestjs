import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as ReactRouterDOM from 'react-router-dom';

import { App } from './app/app';

ReactDOM.render(
  <React.StrictMode>
    <ReactRouterDOM.BrowserRouter>
      <App />
    </ReactRouterDOM.BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
