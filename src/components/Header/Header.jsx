// @flow
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { toggleSidenav } from './../SideNav/actions.js';

const HeaderContainer = styled.header`
  align-items: center;
  color: white;
  display: flex;
  font-size: 2vw;
  font-weight: bold;
  justify-content: space-between;
  padding: 0 10px;

  @media (max-width: 768px) {
    font-size: 14px;
    min-height: 30px;
  }
`;

const PresetNameDisplay = styled.div`
  color: white;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

const SideNavButton = styled.div`
  border: 1px solid #ffffff;
  height: auto;
  padding: 5px;

  @media (max-width: 610px) {
    display: none;
  }

  :hover {
    background-color: #00bfa5;
    cursor: pointer;
    opacity: 0.8;
  }
`;

const HamburgerButton = styled(FontAwesomeIcon)`
  font-size: 2rem;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }

  @media (min-width: 610px) {
    display: none;
  }
`;

function Header({ presetName, toggleSidenav }) {
  return (
    <HeaderContainer>
      <div>bc-010</div>
      <PresetNameDisplay>{presetName}</PresetNameDisplay>
      <SideNavButton onClick={() => toggleSidenav()}>
        OPEN PRESETS
      </SideNavButton>
      <HamburgerButton icon={faBars} onClick={() => toggleSidenav()} />
    </HeaderContainer>
  );
}

const mapStateToProps = state => ({
  presetName: state.preset.name,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleSidenav,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
