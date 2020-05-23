// @flow
import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled, { css } from 'styled-components';
import {
  updateFilterEnvelope,
  updateSynthEnvelope,
  updateAllSynthEnvelopes,
  updateAllFilterEnvelopes,
} from './../VerticalSlider/actions.js';
import { setOctave } from './../OctaveContainer/actions.js';
import { toggleOscillators } from './../OscillatorBtn/actions.js';
import { changePreset, showSidenav, toggleSidenav } from './actions.js';
import presets from './../../data/presets.json';
import useOnClickOutside from './../../hooks/useOnClickOutside.js';

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
  opacity: ${({ isSideNavOpen }) => (isSideNavOpen ? '1' : '0')};
  position: fixed;
  right: 0;
  top: 0;
  transition: 0.5s;
  width: ${({ isSideNavOpen }) => (isSideNavOpen ? '25%' : '0')};
  z-index: 1;

  @media (max-width: 768px) {
    width: ${({ isSideNavOpen }) => (isSideNavOpen ? '60%' : '0')};
  }
`;

const PresetItem = styled.div`
  border-bottom: 1px solid #111111;
  display: flex;
  justify-content: center;
  letter-spacing: 3px;
  padding: 20px 0;
  text-transform: uppercase;
  width: 100%;

  :hover {
    background-color: #00bfa5;
    color: white;
    cursor: pointer;
    opacity: 0.8;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: #00bb10;
      color: #ffffff;
    `};
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
  activePreset,
  isSideNavOpen,
  setOctave,
  toggleOscillators,
  updateAllSynthEnvelopes,
  updateAllFilterEnvelopes,
  updateFilterEnvelope,
  updateSynthEnvelope,
  toggleSidenav,
  changePreset,
  showSidenav,
}) {
  const sideNavRef = useRef();

  useOnClickOutside(sideNavRef, () => showSidenav(false));

  return (
    <OuterContainer isSideNavOpen={isSideNavOpen} ref={sideNavRef}>
      <SideNavHeaderSection>
        <SideNavTitle>Presets</SideNavTitle>
        <CloseButton onClick={() => toggleSidenav()}>X</CloseButton>
      </SideNavHeaderSection>
      <PresetsContainer>
        {presets.map((preset, idx) => {
          return (
            <PresetItem
              isActive={activePreset === preset.name}
              key={preset.id}
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
  activePreset: state.preset.name,
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
      showSidenav,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideNav);
