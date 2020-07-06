// @flow
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

import OuterCasing from './../OuterCasing';
import Header from './../Header';
import SideNav from './../SideNav';

const theme = {
  nature: {
    background: '#B2FF5A',
    primary: '#40522D',
    secondary: '#00BB10',
    tertiary: '#FFFFFF',
    quaternary: '#00bfa5',
  },
  light: {
    background: '#FFFFFF',
    primary: 'gray',
    secondary: '#222',
    tertiary: '#000000',
    quaternary: 'blue',
  },
  dark: {
    background: '#111111',
    primary: 'gray',
    secondary: 'indigo',
    tertiary: 'chartreuse',
    quaternary: 'red',
  },
};

const Main = styled.main`
  background-color: ${props => props.theme.primary};
  min-height: 100vh;
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
