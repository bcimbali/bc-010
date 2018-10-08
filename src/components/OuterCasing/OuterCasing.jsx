import ControlPanel from './../ControlPanel';
import Keyboard from './../Keyboard';
import React from 'react';

function OuterCasing({
  attackValue,
  decayValue,
  sustainValue,
  releaseValue,
  decreaseOctave,
  envelopeSliderChange,
  filterValue,
  increaseOctave,
  keyPress,
  lfoValue,
  octave,
  toggleOscillator
}) {
  return(
    <div className="outerCasing">
      <ControlPanel
        attackValue={attackValue}
        decayValue={decayValue}
        sustainValue={sustainValue}
        releaseValue={releaseValue}
        decreaseOctave={decreaseOctave}
        envelopeSliderChange={envelopeSliderChange}
        filterValue={filterValue} 
        increaseOctave={increaseOctave}
        key="control-panel"
        lfoValue={lfoValue}
        octave={octave}
        toggleOscillator={toggleOscillator}
      />
      <Keyboard
        key="keyboard"
        keyPress={keyPress}
        octave={octave}
      />
    </div>
  );
};

export default OuterCasing;