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
  adjustOctave: PropTypes.func,
  octave: PropTypes.number
};

export default OctaveContainer;
