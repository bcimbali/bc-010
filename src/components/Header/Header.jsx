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

const Preset = styled.div`
  border: 1px dotted black;
  color: #111111;
  height: auto;
  margin-left: 5px;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const PresetsContainer = styled.div`
  display: flex;
`;

function Header({
  setOctave,
  toggleOscillators,
  updateAllFilterEnvelopes,
  updateAllSynthEnvelopes,
}) {
  return (
    <HeaderContainer>
      <div>bc-010</div>
      <PresetsContainer>
        {presets.map((preset, idx) => {
          return (
            <Preset
              onClick={() => {
                updateAllSynthEnvelopes(preset.synthesizer.envelope);
                toggleOscillators(preset.synthesizer.oscillator.type);
                setOctave(preset.octave.octave);
                updateAllFilterEnvelopes(preset.filterParams);
              }}
            >
              {preset.name}
            </Preset>
          );
        })}
      </PresetsContainer>
    </HeaderContainer>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setOctave,
      toggleOscillators,
      updateAllSynthEnvelopes,
      updateAllFilterEnvelopes,
      updateFilterEnvelope,
      updateSynthEnvelope,
    },
    dispatch,
  );

export default connect(
  null,
  mapDispatchToProps,
)(Header);
