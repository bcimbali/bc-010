// @flow
import OctaveHeader from "./../OctaveHeader";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { decrementOctave, incrementOctave } from "./actions";
import { bindActionCreators } from "redux";

const Container = styled.section`
  align-self: center;
  border: 2px solid #40522d;
  display: flex;
  flex-direction: column;
`;

const OctaveButton = styled.div`
  :hover {
    background-color: #00bfa5;
    color: white;
    cursor: pointer;
  }
`;

const OctaveControls = styled.div`
  color: #40522d;
  display: flex;
  font-size: 2vw;
  justify-content: space-between;
`;

type Props = {
  decrementOctave: Function,
  incrementOctave: Function,
  octave: number,
};

/** Holds the octave display in the control panel. */
function OctaveContainer({ decrementOctave, incrementOctave, octave }: Props) {
  return (
    <Container>
      <OctaveHeader />
      <OctaveControls>
        <OctaveButton onClick={decrementOctave}>-</OctaveButton>
        <div>{octave}</div>
        <OctaveButton onClick={incrementOctave}>+</OctaveButton>
      </OctaveControls>
    </Container>
  );
}

const mapStateToProps = state => ({
  octave: state.octave.octave,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      decrementOctave,
      incrementOctave,
    },
    dispatch,
  );

OctaveContainer.propTypes = {
  /** Lowers octave by 1 */
  decrementOctave: PropTypes.func,
  /** Raises octave by 1 */
  incrementOctave: PropTypes.func,
  /** Current octave for the keyboard. Derived from App.jsx state. */
  octave: PropTypes.number,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OctaveContainer);
