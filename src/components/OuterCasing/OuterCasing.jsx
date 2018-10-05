import ControlPanel from './../ControlPanel';
import Keyboard from './../Keyboard';
import React from 'react';

function OuterCasing({
  attackValue,
  decayValue,
  sustainValue,
  releaseValue,
  envelopeSliderChange,
  filterValue,
  lfoValue,
  toggleOscillator,
  keyPress
}) {
  return(
    <div className="outerCasing">
      <ControlPanel
        attackValue={attackValue}
        decayValue={decayValue}
        sustainValue={sustainValue}
        releaseValue={releaseValue}
        envelopeSliderChange={envelopeSliderChange}
        filterValue={filterValue} 
        key="control-panel"
        lfoValue={lfoValue}
        toggleOscillator={toggleOscillator}
      />
      <Keyboard
        key="keyboard"
        keyPress={keyPress}
      />
    </div>
  );
};

export default OuterCasing;