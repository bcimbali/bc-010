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
      {envelopeSliders.map(slider => (
        <EnvelopeSlider
          abbr={slider.abbr}
          adsr={slider.type}
          envelopeSliderChange={envelopeSliderChange}
          key={`${slider.id}-${slider.type}`} 
          type="range" 
          min={slider.min} 
          max={slider.max}
          step={slider.step}
          value={`${(slider.type === 'attack') ? attackValue : 
                    (slider.type === 'decay') ? decayValue : 
                    (slider.type === 'sustain') ? sustainValue : 
                    (slider.type === 'release') ? releaseValue : ''}`} 
        />
      ))}
    </div>
  );
};

export default SliderBank;