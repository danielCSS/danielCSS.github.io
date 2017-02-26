
import './core-scss/main.scss';
import React from 'react';
import { render } from 'react-dom';
import Button from './components/js/button.js';


const App = () => {
   return (
  <div>
    <Button classes="c-btn--primary u-margin-top-small" text="Play Now" />
    <Button classes="c-btn--primary u-margin-top-small" svg="bla" text="Play Now" />
  </div>
)};
//
render(
  <App />, document.getElementById('app')
);
