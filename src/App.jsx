import './App.css';

import React, { Component } from 'react';

import Keyboard from './components/Keyboard';
import Tone from 'tone';
import notes from './notes.json';

class App extends Component {

  constructor(props) {
    super(props);
    this.keyPress = this.keyPress.bind(this);
    this.state = {
      attack: 0.001,
      decay: 0.2,
      sustain: 0.2,
      release: 1.5,
      attackCurve: "exponential",
      harmonicity: 0.5,
      modulationType: "sine",
      notes,
      oscillator: "amtriangle",
      portamento: 0.05
    }
  }

  componentDidMount() {
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
  }

  keyPress(note) {
    this.synth.triggerAttackRelease(note, "8n");
  }
  
  render() {
    
    return (
      <div>
        <header>
          <h1>bc-010</h1>
          <Keyboard 
            keyPress={this.keyPress}
          />
        </header>
      </div>
    );
  }
}

export default App;
