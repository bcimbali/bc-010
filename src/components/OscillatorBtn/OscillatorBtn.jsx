// @flow
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";
import { bindActionCreators } from "redux";
import { toggleOscillators } from "./actions.js";

const ButtonHousing = styled.div`
  align-items: center;
  align-self: center;
  border: 2px solid #40522D;
  color: #40522D;
  display: flex;
  height: 5vh;
  justify-content: center;
  padding: 0.25vw;
  text-align: center;
  vertical-align: middle;

  :hover {
    background-color: #00bfa5;
    color: white;
    cursor: pointer;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: #00bb10;
      color: white;
    `};
`;

const ButtonText = styled.p`
  font-size: 1.5vw;
  font-weight: bold;
`;

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
  oscType,
  synthParams,
  toggleOscillators,
  type,
}: Props) {
  return (
    <ButtonHousing
      isSelected={type === oscType}
      onClick={() => toggleOscillators(type)}
    >
      <ButtonText>{abbr}</ButtonText>
    </ButtonHousing>
  );
}

const mapStateToProps = state => ({
  oscType: state.synthesizer.oscillator.type,
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
  /** Full name of the oscillator read from Redux store */
  oscType: PropTypes.string,
  /** Holds all tweakable properties for the Tone.js synth. */
  synthParams: PropTypes.object,
  /** Handles change in oscillator types for Tone.js synth. */
  toggleOscillators: PropTypes.func,
  /** Full name of the oscillator (eg. "sawtooth", "triangle", etc.) */
  type: PropTypes.string,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OscillatorBtn);
