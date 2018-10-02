import FilterEnvelopeSlider from './../FilterEnvelopeSlider';
import React from 'react';
import filterSliders from './../../filterSliders.json';

function FilterSliderBank(props) {
  return(
    <div className="slider-bank">
      {filterSliders.map(slider => (
        <FilterEnvelopeSlider
          abbr={slider.abbr}
          adsr={slider.type}
          envelopeSliderChange={props.envelopeSliderChange}
          filterValue={props.filterValue} 
          key={`${slider.id}-${slider.type}`}
          type="range" 
          min={slider.min} 
          max={slider.max}
          step={slider.step}
          value={`${(slider.type === 'filter') ? props.filterValue : ''}`} 
        />
      ))}
    </div>
  );
};

export default FilterSliderBank;