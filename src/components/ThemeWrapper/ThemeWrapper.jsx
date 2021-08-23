// @flow
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

import OuterCasing from './../OuterCasing';
import Header from './../Header';
import SideNav from './../SideNav';
import theme from './../../styles/theme.js';

const Main = styled.main`
  background-color: ${props => props.theme.primary};
  min-height: 100vh;
  transition: all ${({ theme }) => theme.globalTransition};
`;

function ThemeWrapper({ currentTheme }) {
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <Main>
        <Header>bc-010</Header>
        <OuterCasing key="outerCasing" />
        <SideNav />
      </Main>
    </ThemeProvider>
  );
}

const mapStateToProps = state => ({
  currentTheme: state.theme.name,
});

export default connect(
  mapStateToProps,
  null,
)(ThemeWrapper);
