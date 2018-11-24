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

  /** Updates state, for a filterParam or synthParam, based on the number
   * passed in from the HTML slider in VerticalSlider.jsx.
   * @public
   */
  envelopeSliderChange(envelopeType: string, sliderValue: number): void {
    let filterParams: Object = Object.assign({}, this.state.filterParams);

    let synthParams: Object = Object.assign({}, this.state.synthParams);

    // Check the envelope type, and update the correct envelope state in App.jsx
    if (envelopeType === "attack") {
      synthParams.envelope.attack = sliderValue;
      this.setState({ synthParams });
    }
    if (envelopeType === "decay") {
      synthParams.envelope.decay = sliderValue;
      this.setState({ synthParams });
    }
    if (envelopeType === "sustain") {
      synthParams.envelope.sustain = sliderValue;
      this.setState({ synthParams });
    }
    if (envelopeType === "release") {
      synthParams.envelope.release = sliderValue;
      this.setState({ synthParams });
    }
    if (envelopeType === "baseFrequency") {
      filterParams.baseFrequency = sliderValue;
      this.setState({ filterParams });
    }
    if (envelopeType === "frequency") {
      filterParams.frequency = sliderValue;
      this.setState({ filterParams });
    }
  }

  render() {
    // Destructure state
    const { filterParams, synthParams, octave } = this.state;

    // Create a new Tone.js filter and route audio to master.
    this.filter = new Tone.AutoFilter(filterParams).toMaster().start();

    // Create a new Tone.js synth and route audio to this.filter
    this.synth = new Tone.Synth(synthParams).connect(this.filter);

    return (
      <div>
        <h1 className="header">bc-010</h1>
        <OuterCasing
          decreaseOctave={this.decreaseOctave}
          envelopeSliderChange={this.envelopeSliderChange}
          filterParams={filterParams}
          increaseOctave={this.increaseOctave}
          key="outerCasing"
          keyPress={this.keyPress}
          octave={octave}
          synthParams={synthParams}
          toggleOscillator={this.toggleOscillator}
        />
      </div>
    );
  }
}

export default App;
