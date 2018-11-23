// @flow
import "./reset.css";
import "./App.css";

import React, { Component } from "react";

import OuterCasing from "./components/OuterCasing";
import Tone from "tone";
import autoBind from "react-autobind";

type Props = {};

type State = {
  octave: number,
  synthParams: Object,
  filterParams: Object
};

class App extends Component<Props, State> {
  constructor() {
    super();
    autoBind(this);
    this.state = {
      octave: 5,
      synthParams: {
        oscillator: {
          type: "sawtooth"
        },
        envelope: {
          attack: 0.0001,
          decay: 0.2,
          sustain: 0.2,
          release: 1
        },
        portamento: 0.05
      },
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

  /** Flow would complain this.synth and this.filter weren't defined below, in keyPress(),
   so this solved it. Maybe this.synth and this.filter should be declared here first? */
  synth: Object = {};
  filter: Object = {};

  /** Actually plays the note on the synth: */
  keyPress(note: string | void): void {
    this.synth.triggerAttackRelease(note, "8n");
  }

  /** Handles change in oscillator type via btn clicks: */
  toggleOscillator(oscType: string): void {
    let synthParams: Object = Object.assign({}, this.state.synthParams);
    synthParams.oscillator.type = oscType;
    this.setState({ synthParams });
  }

  /** Lower keyboard octave */
  decreaseOctave(): void {
    this.setState(prevState => ({
      octave: prevState.octave - 1
    }));
  }

  /** Raise keyboard octave */
  increaseOctave(): void {
    this.setState(prevState => ({
      octave: prevState.octave + 1
    }));
  }

  /** Handles change in envelope sliders in control panel */
  envelopeSliderChange(envelopeType: string, sliderValue: number): void {
    /** Make sure the number passed into Tone.Synth is a float.
     It will complain if it's a string. */
    let sliderValueNumber: number = parseFloat(sliderValue);

    let filterParams: Object = Object.assign({}, this.state.filterParams);

    let synthParams: Object = Object.assign({}, this.state.synthParams);

    // Check the envelope type, and update the correct envelope state in App.jsx
    if (envelopeType === "attack") {
      synthParams.envelope.attack = sliderValueNumber;
      this.setState({ synthParams });
    }
    if (envelopeType === "decay") {
      synthParams.envelope.decay = sliderValueNumber;
      this.setState({ synthParams });
    }
    if (envelopeType === "sustain") {
      synthParams.envelope.sustain = sliderValueNumber;
      this.setState({ synthParams });
    }
    if (envelopeType === "release") {
      synthParams.envelope.release = sliderValueNumber;
      this.setState({ synthParams });
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
      filterParams,
      filterParams: { baseFrequency },
      filterParams: { frequency },
      synthParams,
      octave
    } = this.state;

    // Add filter, connect to synth, and route audio to master.
    this.filter = new Tone.AutoFilter(filterParams).toMaster().start();

    // Create a new Tone.js synth on render & update synth timbre based on App.jsx state
    this.synth = new Tone.Synth(synthParams).connect(this.filter);

    return (
      <div>
        <h1 className="header">bc-010</h1>
        <OuterCasing
          decreaseOctave={this.decreaseOctave}
          envelopeSliderChange={this.envelopeSliderChange}
          filterValue={baseFrequency}
          increaseOctave={this.increaseOctave}
          key="outerCasing"
          keyPress={this.keyPress}
          lfoValue={frequency}
          octave={octave}
          synthParams={synthParams}
          toggleOscillator={this.toggleOscillator}
        />
      </div>
    );
  }
}

export default App;
