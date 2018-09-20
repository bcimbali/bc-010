import BlackKey from './../BlackKey';
import React, { Component } from 'react';
import WhiteKey from './../WhiteKey';
import blackKeys from './../../blackKeys.json';
import whiteKeys from './../../whiteKeys.json';

class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.keyboardLetterPress = this.keyboardLetterPress.bind(this);
  }
  
  // Handle the (computer) keyboard letter presses
  keyboardLetterPress(event) {
    // Save character 
    let keyPressed = event.charCode;
    // Log the character code to the console
    console.log(keyPressed);

    // Filter the array for the object that contains
    const result = whiteKeys.filter((key) =>  {
      return key.keyCode === keyPressed
    })

    let letterNote = result[0].note;


    console.log('letternote ', letterNote); 

    // Call the synth keyPress function and pass in the keyboard note.
    this.props.keyPress(letterNote);
  }

  // Add the keypress event listener before the component mounts.
  componentWillMount() {
    document.addEventListener('keypress',this.keyboardLetterPress);
  }

  render() {
    return(
      <div className="keyboard">
        <div className="black-keys">
          {blackKeys.map(note => (
            <BlackKey
            id={note.id}
            key={`${note.id}-${note.note}`}
            keyPress={this.props.keyPress}
            note={note.note}
            />
          ))}
        </div>
        <div className="white-keys">
          {whiteKeys.map(note => (
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