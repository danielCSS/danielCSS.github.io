
import './core-scss/main.scss';
//import './components/scss/main.scss';
//import Button from './components/js/button';
import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';

//import { Button } from './components/js/button.js';

import './components/scss/button.scss';

const Button = (props) => (
  <button className={props.classes}>{props.text}</button>
)
// const root = document.querySelector('#app');
// root.innerHTML = `<p>Hello webpack 14.</p>`;



// const Header = (props) => {
//   return (
//     <h1>{props.title}</h1>
//   )
// }

const Header = (props) => (
  <h1>{props.title}</h1>
)

const App = () => {
   return (
  <div>
    <Header title="Hello"/> 
    <h2>There4</h2> 
    <Button classes="c-btn--primary u-margin-top-small" text="Play Now" />
  </div>
)};
//
render(
  <App />, document.getElementById('app')
);
