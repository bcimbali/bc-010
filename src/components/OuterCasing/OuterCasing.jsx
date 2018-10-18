import ControlPanel from "./../ControlPanel";
import Keyboard from "./../Keyboard";
import PropTypes from "prop-types";
import React from "react";

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
  oscillator,
  toggleOscillator
}) {
  return (
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
        oscillator={oscillator}
        toggleOscillator={toggleOscillator}
      />
      <Keyboard key="keyboard" keyPress={keyPress} octave={octave} />
    </div>
  );
}

OuterCasing.propTypes = {
  attackValue: PropTypes.number,
  decayValue: PropTypes.number,
  sustainValue: PropTypes.number,
  releaseValue: PropTypes.number,
  decreaseOctave: PropTypes.func,
  envelopeSliderChange: PropTypes.func,
  filterValue: PropTypes.number,
  increaseOctave: PropTypes.func,
  keyPress: PropTypes.func,
  lfoValue: PropTypes.number,
  octave: PropTypes.number,
  oscillator: PropTypes.string,
  toggleOscillator: PropTypes.func
};

export default OuterCasing;
