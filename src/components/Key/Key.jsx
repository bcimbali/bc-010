// @flow
import PropTypes from "prop-types";
import React from "react";

type Props = {
  displayOctave: number,
  highlightKey: number,
  keyCode: number,
  keyPress: Function,
  letter: string,
  note: string
};

/** Component for the keys on keyboard. This is reused to make
 * both black and white keys.
 */
function Key({
  displayOctave,
  highlightKey,
  keyCode,
  keyPress,
  letter,
  note
}: Props) {
  let octaveNote: string = note + displayOctave;
  return (
    <div
      className={`key ${highlightKey === keyCode ? "keyboard-click" : ""}`}
      onClick={() => keyPress(octaveNote)}
    >
      <div className="key-display">
        <div>
          {note}
          {displayOctave}
        </div>
        <div className="letter-name">
          <p>{letter}</p>
        </div>
      </div>
    </div>
  );
}

Key.propTypes = {
  displayOctave: PropTypes.number,
  highlightKey: PropTypes.number,
  keyCode: PropTypes.number,
  keyPress: PropTypes.func.isRequired,
  letter: PropTypes.string,
  note: PropTypes.string
};

export default Key;