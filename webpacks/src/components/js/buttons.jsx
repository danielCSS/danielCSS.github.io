import React from 'react';
import Button from '../../components/js/button.js';
import Icon from '../../components/js/icon.js';


const Buttons = () => (
  <section>
    <h3>Buttons</h3>
    <Button classes="c-btn--primary u-margin-top-small" text="Play Now" />
    <Button classes="c-btn--primary u-margin-top-small" text="Play bingo Now">
      <Icon classes="c-icon--colored" icon="CLOSE_INVERTED"  />
    </Button>
  </section>
)

export default Buttons;
