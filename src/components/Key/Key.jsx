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
  /** Display the correct octave after its been updated in with the adjustOctave function. */
  displayOctave: PropTypes.number,
  /** Number of the Char Code for the currently pressed key on the keybaord - it's stored in Keyboard.jsx state. */
  highlightKey: PropTypes.number,
  /** Char code that corresponds to that note on the synthesizer. */
  keyCode: PropTypes.number,
  /** Actually plays/fires the note on the Tone.js synth. */
  keyPress: PropTypes.func.isRequired,
  /** Letter on the computer keyboard that corresponds to that note on the synthesizer. */
  letter: PropTypes.string,
  /** Musical note for that key (eg. "Db", "E", "Bb", etc.) */
  note: PropTypes.string
};

export default Key;
