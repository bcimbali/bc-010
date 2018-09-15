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
      attackCurve: "exponential",
      harmonicity: 0.5,
      modulationType: "sine",
      oscillator: "amtriangle",
      portamento: 0.05
    }
  }

  keyPress(note) {
    this.synth.triggerAttackRelease(note, "8n");
  }

  toggleOscillator() {
    // alert('in toggle oscillator');
    if (this.state.oscillator === 'amtriangle') {
      this.setState({oscillator: 'triangle'});
    }
    if (this.state.oscillator === 'triangle') {
      this.setState({oscillator: 'amtriangle'});
    }
  }
  
  render() {
    this.synth = new Tone.Synth({
      "oscillator" : {
        "type" : this.state.oscillator,
        "harmonicity" : this.state.harmonicity,
        "modulationType" : this.state.modulationType
      },
      "envelope" : {
        "attackCurve" : this.state.attackCurve,
        "attack" : this.state.attack,
        "decay" : this.state.decay,
        "sustain" : this.state.sustain,
        "release" : this.state.release,
      },
      "portamento" : this.state.portamento
    }).toMaster();
    
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