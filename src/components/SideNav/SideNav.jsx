// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import {
  updateFilterEnvelope,
  updateSynthEnvelope,
  updateAllSynthEnvelopes,
  updateAllFilterEnvelopes,
} from './../VerticalSlider/actions.js';
import { setOctave } from './../OctaveContainer/actions.js';
import { toggleOscillators } from './../OscillatorBtn/actions.js';
import { toggleSidenav } from './actions.js';
import presets from './../../data/presets.json';

const OuterContainer = styled.div`
  background-color: #b2ff5a;
  border-left: 1px solid #111111;
  box-shadow: ${({ isSideNavOpen }) =>
    isSideNavOpen ? '-5px 0px 10px 1px rgba(1, 1, 1, 0.2)' : '0'};
  height: 100%;
  overflow-x: hidden;
  padding-top: 60px;
  position: fixed;
  right: 0;
  top: 0;
  transition: 0.5s;
  width: ${({ isSideNavOpen }) => (isSideNavOpen ? '25%' : '0')};
  z-index: 1;
`;

const PresetItem = styled.div`
  border-bottom: 1px solid #111111;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  width: 100%;

  :hover {
    background-color: #00bfa5;
    color: white;
    cursor: pointer;
    opacity: 0.8;
  }
`;

const PresetsContainer = styled.div`
  border-top: 1px solid #111111;
  display: flex;
  flex-direction: column;
`;

function SideNav({
  isSideNavOpen,
  setOctave,
  toggleOscillators,
  updateAllSynthEnvelopes,
  updateAllFilterEnvelopes,
  updateFilterEnvelope,
  updateSynthEnvelope,
  toggleSidenav,
}) {
  return (
    <OuterContainer isSideNavOpen={isSideNavOpen}>
      <PresetsContainer>
        {presets.map((preset, idx) => {
          return (
            <PresetItem
              onClick={() => {
                updateAllSynthEnvelopes(preset.synthesizer.envelope);
                toggleOscillators(preset.synthesizer.oscillator.type);
                setOctave(preset.octave.octave);
                updateAllFilterEnvelopes(preset.filterParams);
                toggleSidenav();
              }}
            >
              {preset.name}
            </PresetItem>
          );
        })}
      </PresetsContainer>
    </OuterContainer>
  );
}

const mapStateToProps = state => ({
  isSideNavOpen: state.sideNav.isSideNavOpen,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setOctave,
      toggleOscillators,
      updateAllSynthEnvelopes,
      updateAllFilterEnvelopes,
      updateFilterEnvelope,
      updateSynthEnvelope,
      toggleSidenav,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideNav);
