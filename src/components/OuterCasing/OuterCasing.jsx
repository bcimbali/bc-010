import ControlPanel from './../ControlPanel';
import Keyboard from './../Keyboard';
import React from 'react';

function OuterCasing(props) {
  return(
    <div className="outerCasing">
      <ControlPanel 
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