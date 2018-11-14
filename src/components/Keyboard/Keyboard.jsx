// @flow
import React, { Component } from "react";

import BlackKey from "./../BlackKey";
import PropTypes from "prop-types";
import WhiteKey from "./../WhiteKey";
import keys from "./../../keys.json";

type Props = {
  keyPress: Function,
  octave: number
};

type State = {
  highlightKey: number
};

let boundMethods = [
  "isObjUndefined",
  "keyboardLetterPress",
  "handleNoteObj",
  "highlightKeyHandler",
  "resetHighlightedKey",
  "updateHighlightedKey",
  "updateNoteOctave"
];

class Keyboard extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // Dynamically bind methods from boundMethods array above
    for (let methodName of boundMethods) {
      // $FlowFixMe
      this[methodName] = this[methodName].bind(this);
    }
    this.state = {
      highlightKey: 0
    };
  }

  // The `Function` declaration is essentially `any` constrained down to just functions
  // (meaning essentially resetHighlightedKey(...args: Array<any>) : any)
  // can we do anything to get some more refined types here and in the other declarations?
  resetHighlightedKey: Function;
  resetHighlightedKey() {
    setTimeout(() => {
      this.setState({ highlightKey: 0 });
    }, 90);
  }

  updateHighlightedKey: Function;
  updateHighlightedKey(keyPressed: number) {
    this.setState({ highlightKey: keyPressed });
  }

  // Fires both keyboard click/'highlightedKey' setState functions
  highlightKeyHandler: Function;
  highlightKeyHandler(keyPressed: number) {
    this.updateHighlightedKey(keyPressed);
    this.resetHighlightedKey();
  }

  // Make sure the correct octave is associated with the key note
  updateNoteOctave: Function;
  updateNoteOctave(letterNote: Object) {
    let updatedOctave = letterNote.startingOctave + this.props.octave;
    let updatedNote = letterNote.note + updatedOctave;
    return updatedNote;
  }

  // ...handler for the note object
  handleNoteObj: Function;
  handleNoteObj(letterNote: Object) {
    let noteClicked = this.updateNoteOctave(letterNote);
    this.props.keyPress(noteClicked);
  }

  // Can we find a more clear name for this function?
  // See if the letter pressed object is undefined...
  isObjUndefined: Function;
  isObjUndefined(letterNote: Object) {
    if (typeof letterNote !== "undefined") {
      this.handleNoteObj(letterNote);
    }
  }

  // Handle the (computer) keyboard letter presses:
  keyboardLetterPress: Function;
  keyboardLetterPress(event: SyntheticKeyboardEvent<*>) {
    // Save character code in variable:
    let keyPressed = event.charCode;

    // Filter the array for the object that contains key pressed charCode
    // and return just the value
    const letterNote = keys.find(key => {
      return key.keyCode === keyPressed;
    });

    // Make sure the result from the filter isn't undefined. If it's not...
    // ... then call the synth keyPress function and pass in the keyboard note.
    this.isObjUndefined(letterNote);

    // Call function to highlight the keyboard letter pressed
    this.highlightKeyHandler(keyPressed);
  }

  // Add the keypress event listener to the document before the component mounts.
  componentWillMount() {
    document.addEventListener("keypress", this.keyboardLetterPress);
  }

  render() {
    // Do we need to refilter these on every render?
    // Filter the keys data for just white keys
    const whiteKeysArray = keys.filter(key => {
      return key.type === "white";
    });

    // Filter the keys data for just black keys
    const blackKeysArray = keys.filter(key => {
      return key.type === "black";
    });

    // Destructure props
    const { keyPress, octave } = this.props;

    // Destructure state
    const { highlightKey } = this.state;

    return (
      // Could we deduplicate rendering code across the two key types here?
      // Can use nth child for css so that it doesn't have to be computed
      <div className="keyboard">
        <div className="black-keys">
          {blackKeysArray.map(
            ({ id, keyCode, letter, note, startingOctave }) => (
              <BlackKey
                displayOctave={octave + startingOctave}
                id={id}
                key={`${id}-${note}`}
                keyCode={keyCode}
                keyPress={keyPress}
                highlightKey={highlightKey}
                letter={letter}
                note={note}
                // Is octave used in the component?
                octave={octave}
              />
            )
          )}
        </div>
        <div className="white-keys">
          {whiteKeysArray.map(
            ({ id, keyCode, letter, note, startingOctave }) => (
              <WhiteKey
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
