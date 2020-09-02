import * as React from 'react';
import * as ReactRouterDOM from 'react-router-dom';

const About = () => (
  <div>
    <h1>about</h1>
    About <ReactRouterDOM.Link to="/">Home</ReactRouterDOM.Link>
  </div>
);

export default About;
