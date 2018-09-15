import './App.css';

import React, { Component } from 'react';

import OuterCasing from './components/OuterCasing';
import Tone from 'tone';

class App extends Component {

  constructor(props) {
    super(props);
    this.keyPress = this.keyPress.bind(this);
    this.toggleOscillator = this.toggleOscillator.bind(this);
    this.state = {
      attack: 0.001,
      decay: 0.2,
      sustain: 0.2,
      release: 1.5,
      oscillator: "square",
      portamento: 0.05
    }
  }

  // Function to actually play the note on the synth:
  keyPress(note) {
    this.synth.triggerAttackRelease(note, "8n");
  }

  // Function to handle the oscillator toggle:
  toggleOscillator(oscType) {
    // alert('in toggle oscillator');
      this.setState({oscillator: oscType});
  }
  
  render() {
    // Create a new synth on render & updates synth timbre based on state
    this.synth = new Tone.Synth({
      "oscillator" : {
        "type" : this.state.oscillator,
      },
      "envelope" : {
        "attack" : this.state.attack,
        "decay" : this.state.decay,
        "sustain" : this.state.sustain,
        "release" : this.state.release,
      },
      "portamento" : this.state.portamento
    }).toMaster();
    
    // Console log the synth parameters/state to check that it's updating correctly:
    console.log('this.synth is, in render: ', this.synth);

    return (
      <div>
        <h1>bc-010</h1>
        <OuterCasing
          key='outerCasing'
          keyPress={this.keyPress}
          toggleOscillator={this.toggleOscillator}
        />
      </div>
    );
  }
}

export default App;