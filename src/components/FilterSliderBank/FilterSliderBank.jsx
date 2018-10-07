import FilterEnvelopeSlider from './../FilterEnvelopeSlider';
import React from 'react';
import filterSliders from './../../filterSliders.json';

function FilterSliderBank({envelopeSliderChange, filterValue, lfoValue}) {
  return(
    <div className="slider-bank">
      {filterSliders.map(({
        abbr,
        id,
        max,
        min,
        step,
        type
      }) => (
        <FilterEnvelopeSlider
          abbr={abbr}
          adsr={type}
          envelopeSliderChange={envelopeSliderChange}
          filterValue={filterValue} 
          key={`${id}-${type}`}
          lfoValue={lfoValue}
          type="range" 
          min={min} 
          max={max}
          step={step}
          value={`${(type === 'filter') ? filterValue : 
                    (type === 'lfo') ? lfoValue : ''}`} 
        />
      ))}
    </div>
  );
};

export default FilterSliderBank;