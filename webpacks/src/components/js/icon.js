import '../../components/scss/icon.scss';

import React from 'react';
const {PropTypes} = React;

const Icon = props => (
  <svg className={props.classes} viewBox="0 0 24 24">
    <use xlinkHref={'./src/assets/images/sprite.svg#' + props.icon }></use>
  </svg>
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Icon;
