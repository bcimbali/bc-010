import EnvelopeSlider from './../EnvelopeSlider';
import OscillatorBtn from './../OscillatorBtn';
import React from 'react';
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
      <EnvelopeSlider 
        envelopeSliderChange={props.envelopeSliderChange} 
      />
    </div>
  );
};

export default ControlPanel;