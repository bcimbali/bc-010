// @flow
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toggleOscillators } from "./../../actions.js";

type Props = {
  abbr: string,
  synthParams: Object,
  toggleOscillators: Function,
  type: string,
  oscType: string,
};

/** Button component for toggling oscillators in the control panel. */
function OscillatorBtn({
  abbr,
  synthParams,
  toggleOscillators,
  type,
  oscType,
}: Props) {
  return (
    <div
      className={`btn-toggle ${type === oscType ? "btn-selected" : ""}`}
      onClick={() => toggleOscillators(type)}
    >
      <p className="btn-text">{abbr}</p>
    </div>
  );
}

const mapStateToProps = state => ({
  oscType: state.synthesizer.synthParams.oscillator.type,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleOscillators,
    },
    dispatch,
  );

OscillatorBtn.propTypes = {
  /** Abbreviation of the oscillator name (eg. "SIN", "SAW", etc.) */
  abbr: PropTypes.string,
  /** Holds all tweakable properties for the Tone.js synth. */
  synthParams: PropTypes.object,
  /** Handles change in oscillator types for Tone.js synth. */
  toggleOscillators: PropTypes.func,
  /** Full name of the oscillator (eg. "sawtooth", "triangle", etc.) */
  type: PropTypes.string,
  /** Full name of the oscillator read from Redux store */
  oscType: PropTypes.string,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OscillatorBtn);
