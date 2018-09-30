import React from 'react';

// Needs to be tweaked to be included as working component
function VerticalSlider(props) {
  return(
    <div className="slider-housing">
      <div className="slider-container">
        <input
          adsr={props.type}
          className="html-slider"
          type="range" 
          min={props.min} 
          max={props.max}
          onChange={props.handleChange}
          step={props.step}
          // value={props.value}
          defaultValue={props.value}
          placeholder={props.value}
        />
      </div>
    </div>
  );
};

export default VerticalSlider;