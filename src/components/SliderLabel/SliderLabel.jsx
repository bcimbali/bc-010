import React from 'react';

function SliderLabel(props) {
  return(
    <div className="slider-label-container">
      <label className="slider-label" htmlFor={props.adsr}>
        {props.abbr}
      </label>
  </div>
  );
};

export default SliderLabel;