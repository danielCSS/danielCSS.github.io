
import './core-scss/main.scss';
import React from 'react';
import { render } from 'react-dom';
import Button from './components/js/button.js';
import Icon from './components/js/icon.js';

const App = () => {
   return (
  <div className="o-box c-style-box">
    <Icon classes="c-icon--colored" icon="ARROW" />
    <Icon classes="c-icon" icon="BINGO_SCHEDULE"  />

    <Button classes="c-btn--primary u-margin-top-small" text="Play Now" />
    <Button classes="c-btn--primary u-margin-top-small" text="Play bingo Now">
      <Icon classes="c-icon--colored" icon="CLOSE_INVERTED"  />
    </Button>
  </div>
)};
//
render(
  <App />, document.getElementById('app')
);
