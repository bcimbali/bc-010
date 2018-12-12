// @flow
import ControlPanel from "./../ControlPanel";
import Keyboard from "./../Keyboard";
import PropTypes from "prop-types";
import React from "react";

type Props = {
  adjustOctave: Function,
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
  adjustOctave,
  envelopeSliderChange,
  filterParams,
  keyPress,
  octave,
  synthParams,
  toggleOscillator
}: Props) {
  return (
    <div className="outerCasing">
      <ControlPanel
        adjustOctave={adjustOctave}
        envelopeSliderChange={envelopeSliderChange}
        filterParams={filterParams}
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
  adjustOctave: PropTypes.func,
  envelopeSliderChange: PropTypes.func,
  filterParams: PropTypes.object,
  keyPress: PropTypes.func,
  octave: PropTypes.number,
  synthParams: PropTypes.object,
  toggleOscillator: PropTypes.func
};

export default OuterCasing;
