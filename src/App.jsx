// @flow
import "./reset.css";
import "./App.css";

import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import OuterCasing from "./components/OuterCasing";
import Tone from "tone";
import autoBind from "react-autobind";

const initialState = {
  count: 0
};

const middleware = [logger];

function reducer(state = initialState, action) {
  console.log("reducer", state, action);
  return state;
}

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

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

  /** Declare synth and filter */
  synth: Object = {};
  filter: Object = {};

  /** Actually plays/sounds the note on the synth: */
  keyPress(note: string | void): void {
    this.synth.triggerAttackRelease(note, "8n");
  }

  /** Handles change in oscillator type via btn clicks: */
  toggleOscillator(oscType: string): void {
    let synthParams: Object = Object.assign({}, this.state.synthParams);
    synthParams.oscillator.type = oscType;
    this.setState({ synthParams });
  }

  /** Handle octave adjustments */
  adjustOctave(amount: number) {
    this.setState(prevState => ({
      octave: prevState.octave + amount
    }));
  }

  /** Updates state, for a filterParam or synthParam, based on the number
   * passed in from the HTML slider in VerticalSlider.jsx. It checks
   * envelope type, and update the correct envelope state in App.jsx.
   * @public
   */
  envelopeSliderChange(envelopeType: string, sliderValue: number): void {
    switch (envelopeType) {
      case "attack":
      case "decay":
      case "sustain":
      case "release":
        this.setState(prevState => {
          let newState = { ...prevState };
          newState.synthParams.envelope[envelopeType] = sliderValue;
          return newState;
        });
        break;
      case "baseFrequency":
      case "frequency":
        this.setState(prevState => {
          let newState = { ...prevState };
          newState.filterParams[envelopeType] = sliderValue;
          return newState;
        });
        break;

      default:
        break;
    }
  }

  render() {
    const { filterParams, synthParams, octave } = this.state;

    /** Create a new Tone.js filter and route audio to master. */
    this.filter = new Tone.AutoFilter(filterParams).toMaster().start();

    /** Create a new Tone.js synth and route audio to this.filter */
    this.synth = new Tone.Synth(synthParams).connect(this.filter);

    return (
      <main>
        <header className="header">bc-010</header>
        <OuterCasing
          adjustOctave={this.adjustOctave}
          envelopeSliderChange={this.envelopeSliderChange}
          filterParams={filterParams}
          key="outerCasing"
          keyPress={this.keyPress}
          octave={octave}
          synthParams={synthParams}
          toggleOscillator={this.toggleOscillator}
        />
      </main>
    );
  }
}

export default App;
