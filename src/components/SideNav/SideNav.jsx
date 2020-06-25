// @flow
import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
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

const CloseButton = styled(FontAwesomeIcon)`
  padding: 0 2px;
  visibility: ${({ hidden }) => (hidden ? 'hidden' : 'visible')};
  :hover {
    background-color: #00bfa5;
    color: white;
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
  width: ${({ isSideNavOpen }) => (isSideNavOpen ? '30%' : '0')};
  z-index: 1;

  @media (max-width: 768px) {
    width: ${({ isSideNavOpen }) => (isSideNavOpen ? '60%' : '0')};
  }
`;

const PresetItem = styled.div`
  border-bottom: 1px solid #111111;
  display: flex;
  font-size: 2rem;
  justify-content: center;
  letter-spacing: 3px;
  padding: 20px 0;
  text-align: center;
  text-transform: uppercase;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }

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
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SideNavTitle = styled.div`
  color: #111111;
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
        <CloseButton hidden icon={faTimes} onClick={() => toggleSidenav()} />
        <SideNavTitle>PRESETS</SideNavTitle>
        <CloseButton icon={faTimes} onClick={() => toggleSidenav()} />
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
