import './reset.css';
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
      oscillator: "sawtooth",
      portamento: 0.05,
      filterParams: {
        frequency: 0,
        type: "sine",
        depth: 1,
        baseFrequency: 500,
        octaves: 2.6,
        filter: {
                  type: "lowpass",
                  rolloff: -12,
                  Q: 1
                }
        }
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
    let filterParams = Object.assign({}, this.state.filterParams);

    // Check the envelope type, and update the correct envelope state in App.jsx
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
    if (envelopeType === 'filter') {
      filterParams.baseFrequency = sliderValueNumber;
      this.setState({filterParams});
    }
    if (envelopeType === 'lfo') {
      filterParams.frequency = sliderValueNumber;
      this.setState({filterParams});
    }
  }
  
  render() {
    // Destructure state
    const {
      attack,
      decay,
      sustain,
      release,
      filterParams,
      oscillator,
      portamento
    } = this.state;
    
    // Start of adding a filter to synth
    this.filter = new Tone.AutoFilter(filterParams).toMaster().start();

    // Create a new Tone.js synth on render & update synth timbre based on App.jsx state
    this.synth = new Tone.Synth({
      "oscillator" : {
        "type" : oscillator,
      },
      "envelope" : {
        "attack" : attack,
        "decay" : decay,
        "sustain" : sustain,
        "release" : release
      },
      "portamento" : portamento
    }).connect(this.filter);

    return (
      <div >
        <h1 className="header">bc-010</h1>
        <OuterCasing
          attackValue={attack}
          decayValue={decay}
          sustainValue={sustain}
          releaseValue={release}
          envelopeSliderChange={this.envelopeSliderChange}
          filterValue={filterParams.baseFrequency}
          key='outerCasing'
          keyPress={this.keyPress}
          lfoValue={filterParams.frequency}
          toggleOscillator={this.toggleOscillator}
        />
      </div>
    );
  }
}

export default App;