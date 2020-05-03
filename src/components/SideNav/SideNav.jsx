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
  background-color: green;
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

function SideNav({ isSideNavOpen }) {
  return (
    <OuterContainer isSideNavOpen={isSideNavOpen}>asdfsadfsda</OuterContainer>
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
