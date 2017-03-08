
import '../../components/scss/button.scss';

import React from 'react';
//import Icon from '../../components/js/icon.js';

const Button = (props) => (
  <button type="button" className={props.classes}>{props.text}
    {props.children}
  </button>
)

export default Button;
