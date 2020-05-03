// @flow
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleOscillators } from './../OscillatorBtn/actions.js';
import {
  updateFilterEnvelope,
  updateSynthEnvelope,
  updateAllSynthEnvelopes,
} from './../VerticalSlider/actions.js';
import { setOctave } from './../OctaveContainer/actions.js';

const HeaderContainer = styled.header`
  color: white;
  display: flex;
  font-size: 2vw;
  font-weight: bold;
  justify-content: space-between;
`;

const PresetsContainer = styled.div`
  background-color: orange;
  border: 1px dotted red;
  height: 10px;
  width: 40px;
`;

const newSynthPatch = {
  octave: {
    octave: 3,
  },
  synthesizer: {
    envelope: {
      attack: 0.5,
      decay: 0.6,
      sustain: 0.7,
      release: 7,
    },
    oscillator: {
      type: 'square',
    },
    filterParams: {
      frequency: 0,
      type: 'sine',
      depth: 1,
      baseFrequency: 500,
      octaves: 2.6,
      filter: {
        type: 'lowpass',
        rolloff: -12,
        Q: 1,
      },
    },
  },
};

function Header(props) {
  console.log('In Header.jsx, this is props: ', props);
  return (
    <HeaderContainer>
      <div>bc-010</div>
      <PresetsContainer
        onClick={() => {
          props.updateAllSynthEnvelopes(newSynthPatch.synthesizer.envelope);
          props.toggleOscillators(newSynthPatch.synthesizer.oscillator.type);
          props.setOctave(newSynthPatch.octave.octave);
        }}
      >
        <div />
      </PresetsContainer>
    </HeaderContainer>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleOscillators,
      updateFilterEnvelope,
      updateSynthEnvelope,
      updateAllSynthEnvelopes,
      setOctave,
    },
    dispatch,
  );

export default connect(
  null,
  mapDispatchToProps,
)(Header);
