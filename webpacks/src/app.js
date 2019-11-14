
import './core-scss/main.scss';
//import React from 'react';
import React, { PropTypes, Component } from 'react'
import { render } from 'react-dom';

import { Route, Link } from './components/js/router.js';

import Icons from './components/js/icons.jsx';
import Buttons from './components/js/buttons.jsx';
import Headers from './components/js/headers.jsx';
import Forms from './components/js/forms.jsx';
import Tables from './components/js/tables.jsx';
import Tabs from './components/js/tabs.jsx';
import Popups from './components/js/popups.jsx';
import Panels from './components/js/panels.jsx';
import Grids from './components/js/grids.jsx';
import Badges from './components/js/badges.jsx';
import Callouts from './components/js/callouts.jsx';

// React-Redux todo app https://redux.js.org/basics/example-todo-list

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/todo';
import ProgressBar from './components/progress-bar/app';
import TodoApp from './components/todo/app';
import TodoRoy from './containers/todo-roy/App';

const App = () => {
   return (
  <div className="c-style-content">
    <div className="o-box c-style-box c-style-container">
      <Route exact path="/" />
      <Route path="/progress-bar" component={ProgressBar}/>
      <Route path="/react-redux-todo" component={TodoApp}/>
      <Route path="/react-roy-todo" component={TodoRoy}/>
      <Route path="/icons" component={Icons}/>
      <Route path="/buttons" component={Buttons} />
      <Route path="/headers" component={Headers} />
      <Route path="/forms" component={Forms} />
      <Route path="/tables" component={Tables} />
      <Route path="/tabs" component={Tabs} />
      <Route path="/popups" component={Popups} />
      <Route path="/panels" component={Panels} />
      <Route path="/grids" component={Grids} />
      <Route path="/badges" component={Badges} />
      <Route path="/callouts" component={Callouts} />
    </div>
    <nav className="c-style-nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/progress-bar">Progress Bar component</Link></li>
        <li><Link to="/react-redux-todo">React-Redux todo app</Link></li>
        <li><Link to="/react-roy-todo">Roy's todo app</Link></li>
        <li><Link to="/icons">Icons</Link></li>
        <li><Link to="/buttons">Buttons</Link></li>
        <li><Link to="/headers">Headers</Link></li>
        <li><Link to="/forms">Forms</Link></li>
        <li><Link to="/tables">Tables</Link></li>
        <li><Link to="/tabs">Tabs</Link></li>
        <li><Link to="/popups">Popups</Link></li>
        <li><Link to="/panels">Panels</Link></li>
        <li><Link to="/grids">Grids</Link></li>
        <li><Link to="/badges">Badges</Link></li>
        <li><Link to="/callouts">Callouts</Link></li>
      </ul>
    </nav>
  </div>
)};
//
// render(
//   <App />, document.getElementById('app')
// );

// Needed for the todo app
const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
