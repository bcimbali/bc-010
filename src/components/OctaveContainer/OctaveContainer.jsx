// @flow
import OctaveHeader from "./../OctaveHeader";
import PropTypes from "prop-types";
import React from "react";

type Props = {
  adjustOctave: Function,
  octave: number
};

/** Holds the octave display in the control panel. */
function OctaveContainer({ adjustOctave, octave }: Props) {
  return (
    <div className="octave-container">
      <OctaveHeader />
      <div className="octave-controls">
        <div className="octave-btn" onClick={() => adjustOctave(-1)}>
          -
        </div>
        <div>{octave}</div>
        <div className="octave-btn" onClick={() => adjustOctave(1)}>
          +
        </div>
      </div>
    </div>
  );
}

OctaveContainer.propTypes = {
  /** Moves ocatve range of keyboard notes up or down */
  adjustOctave: PropTypes.func,
  /** Current octave for the keyboard. Derived from App.jsx state. */
  octave: PropTypes.number
};

export default OctaveContainer;
