import FilterEnvelopeSlider from './../FilterEnvelopeSlider';
import React from 'react';
import filterSliders from './../../filterSliders.json';

function FilterSliderBank({envelopeSliderChange, filterValue, lfoValue}) {
  return(
    <div className="slider-bank">
      {filterSliders.map(slider => (
        <FilterEnvelopeSlider
          abbr={slider.abbr}
          adsr={slider.type}
          envelopeSliderChange={envelopeSliderChange}
          filterValue={filterValue} 
          key={`${slider.id}-${slider.type}`}
          lfoValue={lfoValue}
          type="range" 
          min={slider.min} 
          max={slider.max}
          step={slider.step}
          value={`${(slider.type === 'filter') ? filterValue : 
                    (slider.type === 'lfo') ? lfoValue : ''}`} 
        />
      ))}
    </div>
  );
};

export default FilterSliderBank;