import React, { Component } from 'react';

import BlackKey from './../BlackKey';
import WhiteKey from './../WhiteKey';
import keys from './../../keys.json';

class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.fireNote = this.fireNote.bind(this);
    this.keyboardLetterPress = this.keyboardLetterPress.bind(this);
    this.highlightKeyHandler = this.highlightKeyHandler.bind(this);
    this.resetHighlightedKey = this.resetHighlightedKey.bind(this);
    this.updateHighlightedKey = this.updateHighlightedKey.bind(this);
    this.state = {
      highlightKey: 0
    }
  }
  
  resetHighlightedKey() {
    setTimeout(() => {
      this.setState({highlightKey: 0})
    }, 90);
  }

  updateHighlightedKey(keyPressed) {
    this.setState({highlightKey: keyPressed});
  }

  // Fires both keyboard click/'highlightedKey' setState functions
  highlightKeyHandler(keyPressed) {
    this.updateHighlightedKey(keyPressed);
    this.resetHighlightedKey();
  }

  fireNote(letterNote) {
    const {keyPress} = this.props;
    if (typeof letterNote !== 'undefined') {
      keyPress(letterNote.note);
    }
  }

  // Handle the (computer) keyboard letter presses:
  keyboardLetterPress(event) {
    // Save character code in variable:
    let keyPressed = event.charCode;

    // Filter the array for the object that contains key pressed charCode
    const result = keys.filter((key) =>  {
      return key.keyCode === keyPressed
    })

    // Save the note object to this variable:
    let letterNote = result[0];

    // Make sure the result from the filter isn't undefined. If it's not...
    // ... then call the synth keyPress function and pass in the keyboard note.
    this.fireNote(letterNote);

    this.highlightKeyHandler(keyPressed);
  }

  // Add the keypress event listener to the document before the component mounts.
  componentWillMount() {
    document.addEventListener('keypress',this.keyboardLetterPress);
  }

  render() {
    // Filter the keys data for just white keys
    const whiteKeysArray = keys.filter((key) => {
      return key.type === 'white'
    })

    // Filter the keys data for just black keys
    const blackKeysArray = keys.filter((key) => {
      return key.type === 'black'
    })

    // Destructure props
    const {
      keyPress,
    } = this.props;

    // Destructure state
    const {
      highlightKey
    } = this.state;
    
    return(
      <div className="keyboard">
        <div className="black-keys">
          {blackKeysArray.map(({id, keyCode, letter, note}) => (
            <BlackKey
            id={id}
            key={`${id}-${note}`}
            keyCode={keyCode}
            keyPress={keyPress}
            highlightKey={highlightKey}
            letter={letter}
            note={note}
            />
          ))}
        </div>
        <div className="white-keys">
          {whiteKeysArray.map(({id, keyCode, letter, note,}) => (
            <WhiteKey 
            highlightKey={highlightKey}
            key={`${id}-${note}`}
            keyCode={keyCode}
            keyPress={keyPress}
            letter={letter}
            note={note}
            />
          ))}
        </div>
      </div>
    );
  }
  
};

export default Keyboard;