import React from 'react';

function SliderLabel({abbr, adsr}) {
  return(
    <div className="slider-label-container">
      <label className="slider-label" htmlFor={adsr}>
        {abbr}
      </label>
  </div>
  );
};

export default SliderLabel;