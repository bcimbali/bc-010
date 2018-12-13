// @flow
import PropTypes from "prop-types";
import React from "react";

type Props = {
  abbr: string,
  synthParams: Object,
  toggleOscillator: Function,
  type: string
};

/** Button component for toggling oscillators in the control panel. */
function OscillatorBtn({ abbr, synthParams, toggleOscillator, type }: Props) {
  return (
    <div
      className={`btn-toggle ${
        type === synthParams.oscillator.type ? "btn-selected" : ""
      }`}
      onClick={() => toggleOscillator(type)}
    >
      <p className="btn-text">{abbr}</p>
    </div>
  );
}

OscillatorBtn.propTypes = {
  /** Abbreviation of the oscillator name (eg. "SIN", "SAW", etc.) */
  abbr: PropTypes.string,
  /** Holds all tweakable properties for the Tone.js synth. */
  synthParams: PropTypes.object,
  /** Handles change in oscillator types for Tone.js synth. */
  toggleOscillator: PropTypes.func,
  /** Full name of the oscillator (eg. "sawtooth", "triangle", etc.) */
  type: PropTypes.string
};

export default OscillatorBtn;
