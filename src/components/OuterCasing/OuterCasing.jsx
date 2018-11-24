// @flow
import ControlPanel from "./../ControlPanel";
import Keyboard from "./../Keyboard";
import PropTypes from "prop-types";
import React from "react";

type Props = {
  decreaseOctave: Function,
  envelopeSliderChange: Function,
  filterParams: Object,
  increaseOctave: Function,
  keyPress: Function,
  octave: number,
  synthParams: Object,
  toggleOscillator: Function
};

/** This holds everything. This is just one step down from App.jsx. */
function OuterCasing({
  decreaseOctave,
  envelopeSliderChange,
  filterParams,
  increaseOctave,
  keyPress,
  octave,
  synthParams,
  toggleOscillator
}: Props) {
  return (
    <div className="outerCasing">
      <ControlPanel
        decreaseOctave={decreaseOctave}
        envelopeSliderChange={envelopeSliderChange}
        filterParams={filterParams}
        increaseOctave={increaseOctave}
        key="control-panel"
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
  filterParams: PropTypes.object,
  increaseOctave: PropTypes.func,
  keyPress: PropTypes.func,
  octave: PropTypes.number,
  synthParams: PropTypes.object,
  toggleOscillator: PropTypes.func
};

export default OuterCasing;
