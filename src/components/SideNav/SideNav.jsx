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
import { changePreset, toggleSidenav } from './actions.js';
import presets from './../../data/presets.json';

const CloseButton = styled.div`
  color: #111111;
  font-size: 2rem;
  position: absolute;
  right: 0.5rem;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const OuterContainer = styled.div`
  background-color: #b2ff5a;
  border-left: 1px solid #111111;
  box-shadow: ${({ isSideNavOpen }) =>
    isSideNavOpen ? '-5px 0px 10px 1px rgba(1, 1, 1, 0.2)' : '0'};
  height: 100%;
  overflow-x: hidden;
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

const SideNavHeaderSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
`;

const SideNavTitle = styled.div`
  color: #111111;
  font-size: 2rem;
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
  changePreset,
}) {
  return (
    <OuterContainer isSideNavOpen={isSideNavOpen}>
      <SideNavHeaderSection>
        <SideNavTitle>Presets</SideNavTitle>
        <CloseButton onClick={() => toggleSidenav()}>X</CloseButton>
      </SideNavHeaderSection>
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
                changePreset(preset.name);
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
      changePreset,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideNav);
