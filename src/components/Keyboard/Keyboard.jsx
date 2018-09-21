import React, { Component } from 'react';

import BlackKey from './../BlackKey';
import WhiteKey from './../WhiteKey';
import keys from './../../keys.json';

class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.keyboardLetterPress = this.keyboardLetterPress.bind(this);
  }
  
  // Handle the (computer) keyboard letter presses:
  keyboardLetterPress(event) {
    
    // Save character code in variable:
    let keyPressed = event.charCode;

    // Filter the array for the object that contains
    const result = keys.filter((key) =>  {
      return key.keyCode === keyPressed
    })

    // Save the note object to this variable:
    let letterNote = result[0];

    // Make sure the result from the filter isn't undefined. If it's not...
    // ... then call the synth keyPress function and pass in the keyboard note.
    if (typeof letterNote !== 'undefined') {
      this.props.keyPress(letterNote.note);
    }

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
    
    return(
      <div className="keyboard">
        <div className="black-keys">
          {blackKeysArray.map(note => (
            <BlackKey
            id={note.id}
            key={`${note.id}-${note.note}`}
            keyPress={this.props.keyPress}
            note={note.note}
            />
          ))}
        </div>
        <div className="white-keys">
          {whiteKeysArray.map(note => (
            <WhiteKey 
            key={`${note.id}-${note.note}`}
            keyPress={this.props.keyPress}
            note={note.note}
            />
          ))}
        </div>
      </div>
    );
  }
  
};

export default Keyboard;