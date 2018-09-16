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
      attack: 0.0001,
      decay: 0.2,
      sustain: 0.2,
      release: 1,
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
  envelopeSliderChange(envelopeType, sliderValue) {
    // Make sure the number passed into Tone.Synth is a float. It will complain if it's a string.
    let sliderValueNumber = parseFloat(sliderValue);

    // Check the envelope type, and update the correct envelope state in App.js
    if (envelopeType === 'attack') {
      this.setState({attack: sliderValueNumber});
    }
    if (envelopeType === 'decay') {
      this.setState({decay: sliderValueNumber});
    }
    if (envelopeType === 'sustain') {
      this.setState({sustain: sliderValueNumber});
    }
    if (envelopeType === 'release') {
      this.setState({release: sliderValueNumber});
    }
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
        "release" : this.state.release
      },
      "portamento" : this.state.portamento
    }).toMaster();
    
    // Console log the synth parameters/state to check that it's updating correctly:
    // console.log('---------------------------------------');
    // console.log('In R E N D E R( )')
    // console.log('- ATTACK is: ', this.synth.envelope.attack);
    // console.log('- DECAY is: ', this.synth.envelope.decay);
    // console.log('- SUSTAIN is: ', this.synth.envelope.sustain);
    // console.log('- RELEASE is: ', this.synth.envelope.release);
    // console.log('this.synth is: ', this.synth);
    // console.log('// RELEASE from this.STATE: ', this.state.release);

    return (
      <div>
        <h1>bc-010</h1>
        <OuterCasing
          attackValue={this.state.attack}
          decayValue={this.state.decay}
          sustainValue={this.state.sustain}
          releaseValue={this.state.release}
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