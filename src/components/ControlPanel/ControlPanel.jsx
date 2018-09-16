import OscillatorBtn from './../OscillatorBtn';
import React from 'react';
import SliderBank from '../SliderBank/SliderBank';
import oscillatorTypes from './../../oscillatorTypes.json';

function ControlPanel(props) {
  return(
    <div className="controlPanel">
      {oscillatorTypes.map(oscType => (
        <OscillatorBtn 
          key={`${oscType.id}-${oscType.type}`}
          toggleOscillator={props.toggleOscillator}
          type={oscType.type}
        />
      ))}
      <SliderBank
        attackValue={props.attackValue}
        decayValue={props.decayValue}
        sustainValue={props.sustainValue}
        releaseValue={props.releaseValue} 
        envelopeSliderChange={props.envelopeSliderChange} 
      />
    </div>
  );
};

export default ControlPanel;