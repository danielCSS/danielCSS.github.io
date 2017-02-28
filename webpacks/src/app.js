
import './core-scss/main.scss';
import React from 'react';
import { render } from 'react-dom';
import Button from './components/js/button.js';
import Icon from './components/js/icon.js';

const App = () => {
   return (
  <div>
    <Icon classes="c-icon" icon="facebook" />
    <Icon classes="c-icon" icon="google" />
    <Icon classes="c-icon" icon="twitter" />
    <Button classes="c-btn--primary u-margin-top-small" text="Play Now" />
    <Button classes="c-btn--primary u-margin-top-small" svg="bla" text="Play bingo Now" />
  </div>
)};
//
render(
  <App />, document.getElementById('app')
);
