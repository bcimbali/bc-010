// @flow
import OctaveHeader from "./../OctaveHeader";
import PropTypes from "prop-types";
import React from "react";
import { connect } from 'react-redux';
import { incrementOctave } from './actions';
import { bindActionCreators } from 'redux';

type Props = {
  adjustOctave: Function,
  octave: number
};

/** Holds the octave display in the control panel. */
function OctaveContainer({ adjustOctave, octave, incrementOctave }: Props) {
  return (
    <section className="octave-container">
      <OctaveHeader />
      <div className="octave-controls">
        <div className="octave-btn" onClick={incrementOctave}>
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
  octave: state.octaveContainer.octave,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  incrementOctave,
}, dispatch);

OctaveContainer.propTypes = {
  /** Moves ocatve range of keyboard notes up or down */
  adjustOctave: PropTypes.func,
  /** Current octave for the keyboard. Derived from App.jsx state. */
  octave: PropTypes.number
};

export default connect(mapStateToProps, mapDispatchToProps)(OctaveContainer);
