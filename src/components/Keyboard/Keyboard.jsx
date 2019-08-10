// @flow
import React, { Component } from "react";
import { connect } from "react-redux";

import Key from "./../Key";
import PropTypes from "prop-types";
import arrOfKeyObjects from "./../../arrOfKeyObjects.json";
import autoBind from "react-autobind";

type Props = {
  keyPress: Function,
  octave: number,
};

type State = {
  highlightKey: number,
};

/** Filter the keys json data for just white keys */
const whiteKeysArray: Array<Object> = arrOfKeyObjects.filter(key => {
  return key.type === "white";
});

/** Filter the keys json data for just black keys */
const blackKeysArray: Array<Object> = arrOfKeyObjects.filter(key => {
  return key.type === "black";
});

/** Holds all the white and black keys. Also holds the logic for registering
 computer keyboard presses. */
class Keyboard extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    autoBind(this);
    this.state = {
      highlightKey: 0,
    };
  }

  /** Quickly remove the highlighted key in App.jsx state
   * @public
   */
  resetHighlightedKey(): void {
    setTimeout(() => {
      this.setState({ highlightKey: 0 });
    }, 90);
  }

  /** Populate the highlighted key in Keyboard.jsx state with the key pressed.
   * @public
   */
  updateHighlightedKey(keyPressed: number): void {
    this.setState({ highlightKey: keyPressed });
  }

  /** Fires both keyboard click/'highlightedKey' setState functions
   * @public
   */
  highlightKeyPressed(keyPressed: number): void {
    this.updateHighlightedKey(keyPressed);
    this.resetHighlightedKey();
  }

  /** Make sure the correct octave is associated with the synth
   * keyboard key pressed note.
   * @public
   */
  updateNoteOctave(noteObj: Object | void): string | void {
    if (noteObj) {
      let updatedOctave: number = noteObj.startingOctave + this.props.octave;
      let updatedNote: string = noteObj.note + updatedOctave;
      return updatedNote;
    }
  }

  /** Search an array of objects, that contain a `keyCode` property,
   *  to see if it matches a number.
   *  @public
   */
  findKeyCodeMatch(
    numberToFind: number,
    arrayToSearch: Array<Object>,
  ): Object | void {
    return arrayToSearch.find(keyObj => {
      return keyObj.keyCode === numberToFind;
    });
  }

  /** Handler for the (computer) keyboard letter press events:
   * @public
   */
  keyboardLetterPress(event: SyntheticKeyboardEvent<*>): void {
    /** If key pressed matches a key object in arrOfKeyObjects.json array,
     * fire the keyPress() function to sound the synth. */
    this.props.keyPress(
      this.updateNoteOctave(
        this.findKeyCodeMatch(event.charCode, arrOfKeyObjects),
      ),
    );

    /** Also, highlight the keyboard key pressed a bright green.  */
    this.highlightKeyPressed(event.charCode);
  }

  /** Add the keypress event listener to the document before the component mounts. */
  componentWillMount() {
    // $FlowFixMe
    document.addEventListener("keypress", this.keyboardLetterPress);
  }

  /** Remove keypress event listener after component unmounts to prevent
   potential errors and memory leaks. */
  componentWillUnmount() {
    // $FlowFixMe
    document.removeEventListener("keypress", this.keyboardLetterPress);
  }

  render() {
    /** Destructure props */
    const { keyPress, octave } = this.props;

    /** Destructure state */
    const { highlightKey } = this.state;

    /** Logic for parameter of .map key generation below */
    const generateKeys = ({ id, keyCode, letter, note, startingOctave }) => (
      <Key
        displayOctave={octave + startingOctave}
        highlightKey={highlightKey}
        key={`${id}-${note}`}
        keyCode={keyCode}
        keyPress={keyPress}
        letter={letter}
        note={note}
      />
    );

    return (
      <section className="keyboard">
        <section className="black-keys">
          {blackKeysArray.map(generateKeys)}
        </section>
        <section className="white-keys">
          {whiteKeysArray.map(generateKeys)}
        </section>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  octave: state.octave.octave,
});

Keyboard.propTypes = {
  /** Actually plays/fires the note on the Tone.js synth. */
  keyPress: PropTypes.func,
  /** Current octave for the keyboard. Derived from App.jsx state. */
  octave: PropTypes.number,
};

export default connect(mapStateToProps)(Keyboard);
