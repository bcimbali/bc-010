import React from 'react';

function SliderNumberDisplay({value}) {
  return(
    <div className="slider-number-container">
      <p className="slider-number" >
        {value}
      </p>
    </div>
  );
};

export default SliderNumberDisplay;