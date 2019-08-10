// @flow
import OctaveHeader from "./../OctaveHeader";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { decrementOctave, incrementOctave } from "./actions";
import { bindActionCreators } from "redux";

type Props = {
  adjustOctave: Function,
  decrementOctave: Function,
  incrementOctave: Function,
  octave: number,
};

/** Holds the octave display in the control panel. */
function OctaveContainer({
  adjustOctave,
  decrementOctave,
  incrementOctave,
  octave,
}: Props) {
  return (
    <section className="octave-container">
      <OctaveHeader />
      <div className="octave-controls">
        <div className="octave-btn" onClick={decrementOctave}>
          -
        </div>
        <div>{octave}</div>
        <div className="octave-btn" onClick={incrementOctave}>
          +
        </div>
      </div>
    </section>
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
  /** Moves ocatve range of keyboard notes up or down */
  adjustOctave: PropTypes.func,
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
