// @flow
import React from 'react';
import PropTypes from 'prop-types';

import { ICONS } from './icons.js';

const Icon = props => {
  const { icon, fillColor, width, height, strokeWidth, strokeColor } = props;

  return (
    <svg width={width} height={height} viewBox={ICONS[icon].viewBox}>
      <path
        d={ICONS[icon].path}
        fill={fillColor ? fillColor : 'transparent'}
        stroke={strokeColor ? strokeColor : 'transparent'}
        strokeWidth={strokeWidth ? strokeWidth : '2'}
      />
    </svg>
  );
};

export default Icon;
