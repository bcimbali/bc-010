import './App.css';

import React, { Component } from 'react';

import OuterCasing from './components/OuterCasing';
import Tone from 'tone';

class App extends Component {

  constructor(props) {
    super(props);
    this.envelopeSliderChange = this.envelopeSliderChange.bind(this);
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

  // Actually plays the note on the synth:
  keyPress(note) {
    this.synth.triggerAttackRelease(note, "8n");
  }

  // Handles change in oscillator type via btn clicks:
  toggleOscillator(oscType) {
      this.setState({oscillator: oscType});
  }

  // Handles change in envelope sliders in control panel
  envelopeSliderChange(sliderValue) {
    this.setState({attack: sliderValue})
  }
  
  render() {
    // Create a new Tone.js synth on render & update synth timbre based on App.jsx state
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
    console.log('attack value in app.js: ', this.state.attack);

    return (
      <div>
        <h1>bc-010</h1>
        <OuterCasing
          envelopeSliderChange={this.envelopeSliderChange}
          key='outerCasing'
          keyPress={this.keyPress}
          toggleOscillator={this.toggleOscillator}
        />
      </div>
    );
  }
}

export default App;