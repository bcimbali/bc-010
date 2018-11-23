// @flow
import ControlPanel from "./../ControlPanel";
import Keyboard from "./../Keyboard";
import PropTypes from "prop-types";
import React from "react";

type Props = {
  decreaseOctave: Function,
  envelopeSliderChange: Function,
  filterValue: number,
  increaseOctave: Function,
  keyPress: Function,
  lfoValue: number,
  octave: number,
  toggleOscillator: Function,
  synthParams: Object
};

/** This holds everything. This is just one step down from App.jsx. */
function OuterCasing({
  decreaseOctave,
  envelopeSliderChange,
  filterValue,
  increaseOctave,
  keyPress,
  lfoValue,
  octave,
  toggleOscillator,
  synthParams
}: Props) {
  return (
    <div className="outerCasing">
      <ControlPanel
        decreaseOctave={decreaseOctave}
        envelopeSliderChange={envelopeSliderChange}
        filterValue={filterValue}
        increaseOctave={increaseOctave}
        key="control-panel"
        lfoValue={lfoValue}
        octave={octave}
        toggleOscillator={toggleOscillator}
        synthParams={synthParams}
      />
      <Keyboard key="keyboard" keyPress={keyPress} octave={octave} />
    </div>
  );
}

OuterCasing.propTypes = {
  decreaseOctave: PropTypes.func,
  envelopeSliderChange: PropTypes.func,
  filterValue: PropTypes.number,
  increaseOctave: PropTypes.func,
  keyPress: PropTypes.func,
  lfoValue: PropTypes.number,
  octave: PropTypes.number,
  toggleOscillator: PropTypes.func,
  synthParams: PropTypes.object
};

export default OuterCasing;
