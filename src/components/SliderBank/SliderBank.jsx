import EnvelopeSlider from './../EnvelopeSlider';
import React from 'react';
import envelopeSliders from './../../envelopeSliders.json';

function SliderBank(props) {
  return(
    <div className="slider-bank">
      {envelopeSliders.map(slider => (
        <EnvelopeSlider
          abbr={slider.abbr}
          adsr={slider.type}
          envelopeSliderChange={props.envelopeSliderChange}
          key={`${slider.id}-${slider.type}`} 
          type="range" 
          min={slider.min} 
          max={slider.max}
          step={slider.step}
          value={`${(slider.type === 'attack') ? props.attackValue : 
                    (slider.type === 'decay') ? props.decayValue : 
                    (slider.type === 'sustain') ? props.sustainValue : 
                    (slider.type === 'release') ? props.releaseValue : ''}`} 
        />
      ))}
    </div>
  );
};

export default SliderBank;