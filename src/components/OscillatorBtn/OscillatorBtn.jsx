// @flow
import PropTypes from "prop-types";
import React from "react";

type Props = {
  abbr: string,
  oscillator: string,
  toggleOscillator: Function,
  type: string
};

/** Button component for toggling oscillators in the control panel. */
function OscillatorBtn({ abbr, oscillator, toggleOscillator, type }: Props) {
  return (
    <div
      className={`btn-toggle ${type === oscillator ? "btn-selected" : ""}`}
      onClick={() => toggleOscillator(type)}
    >
      <p className="btn-text">{abbr}</p>
    </div>
  );
}

OscillatorBtn.propTypes = {
  abbr: PropTypes.string,
  oscillator: PropTypes.string,
  toggleOscillator: PropTypes.func,
  type: PropTypes.string
};

export default OscillatorBtn;
