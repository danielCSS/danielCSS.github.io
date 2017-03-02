
import '../../components/scss/button.scss';

import React from 'react';
//import Icon from '../../components/js/icon.js';

const Button = (props) => (
  <button type="button" className={props.classes}>{props.text}
    {props.children}
  </button>
)

export default Button;


// <h2>3. Buttons</h2>
// <div class="o-box">
//   <h3>Button unstyled</h3>
//   <button class="c-btn u-margin-top-small">Button</button>
// </div>
// <div class="o-box">
//   <h3>Primary</h3>
//   <h5>Default</h5>
//   <!-- <span>Button Primary: small/normal/disabled/large</span> -->
//   <button class="c-btn--primary u-margin-top-small">Play Now</button>
//   <button class="c-btn--primary c-btn--inline u-margin-top-small">Join Now</button>
//   <button disabled class="c-btn--primary c-btn--inline u-margin-top-small">Join Now</button>
//   <h5>Icon Button</h5>
//   <button class="c-btn--primary c-btn--inline c-btn--icon u-margin-right">
//     <svg class="c-icon u-padding-none"><use xlink:href="images/sprite.svg#MY_ACCOUNT" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>
//   </button>
//   <button class="c-btn--primary c-btn--inline c-btn--icon u-margin-right">
//     <svg class="c-icon u-padding-none"><use xlink:href="images/sprite.svg#HOME" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>
//   </button>
//   <button class="c-btn--primary c-btn--inline c-btn--icon u-margin-right">
//     <svg class="c-icon u-padding-none"><use xlink:href="images/sprite.svg#CLUB_FINDER" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>
//   </button>
//   <button class="c-btn--primary c-btn--inline c-btn--icon u-margin-right">
//     <svg class="c-icon u-padding-none"><use xlink:href="images/sprite.svg#EMAIL" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>
//   </button>
//   <button class="c-btn--primary c-btn--inline c-btn--icon u-margin-right">
//     <svg class="c-icon u-padding-none"><use xlink:href="images/sprite.svg#CONTACT_US" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>
//   </button>
//   <h5>Variation</h5>
//   <button class="c-btn--primary c-btn--split u-margin-top-small">
//     <span class="u-padding-right-small">Play</span>
//     <span class="c-btn__counter">00:23</span>
//   </button>
// </div>
// <div class="o-box">
//   <h3>Secondary</h3>
//   <h5>Default</h5>
//   <!-- <span>Button Secondary: small/normal/disabled/large</span> -->
//   <button class="c-btn--secondary u-margin-top-small">Play Now</button>
//   <button class="c-btn--secondary c-btn--inline u-margin-top-small">Join Now</button>
//   <button disabled class="c-btn--secondary c-btn--inline u-margin-top-small">Join Now</button>
//   <h5>Icon Button</h5>
//   <button class="c-btn--secondary c-btn--inline  c-btn--icon u-margin-right">
//     <svg class="c-icon u-padding-none"><use xlink:href="images/sprite.svg#MENU" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>
//   </button>
//   <button class="c-btn--secondary c-btn--inline  c-btn--icon u-margin-right">
//     <svg class="c-icon u-padding-none"><use xlink:href="images/sprite.svg#MENU_2" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>
//   </button>
//   <button class="c-btn--secondary c-btn--inline  c-btn--icon u-margin-right">
//     <svg class="c-icon u-padding-none"><use xlink:href="images/sprite.svg#CHEERY" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>
//   </button>
//
//   <h5>Variation</h5>
//   <button class="c-btn--secondary c-btn--split u-margin-top-small">
//     <span class="u-padding-right-small">Filter</span>
//     <svg class="c-icon"><use xlink:href="images/sprite.svg#FILTERS_2" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>
//   </button>
// </div>
// <div class="o-box">
//   <h3>Icon + Text Button</h3>
//   <button class="c-btn--text u-padding-tiny u-margin-right">
//     <span>Close</span>
//     <svg class="c-icon--colored u-margin-left-tiny"><use xlink:href="images/sprite.svg#CLOSE_INVERTED" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>
//   </button>
//   <button class="c-btn--text u-margin-right">
//     <svg class="c-icon--primary"><use xlink:href="images/sprite.svg#ARROW_BACK" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>
//     <span class="c-btn__link">Back</span>
//   </button>
//   <button class="c-btn--text u-margin-right">
//     <svg class="c-icon--primary"><use xlink:href="images/sprite.svg#EXPAND" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>
//     <span class="c-btn__link">Set Deposit limit</span>
//   </button>
//   <button class="c-btn--text u-margin-right">
//     <svg class="c-icon--primary"><use xlink:href="images/sprite.svg#EXPAND" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>
//     <span class="c-btn__link">Add Friend</span>
//   </button>
// </div>
