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
  updateAllFilterEnvelopes,
} from './../VerticalSlider/actions.js';
import { setOctave } from './../OctaveContainer/actions.js';
import presets from './../../data/presets.json';

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

function Header({
  updateAllSynthEnvelopes,
  toggleOscillators,
  setOctave,
  updateAllFilterEnvelopes,
}) {
  return (
    <HeaderContainer>
      <div>bc-010</div>
      {presets.map((preset, idx) => {
        return (
          <PresetsContainer
            onClick={() => {
              updateAllSynthEnvelopes(preset.synthesizer.envelope);
              toggleOscillators(preset.synthesizer.oscillator.type);
              setOctave(preset.octave.octave);
              updateAllFilterEnvelopes(preset.filterParams);
            }}
          />
        );
      })}
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
      updateAllFilterEnvelopes,
    },
    dispatch,
  );

export default connect(
  null,
  mapDispatchToProps,
)(Header);
