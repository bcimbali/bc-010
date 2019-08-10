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
  synthesizer: Object,
  toggleOscillator: Function,
};
/** This holds everything. This is just one step down from App.jsx. */
class OuterCasing extends Component<Props> {
  constructor(props: Props) {
    super(props);
    autoBind(this);
  }

  /** Declare synth and filter */
  synth: Object = {};
  filter: Object = {};

  /** Actually plays/sounds the note on the synth: */
  keyPress(note: string | void): void {
    this.synth.triggerAttackRelease(note, "8n");
  }

  render() {
    const {
      adjustOctave,
      filterParams,
      octave,
      synthParams,
      synthesizer,
    } = this.props;

    /** Create a new Tone.js filter and route audio to master. */
    this.filter = new Tone.AutoFilter(filterParams).toMaster().start();

    /** Create a new Tone.js synth and route audio to this.filter */
    this.synth = new Tone.Synth(synthesizer).connect(this.filter);

    return (
      <div className="outerCasing">
        <ControlPanel
          adjustOctave={adjustOctave}
          filterParams={filterParams}
          key="control-panel"
          octave={octave}
          synthParams={synthParams}
        />
        <Keyboard key="keyboard" keyPress={this.keyPress} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  octave: state.octave.octave,
  synthParams: state.synthesizer.envelope,
  filterParams: state.filterParams,
  oscType: state.synthesizer.oscillator.type,
  synthesizer: state.synthesizer,
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
  /** All nested parameters for the Tone.js synth */
  synthesizer: PropTypes.object,
  /** Holds all tweakable properties for the Tone.js synth. */
  synthParams: PropTypes.object,
  /** Handles change in oscillator types for Tone.js synth. */
  toggleOscillator: PropTypes.func,
};

export default connect(mapStateToProps)(OuterCasing);
