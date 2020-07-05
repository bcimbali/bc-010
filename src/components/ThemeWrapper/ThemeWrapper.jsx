// @flow
import React from 'react';
import { ThemeProvider } from 'styled-components';
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
    background: 'gray',
    primary: '#FFFFFF',
    secondary: 'gray',
    tertiary: '#000000',
    quaternary: 'blue',
  },
  dark: {
    background: '#FEFEFE',
    primary: '#111111',
    secondary: '#4FFFFF',
    tertiary: 'chartreuse',
    quaternary: 'red',
  },
};

function ThemeWrapper({ currentTheme }) {
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <main>
        <Header>bc-010</Header>
        <OuterCasing key="outerCasing" />
        <SideNav />
      </main>
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
