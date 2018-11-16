// @flow
import "./reset.css";
import "./App.css";

import React, { Component } from "react";

import OuterCasing from "./components/OuterCasing";
import Tone from "tone";
import autoBind from "react-autobind";

type Props = {};

type State = {
  attack: number,
  decay: number,
  sustain: number,
  release: number,
  octave: number,
  oscillator: string,
  portamento: number,
  filterParams: Object
};

class App extends Component<Props, State> {
  constructor() {
    super();
    autoBind(this);
    this.state = {
      attack: 0.0001,
      decay: 0.2,
      sustain: 0.2,
      release: 1,
      octave: 5,
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
    };
  }

  /* Flow would complain this.synth and this.filter weren't defined below, in keyPress(), 
    so this solved it. Maybe this.synth and this.filter should be declared here first? */
  synth = {};
  filter = {};

  // Actually plays the note on the synth:
  keyPress: Function;
  keyPress(note: string) {
    this.synth.triggerAttackRelease(note, "8n");
  }

  // Handles change in oscillator type via btn clicks:
  toggleOscillator: Function;
  toggleOscillator(oscType: string) {
    this.setState({ oscillator: oscType });
  }

  decreaseOctave: Function;
  decreaseOctave() {
    this.setState(prevState => ({
      octave: prevState.octave - 1
    }));
  }

  // Start of function to raise keyboard octave
  increaseOctave: Function;
  increaseOctave() {
    this.setState(prevState => ({
      octave: prevState.octave + 1
    }));
  }

  // Handles change in envelope sliders in control panel
  envelopeSliderChange: Function;
  envelopeSliderChange(envelopeType: string, sliderValue: number) {
    // Make sure the number passed into Tone.Synth is a float. It will complain if it's a string.
    let sliderValueNumber = parseFloat(sliderValue);
    let filterParams = Object.assign({}, this.state.filterParams);

    // Check the envelope type, and update the correct envelope state in App.jsx
    if (envelopeType === "attack") {
      this.setState({ attack: sliderValueNumber });
    }
    if (envelopeType === "decay") {
      this.setState({ decay: sliderValueNumber });
    }
    if (envelopeType === "sustain") {
      this.setState({ sustain: sliderValueNumber });
    }
    if (envelopeType === "release") {
      this.setState({ release: sliderValueNumber });
    }
    if (envelopeType === "filter") {
      filterParams.baseFrequency = sliderValueNumber;
      this.setState({ filterParams });
    }
    if (envelopeType === "lfo") {
      filterParams.frequency = sliderValueNumber;
      this.setState({ filterParams });
    }
  }

  render() {
    // Destructure state and pull out nested params in filterParams
    const {
      attack,
      decay,
      sustain,
      release,
      filterParams,
      filterParams: { baseFrequency },
      filterParams: { frequency },
      octave,
      oscillator,
      portamento
    } = this.state;

    // Add filter and connect to synth
    this.filter = new Tone.AutoFilter(filterParams).toMaster().start();

    // Create a new Tone.js synth on render & update synth timbre based on App.jsx state
    this.synth = new Tone.Synth({
      oscillator: {
        type: oscillator
      },
      envelope: {
        attack: attack,
        decay: decay,
        sustain: sustain,
        release: release
      },
      portamento: portamento
    }).connect(this.filter);

    return (
      <div>
        <h1 className="header">bc-010</h1>
        <OuterCasing
          attackValue={attack}
          decayValue={decay}
          sustainValue={sustain}
          releaseValue={release}
          decreaseOctave={this.decreaseOctave}
          envelopeSliderChange={this.envelopeSliderChange}
          filterValue={baseFrequency}
          increaseOctave={this.increaseOctave}
          key="outerCasing"
          keyPress={this.keyPress}
          lfoValue={frequency}
          octave={octave}
          oscillator={oscillator}
          toggleOscillator={this.toggleOscillator}
        />
      </div>
    );
  }
}

export default App;
