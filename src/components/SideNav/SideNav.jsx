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
import {
  changeTheme,
  changePreset,
  showSidenav,
  toggleSidenav,
} from './actions.js';
import presets from './../../data/presets.json';
import useOnClickOutside from './../../hooks/useOnClickOutside.js';
import Dropdown from './../SideNavDropdown';

import themeObj from './../../styles/theme.js';

const CloseButton = styled(FontAwesomeIcon)`
  padding: 0 2px;
  visibility: ${({ hidden }) => (hidden ? 'hidden' : 'visible')};
  :hover {
    background-color: ${props => props.theme.quaternary};
    color: white;
    cursor: pointer;
    opacity: 0.8;
  }
`;

const OuterContainer = styled.div`
  background-color: ${props => props.theme.background};
  border-left: 1px solid ${props => props.theme.primary};
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
  border-bottom: 1px solid ${props => props.theme.primary};
  color: ${props => props.theme.primary};
  display: flex;
  font-size: 2rem;
  justify-content: center;
  letter-spacing: 3px;
  line-height: 70%;
  padding: 20px 0;
  text-align: center;
  text-transform: uppercase;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }

  :hover {
    background-color: ${props => props.theme.quaternary};
    color: white;
    cursor: pointer;
    opacity: 0.8;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${props => props.theme.secondary};
      color: ${props => props.theme.tertiary};
    `};
`;

const PresetsContainer = styled.div`
  border-top: 1px solid ${props => props.theme.primary};
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
  color: ${props => props.theme.primary};
`;

const SubHeader = styled.div`
  border-bottom: 1px solid ${props => props.theme.primary};
  border-top: 1px solid ${props => props.theme.primary};
  color: ${props => props.theme.primary};
  display: flex;
  font-size: 2rem;
  justify-content: flex-start;
  letter-spacing: 3px;
  line-height: 70%;
  padding: 20px 0;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
`;

const ThemeSwitcher = styled.div`
  background-color: ${props => props.theme.background};
  border-bottom: 1px solid ${props => props.theme.primary};
  border-left: 1px solid ${props => props.theme.primary};
  color: ${props => props.theme.primary};
  height: 30px;
  margin-left: auto;
  width: 90%;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: ${props => props.theme.primary};
      color: ${props => props.theme.background};
    `};
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
  changeTheme,
  currentTheme,
}) {
  const sideNavRef = useRef();

  useOnClickOutside(sideNavRef, () => showSidenav(false));

  return (
    <OuterContainer isSideNavOpen={isSideNavOpen} ref={sideNavRef}>
      <SideNavHeaderSection>
        <CloseButton hidden icon={faTimes} onClick={() => toggleSidenav()} />
        <SideNavTitle>MENU</SideNavTitle>
        <CloseButton icon={faTimes} onClick={() => toggleSidenav()} />
      </SideNavHeaderSection>
      <Dropdown
        currentSelection={selection =>
          selection === currentTheme ? true : false
        }
        clickHandler={item => {
          changeTheme(item);
          toggleSidenav();
        }}
        items={Object.keys(themeObj).map(th => th)}
        name="THEMES"
      />
      {/* <SubHeader>THEME</SubHeader>
      {Object.keys(themeObj).map((th, idx) => {
        return (
          <ThemeSwitcher
            key={`${th}-${idx}`}
            isSelected={currentTheme === th}
            onClick={() => {
              changeTheme(th);
              toggleSidenav();
            }}
          >
            {th}
          </ThemeSwitcher>
        );
      })} */}
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
  currentTheme: state.theme.name,
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
      changeTheme,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideNav);
