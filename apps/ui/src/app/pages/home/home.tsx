import * as React from 'react';
import * as ReactRouterDOM from 'react-router-dom';

const Home = () => (
  <div>
    home <ReactRouterDOM.Link to="/about">about</ReactRouterDOM.Link>
  </div>
);

export default Home;
