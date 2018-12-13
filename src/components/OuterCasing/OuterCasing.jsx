// @flow
import ControlPanel from "./../ControlPanel";
import Keyboard from "./../Keyboard";
import PropTypes from "prop-types";
import React from "react";

type Props = {
  adjustOctave: Function,
  envelopeSliderChange: Function,
  filterParams: Object,
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
  /** Moves ocatve range of keyboard notes up or down */
  adjustOctave: PropTypes.func,
  /** Takes in a number & envelope name. Updates App.jsx state for the envelope name with the passed in number. */
  envelopeSliderChange: PropTypes.func,
  /** Holds all tweakable properties for the Tone.js filter. */
  filterParams: PropTypes.object,
  /** Actually plays/fires the note on the Tone.js synth. */
  keyPress: PropTypes.func,
  /** Current octave for the keyboard. Derived from App.jsx state. */
  octave: PropTypes.number,
  /** Holds all tweakable properties for the Tone.js synth. */
  synthParams: PropTypes.object,
  /** Handles change in oscillator types for Tone.js synth. */
  toggleOscillator: PropTypes.func
};

export default OuterCasing;
