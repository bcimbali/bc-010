import OscillatorBtn from './../OscillatorBtn';
import React from 'react';
import SliderBank from '../SliderBank/SliderBank';
import oscillatorTypes from './../../oscillatorTypes.json';

function ControlPanel(props) {
  return(
    <div className="controlPanel">
    <SliderBank
        attackValue={props.attackValue}
        decayValue={props.decayValue}
        sustainValue={props.sustainValue}
        releaseValue={props.releaseValue} 
        envelopeSliderChange={props.envelopeSliderChange} 
    />
      {oscillatorTypes.map(oscType => (
        <OscillatorBtn
          abbr={oscType.abbr} 
          key={`${oscType.id}-${oscType.type}`}
          toggleOscillator={props.toggleOscillator}
          type={oscType.type}
        />
      ))}
      
    </div>
  );
};

export default ControlPanel;