import FilterSliderBank from './../FilterSliderBank';
import OscillatorBtn from './../OscillatorBtn';
import React from 'react';
import SliderBank from '../SliderBank/SliderBank';
import oscillatorTypes from './../../oscillatorTypes.json';

function ControlPanel({
  attackValue,
  decayValue,
  sustainValue,
  releaseValue,
  envelopeSliderChange,
  filterValue,
  lfoValue,
  toggleOscillator
}) {
  return(
    <div className="controlPanel">
    <SliderBank
      attackValue={attackValue}
      decayValue={decayValue}
      sustainValue={sustainValue}
      releaseValue={releaseValue} 
      envelopeSliderChange={envelopeSliderChange} 
    />
    <FilterSliderBank 
      envelopeSliderChange={envelopeSliderChange}
      filterValue={filterValue}
      lfoValue={lfoValue} 
    />
      {oscillatorTypes.map(({abbr, id, type}) => (
        <OscillatorBtn
          abbr={abbr} 
          key={`${id}-${type}`}
          toggleOscillator={toggleOscillator}
          type={type}
        />
      ))}
      
    </div>
  );
};

export default ControlPanel;