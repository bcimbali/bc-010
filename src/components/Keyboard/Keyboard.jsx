// @flow
import React, { Component } from "react";

import Key from "./../Key";
import PropTypes from "prop-types";
import autoBind from "react-autobind";
import keys from "./../../keys.json";

type Props = {
  keyPress: Function,
  octave: number
};

type State = {
  highlightKey: number
};

/** Filter the keys json data for just white keys */
const whiteKeysArray: Array<Object> = keys.filter(key => {
  return key.type === "white";
});

/** Filter the keys json data for just black keys */
const blackKeysArray: Array<Object> = keys.filter(key => {
  return key.type === "black";
});

/** Holds all the white and black keys. Also holds the logic for registering
 computer keyboard presses. */
class Keyboard extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    autoBind(this);
    this.state = {
      highlightKey: 0
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

  /** Populate the highlighted key in App.jsx with the key pressed.
   * @public
   */
  updateHighlightedKey(keyPressed: number): void {
    this.setState({ highlightKey: keyPressed });
  }

  /** Fires both keyboard click/'highlightedKey' setState functions
   * @public
   */
  highlightKeyHandler(keyPressed: number): void {
    this.updateHighlightedKey(keyPressed);
    this.resetHighlightedKey();
  }

  /** Make sure the correct octave is associated with the key note
   * @public
   */
  updateNoteOctave(letterNote: Object): string {
    let updatedOctave: number = letterNote.startingOctave + this.props.octave;
    let updatedNote: string = letterNote.note + updatedOctave;
    return updatedNote;
  }

  /** ...handler for the note object
   * @public
   */
  handleNoteObj(letterNote: Object): void {
    let noteClicked: string = this.updateNoteOctave(letterNote);
    this.props.keyPress(noteClicked);
  }

  /** See if the letter pressed object is undefined...
   * @public
   */
  checkForUndefined(letterNote: Object): void {
    if (typeof letterNote !== "undefined") {
      this.handleNoteObj(letterNote);
    }
  }

  /** Handle the (computer) keyboard letter presses:
   * @public
   */
  keyboardLetterPress(event: SyntheticKeyboardEvent<*>): void {
    // Save character code in variable:
    let keyPressed: number = event.charCode;

    /** Filter the array for the object that contains key pressed charCode
     and return the object for that keyboard note. */
    const letterNote: Object = keys.find(key => {
      return key.keyCode === keyPressed;
    });

    /** Make sure the result from the filter isn't undefined. If it's not...
     ... then call the synth keyPress function and pass in the keyboard note. */
    this.checkForUndefined(letterNote);

    /** Call function to highlight the keyboard letter pressed */
    this.highlightKeyHandler(keyPressed);
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

    return (
      // Could we de-duplicate rendering code across the two key types here?
      // Can use nth child for css so that it doesn't have to be computed
      <div className="keyboard">
        <div className="black-keys">
          {blackKeysArray.map(
            ({ id, keyCode, letter, note, startingOctave }) => (
              <Key
                displayOctave={octave + startingOctave}
                highlightKey={highlightKey}
                key={`${id}-${note}`}
                keyCode={keyCode}
                keyPress={keyPress}
                letter={letter}
                note={note}
              />
            )
          )}
        </div>
        <div className="white-keys">
          {whiteKeysArray.map(
            ({ id, keyCode, letter, note, startingOctave }) => (
              <Key
                displayOctave={octave + startingOctave}
                highlightKey={highlightKey}
                key={`${id}-${note}`}
                keyCode={keyCode}
                keyPress={keyPress}
                letter={letter}
                note={note}
              />
            )
          )}
        </div>
      </div>
    );
  }
}

Keyboard.propTypes = {
  keyPress: PropTypes.func,
  octave: PropTypes.number
};

export default Keyboard;
