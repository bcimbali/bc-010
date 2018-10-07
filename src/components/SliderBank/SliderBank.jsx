import EnvelopeSlider from './../EnvelopeSlider';
import React from 'react';
import envelopeSliders from './../../envelopeSliders.json';

function SliderBank({
  envelopeSliderChange,
  attackValue,
  decayValue,
  sustainValue,
  releaseValue
}) {
  return(
    <div className="slider-bank">
      {envelopeSliders.map(({
        abbr,
        id,
        max,
        min,
        step,
        type
      }) => (
        <EnvelopeSlider
          abbr={abbr}
          adsr={type}
          envelopeSliderChange={envelopeSliderChange}
          key={`${id}-${type}`} 
          type="range" 
          min={min} 
          max={max}
          step={step}
          value={`${(type === 'attack') ? attackValue : 
                    (type === 'decay') ? decayValue : 
                    (type === 'sustain') ? sustainValue : 
                    (type === 'release') ? releaseValue : ''}`} 
        />
      ))}
    </div>
  );
};

export default SliderBank;