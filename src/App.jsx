// @flow
import './reset.css';
import rootReducer from './rootReducer';

import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import logger from "redux-logger";
import styled from 'styled-components';
import { composeWithDevTools } from 'redux-devtools-extension';

import OuterCasing from './components/OuterCasing';
import Header from './components/Header';

const middleware = [];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

// const Header = styled.header`
//   color: white;
//   font-size: 2vw;
//   font-weight: bold;
// `;

type Props = {};
type State = {};

class App extends Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <main>
          <Header>bc-010</Header>
          <OuterCasing key="outerCasing" />
        </main>
      </Provider>
    );
  }
}

export default App;
