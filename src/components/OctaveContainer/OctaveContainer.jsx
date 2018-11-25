// @flow
import OctaveHeader from "./../OctaveHeader";
import PropTypes from "prop-types";
import React from "react";

type Props = {
  decreaseOctave: Function,
  increaseOctave: Function,
  octave: number
};

/** Holds the octave display in the control panel. */
function OctaveContainer({ decreaseOctave, increaseOctave, octave }: Props) {
  return (
    <div className="octave-container">
      <OctaveHeader />
      <div className="octave-controls">
        <div className="octave-btn" onClick={() => decreaseOctave()}>
          -
        </div>
        <div>{octave}</div>
        <div className="octave-btn" onClick={() => increaseOctave()}>
          +
        </div>
      </div>
    </div>
  );
}

OctaveContainer.propTypes = {
  decreaseOctave: PropTypes.func,
  increaseOctave: PropTypes.func,
  octave: PropTypes.number
};

export default OctaveContainer;
