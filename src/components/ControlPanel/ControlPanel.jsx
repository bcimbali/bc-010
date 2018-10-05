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
      {oscillatorTypes.map(oscType => (
        <OscillatorBtn
          abbr={oscType.abbr} 
          key={`${oscType.id}-${oscType.type}`}
          toggleOscillator={toggleOscillator}
          type={oscType.type}
        />
      ))}
      
    </div>
  );
};

export default ControlPanel;