import PropTypes from 'prop-types';
import React from 'react';
import SliderLabel from './../SliderLabel';
import SliderNumberDisplay from './../SliderNumberDisplay';
import VerticalSlider from './../VerticalSlider';

function EnvelopeSlider({
  abbr,
  adsr,
  envelopeSliderChange,
  type,
  min,
  max,
  step,
  value
}) {
  return (
    <div className="envelopeSlider">
      <SliderLabel
        abbr={abbr}
        adsr={type}
      />
      <VerticalSlider
        adsr={adsr}
        envelopeSliderChange={envelopeSliderChange} 
        max={max}
        min={min}
        step={step}
        type={type}
        value={value}
      />
      <SliderNumberDisplay 
        value={value}
      />
    </div>
  );
};

EnvelopeSlider.propTypes = {
  abbr: PropTypes.string,
  adsr: PropTypes.string,
  envelopeSliderChange: PropTypes.func,
  max: PropTypes.number,
  min: PropTypes.number,
  step: PropTypes.number,
  type: PropTypes.string,
  value: PropTypes.string
};

export default EnvelopeSlider;