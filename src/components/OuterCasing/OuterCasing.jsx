// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import autoBind from "react-autobind";
import Tone from "tone";
import ControlPanel from "./../ControlPanel";
import Keyboard from "./../Keyboard";
import PropTypes from "prop-types";

type Props = {
  adjustOctave: Function,
  envelopeSliderChange: Function,
  filterParams: Object,
  keyPress: Function,
  octave: number,
  synthParams: Object,
  toggleOscillator: Function,
};

/** This holds everything. This is just one step down from App.jsx. */
class OuterCasing extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    autoBind(this);
    this.state = {
      octave: 5,
      synthParams: {
        oscillator: {
          type: "sawtooth",
        },
        envelope: {
          attack: 0.0001,
          decay: 0.2,
          sustain: 0.2,
          release: 1,
        },
        portamento: 0.05,
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
          Q: 1,
        },
      },
    };
  }

  /** Declare synth and filter */
  synth: Object = {};
  filter: Object = {};

  /** Actually plays/sounds the note on the synth: */
  keyPress(note: string | void): void {
    this.synth.triggerAttackRelease(note, "8n");
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
    const {
      adjustOctave,
      envelopeSliderChange,
      filterParams,
      keyPress,
      octave,
      oscType,
      synthParams,
      synthReducer,
      toggleOscillator,
    } = this.props;

    console.log('synthParams: ', synthParams);
    console.log('synthReducer: ', synthReducer);

    /** Create a new Tone.js filter and route audio to master. */
    // this.filter = new Tone.AutoFilter(filterParams).toMaster().start();

    /** Create a new Tone.js synth and route audio to this.filter */
    this.synth = new Tone.Synth(synthReducer).toMaster();

    return (
      <div className="outerCasing">
        <ControlPanel
          adjustOctave={adjustOctave}
          envelopeSliderChange={this.envelopeSliderChange}
          filterParams={filterParams}
          key="control-panel"
          octave={octave}
          // toggleOscillator={toggleOscillator}
          synthParams={synthParams}
        />
        <Keyboard key="keyboard" keyPress={this.keyPress} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  octave: state.octaveContainer.octave,
  synthParams: state.synthReducer.envelope,
  filterParams: state.synthReducer.envelope.filterParams,
  oscType: state.synthReducer.oscillator.type,
  synthReducer: state.synthReducer,
});

OuterCasing.propTypes = {
  /** Moves ocatve range of keyboard notes up or down */
  adjustOctave: PropTypes.func,
  /** Takes in a number & envelope name. Updates App.jsx state for the envelope name with the passed in number. */
  envelopeSliderChange: PropTypes.func,
  /** Holds all tweakable properties for the Tone.js filter. */
  filterParams: PropTypes.object,
  /** Actually plays/fires the note on the Tone.js synth. */
  keyPress: PropTypes.func,
  /** Current octave for the keyboard. Derived from App.jsx state. */
  octave: PropTypes.number,
  /** Holds all tweakable properties for the Tone.js synth. */
  synthParams: PropTypes.object,
  /** Handles change in oscillator types for Tone.js synth. */
  toggleOscillator: PropTypes.func,
};

export default connect(mapStateToProps)(OuterCasing);
