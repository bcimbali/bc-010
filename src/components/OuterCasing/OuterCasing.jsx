// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import autoBind from 'react-autobind';
import * as Tone from 'tone';
import styled from 'styled-components';
import { isEmpty } from 'lodash';
import ControlPanel from './../ControlPanel';
import Keyboard from './../Keyboard';
import PropTypes from 'prop-types';

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  max-width: 100%;
`;

type Props = {
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
  keyPressDown(note: string | void): void {
    this.synth.triggerAttack(note);
  }

  keyPressUp(note: string | void): void {
    this.synth.triggerRelease();
  }

  render() {
    const { filterParams, octave, synthParams, synthesizer } = this.props;
    if (!isEmpty(this.filter)) {
      this.filter.dispose();
    }
    /** Create a new Tone.js filter and route audio to master. */
    this.filter = new Tone.AutoFilter(filterParams).toMaster().start();

    if (!isEmpty(this.synth)) {
      this.synth.dispose();
    }
    /** Create a new Tone.js synth and route audio to this.filter */
    this.synth = new Tone.Synth(synthesizer).connect(this.filter);

    return (
      <OuterContainer>
        <ControlPanel
          filterParams={filterParams}
          key="control-panel"
          octave={octave}
          synthParams={synthParams}
        />
        <Keyboard
          key="keyboard"
          keyPressDown={this.keyPressDown}
          keyPressUp={this.keyPressUp}
        />
      </OuterContainer>
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
