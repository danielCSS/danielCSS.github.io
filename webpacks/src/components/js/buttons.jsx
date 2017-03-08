import React from 'react';
import Button from '../../components/js/button.js';
import Icon from '../../components/js/icon.js';


const Buttons = () => (
  <section>
    <h2>Buttons</h2>
    <h3>Unstyled Button</h3>
    <Button classes="c-btn" text="Play Now" />
    <h3>Primary Buttons</h3>
    <h5>Default</h5>
    <Button classes="c-btn--primary u-margin-top-small" text="Play Now" />
    <h5>Icon Button</h5>
    <Button classes="c-btn--primary c-btn--inline c-btn--icon u-margin-right" text="">
      <Icon classes="c-icon" icon="ARROW"  />
    </Button>
    <Button classes="c-btn--primary c-btn--inline c-btn--icon u-margin-right" text="">
      <Icon classes="c-icon" icon="HOME"  />
    </Button>
    <Button classes="c-btn--primary c-btn--inline c-btn--icon u-margin-right" text="">
      <Icon classes="c-icon" icon="CLUB_FINDER"  />
    </Button>
    <Button classes="c-btn--primary c-btn--inline c-btn--icon u-margin-right" text="">
      <Icon classes="c-icon" icon="EMAIL"  />
    </Button>
    <Button classes="c-btn--primary c-btn--inline c-btn--icon u-margin-right" text="">
      <Icon classes="c-icon" icon="CONTACT_US"  />
    </Button>
    <h5>Variation</h5>
    <Button classes="c-btn--primary c-btn--inline c-btn--icon u-margin-right" text="">
      <span className="u-padding-right-small">Play</span>
      <span className="c-btn__counter">00:23</span>
    </Button>
    <h3>Secondary Buttons</h3>
    <Button classes="c-btn--secondary u-margin-top-small" text="Play Now" />
    <h5>Icon Button</h5>
    <Button classes="c-btn--secondary c-btn--inline c-btn--icon u-margin-right" text="">
      <Icon classes="c-icon--colored" icon="ARROW"  />
    </Button>
    <Button classes="c-btn--secondary c-btn--inline c-btn--icon u-margin-right" text="">
      <Icon classes="c-icon--colored" icon="HOME"  />
    </Button>
    <Button classes="c-btn--secondary c-btn--inline c-btn--icon u-margin-right" text="">
      <Icon classes="c-icon--colored" icon="CLUB_FINDER"  />
    </Button>
    <Button classes="c-btn--secondary c-btn--inline c-btn--icon u-margin-right" text="">
      <Icon classes="c-icon--colored" icon="EMAIL"  />
    </Button>
    <Button classes="c-btn--secondary c-btn--inline c-btn--icon u-margin-right" text="">
      <Icon classes="c-icon--colored" icon="CONTACT_US"  />
    </Button>
    <h5>Variation</h5>
    <Button classes="c-btn--secondary c-btn--inline c-btn--icon u-margin-right" text="">
      <span className="u-padding-right-small">Filter</span>
      <Icon classes="c-icon--colored" icon="FILTERS_2"  />
    </Button>
    <h3>Icon + Text Button</h3>
    <Button classes="c-btn--text u-padding-tiny u-margin-right" text="">
      <span>Close</span>
      <Icon classes="c-icon--colored u-margin-left-tiny" icon="CLOSE_INVERTED"  />
    </Button>
    <Button classes="c-btn--text u-padding-tiny u-margin-right" text="Close">
      <Icon classes="c-icon--colored u-margin-left-tiny" icon="CLOSE_INVERTED"  />
    </Button>
    <Button classes="c-btn--text u-margin-right" text="">
      <Icon classes="c-icon--primary" icon="ARROW_BACK"  />
      <span className="c-btn__link">Back</span>
    </Button>
    <Button classes="c-btn--text u-margin-right" text="">
      <Icon classes="c-icon--primary" icon="EXPAND"  />
      <span className="c-btn__link">Set Deposit limit</span>
    </Button>
    <Button classes="c-btn--text u-margin-right" text="">
      <Icon classes="c-icon--primary" icon="EXPAND"  />
      <span className="c-btn__link">Add Friend</span>
    </Button>
  </section>
)

export default Buttons;
