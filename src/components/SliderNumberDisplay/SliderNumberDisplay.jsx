import React from 'react';

function SliderNumberDisplay(props) {
  return(
    <div className="slider-number-container">
      <p className="slider-number" >
        {props.value}
      </p>
    </div>
  );
};

export default SliderNumberDisplay;