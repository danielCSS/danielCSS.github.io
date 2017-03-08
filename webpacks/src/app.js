
import './core-scss/main.scss';
//import React from 'react';
import React, { PropTypes, Component } from 'react'
import { render } from 'react-dom';
//import Button from './components/js/button.js';
import Buttons from './components/js/Buttons.jsx';
//import Icon from './components/js/icon.js';
import Icons from './components/js/icons.jsx';

import { Route, Link } from './components/js/router.js';
//import {Route} from './components/js/router.js';

const App = () => {
   return (
  <div className="c-style-content">
    <div className="o-box c-style-box c-style-container">
      <Route exact path="/" component={Icons}/>
      <Route path="/icons" component={Icons}/>
      <Route path="/buttons" component={Buttons} />
    </div>
    <nav className="c-style-nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/icons">Icons</Link></li>
        <li><Link to="/buttons">Buttons</Link></li>
        <li><a href="#header">Headers</a></li>
        <li><a href="#panel">Panels</a></li>
        <li><a href="#form">Forms</a></li>
        <li><a href="#form">Tables</a></li>
        <li><a href="#tab">Tabs</a></li>
        <li><a href="#callout">Callouts</a></li>
        <li><a href="#popup">Popups</a></li>
        <li><a href="#grid">Grids</a></li>
        <li><a href="#badge">Badges</a></li>
      </ul>
    </nav>
  </div>
)};
//
render(
  <App />, document.getElementById('app')
);
