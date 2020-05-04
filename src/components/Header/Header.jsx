// @flow
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleSidenav } from './../SideNav/actions.js';

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

const SideNavButton = styled.div`
  border: 1px dotted #111111;
  height: auto;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

function Header({ toggleSidenav }) {
  return (
    <HeaderContainer>
      <div>bc-010</div>
      <SideNavButton onClick={() => toggleSidenav()}>
        OPEN PRESETS
      </SideNavButton>
    </HeaderContainer>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleSidenav,
    },
    dispatch,
  );

export default connect(
  null,
  mapDispatchToProps,
)(Header);
