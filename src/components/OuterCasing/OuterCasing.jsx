import ControlPanel from './../ControlPanel';
import Keyboard from './../Keyboard';
import React from 'react';

function OuterCasing(props) {
  return(
    <div className="outerCasing">
      <ControlPanel
        envelopeSliderChange={props.envelopeSliderChange} 
        key="control-panel"
        toggleOscillator={props.toggleOscillator}
      />
      <Keyboard
        key="keyboard"
        keyPress={props.keyPress}
      />
    </div>
  );
};

export default OuterCasing;